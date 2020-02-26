import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import SearchBar from '../SearchBar/SearchBar.js';

function Search(props) {
	return (
		<div>
			<NavBar />
			<SearchBar />
			<button className={`button ${styles['nav-button']}`}>Log In</button>
			<button className={`button ${styles['nav-button']}`}>Register</button>
		</div>
	);
}

export default Search;