import React from 'react';
import { useRef } from 'react';
import styles from './search_header.module.css';

export default function SearchHeader({ onSearch }) {
	const inputRef = useRef();

	const handleSearch = () => {
		const value = inputRef.current.value;
		onSearch(value);
	};

	const onClick = e => {
		handleSearch();
	};

	const onKeyUp = e => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.img} src={process.env.PUBLIC_URL + 'image/logo.png'} alt="로고" />
				<h1 className={styles.title}>YouTube</h1>
			</div>
			<input className={styles.input} type="search" placeholder="검색하세요" onKeyUp={onKeyUp} ref={inputRef} />
			<button className={styles.btn} type="submit" onClick={onClick}>
				<img className={styles.btn_img} src={process.env.PUBLIC_URL + 'image/search.png'} alt="검색" />
			</button>
		</header>
	);
}
