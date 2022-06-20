class Youtube {
	constructor(key) {
		this.key = key;

		this.getRequestOptions = {
			method: 'GET',
			redirect: 'follow',
		};
	}

	mostPopular() {
		return fetch(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
			this.getRequestOptions
		)
			.then(response => response.json())
			.then(result => result.items);
	}

	search(query) {
		return fetch(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&q=${query}&key=${this.key}`,
			this.getRequestOptions
		)
			.then(response => response.json())
			.then(result => result.items.map(it => ({ ...it, id: it.id.videoId })));
	}
}

export default Youtube;
