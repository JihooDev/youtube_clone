import styles from './app.module.css';
import { useEffect, useState } from 'react';
import VideoItem from './component/video_item/video_item';
import VideoList from './component/video_list/video_list';
import SearchHeader from './component/search_header/search_header';

function App() {
	const [videos, setVideos] = useState([]);
	// 초기 값의 타입을 미리 정의 해두면 좋다

	const search = query => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&q=${query}&key=AIzaSyCMnzRNULjlwfHAPNWpa6P3Xz3GFIvebDU`,
			requestOptions
		)
			.then(response => response.json())
			.then(result => result.items.map(it => ({ ...it, id: it.id.videoId })))
			.then(items => setVideos(items))
			.catch(error => console.log('error', error));
	};

	useEffect(() => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(
			'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCMnzRNULjlwfHAPNWpa6P3Xz3GFIvebDU',
			requestOptions
		)
			.then(response => response.json())
			.then(result => setVideos(result.items))
			.catch(error => console.log('error', error));
	}, []); // Mount 가 될때만 호출함 (deps)

	return (
		<div className={styles.app}>
			<SearchHeader onSearch={search} />
			<VideoList data={videos} />
		</div>
	);
}

export default App;
