import './App.css';
import { useEffect, useState } from 'react';
import VideoItem from './component/video_item/video_item';
import VideoList from './component/video_list/video_list';

function App() {
	const [videos, setVideos] = useState([]);
	// 초기 값의 타입을 미리 정의 해두면 좋다

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
		<div className="App">
			<VideoList data={videos} />
		</div>
	);
}

export default App;
