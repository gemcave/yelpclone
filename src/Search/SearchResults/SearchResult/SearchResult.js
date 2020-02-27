import React from 'react';
import styles from './SearchResult.module.css';
import BusinessRating from '../../../BusinessRating/BusinessRating'

function SearchResult(props) {
	return (
		<div className={styles['search-result']}>
			<img src="http://via.placeholder.com/210" className={styles['business-image']} alt="business"/>
			<div className={styles['business-info']}>
				<h2 className="subtitle">Pizza Cafe</h2>
				<BusinessRating />
				<p>$$<span className="tag">Burgers</span> <span className="tag">Fast Food</span></p>
			</div>
			<div className={styles['contact-info']}>
				<p>+1234545644</p>
				<p>Green Street 5</p>
				<p>21344 Krakow</p>
			</div>
		</div>
	);
}

export default SearchResult;