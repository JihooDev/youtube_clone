import React from 'react';
import styles from './video_item.module.css';

export default function VideoItem({ data, onVideoClick, display }) {
	const { snippet } = data;

	const displayType = display === 'list' ? styles.list : styles.grid;
	return (
		<li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(data)}>
			<div className={styles.video}>
				<img className={styles.thumbnails} src={snippet.thumbnails.medium.url} alt="thumbnails img" />
				<div className={styles.meta_data}>
					<p className={styles.title}>{snippet.title}</p>
					<p className={styles.channel}>{snippet.channelTitle}</p>
				</div>
			</div>
		</li>
	);
}
