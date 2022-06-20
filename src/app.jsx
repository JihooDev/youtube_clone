import styles from './app.module.css';
import { useEffect, useState } from 'react';
import VideoList from './component/video_list/video_list';
import SearchHeader from './component/search_header/search_header';

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	// 초기 값의 타입을 미리 정의 해두면 좋다

	const search = query => {
		youtube
			.search(query) //
			.then(videos => setVideos(videos));
	};

	useEffect(() => {
		youtube
			.mostPopular() //
			.then(videos => setVideos(videos));
	}, []); // Mount 가 될때만 호출함 (deps)

	return (
		<div className={styles.app}>
			<SearchHeader onSearch={search} />
			<VideoList data={videos} />
		</div>
	);
}

export default App;
