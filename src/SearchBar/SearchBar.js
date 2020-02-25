import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {
	return (
		<div className="field has-addons">
			<p className="control">
				<button className="button is-static is-medium">
					Search
				</button>
			</p>
			<p className="control">
				<input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="burgers, barbers, spas, handyman" />
			</p>
			<p className="control">
				<button className="button is-static is-medium">
					NEAR
				</button>
			</p>
			<p className="control">
				<input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Where" />
			</p>
			<div className={`button ${styles['search-button']} is-medium`}>
				<span className="icon is-small"><i className="fas fa-search"></i></span>
			</div>
		</div>
	);
}

export default SearchBar;