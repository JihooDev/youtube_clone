import styles from './app.module.css';
import { useEffect, useState } from 'react';
import VideoList from './component/video_list/video_list';
import SearchHeader from './component/search_header/search_header';
import VideoDetail from './component/video_detail/videoDetail';

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	// 초기 값의 타입을 미리 정의 해두면 좋다

	const selectVideo = video => {
		setSelectedVideo(video);
	};

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
			<section className={styles.content}>
				{selectedVideo && (
					<div className={styles.detail}>
						<VideoDetail video={selectedVideo} />
					</div>
				)}
				<div className={styles.list}>
					<VideoList data={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
				</div>
			</section>
		</div>
	);
}

export default App;
