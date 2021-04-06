class Github {
	constructor() {
		this.client_id = "b1d983a15a9ecd1fc632";
		this.client_secret = "aa231be34dc41e32753b12cb3e09d28fd4962217";
		this.repos_count = 5;
		this.repos_sort = "created: asc";
	}
	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);
		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);
		const profile = await profileResponse.json();
		const repos = await repoResponse.json();
		return {
			profile,
			repos,
		};
	}
}
