import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

export default function VideoList({ data }) {
	return (
		<ul className={styles.videos}>
			{data.map(video => {
				return <VideoItem key={video.id} data={video} />;
			})}
		</ul>
	);
}
