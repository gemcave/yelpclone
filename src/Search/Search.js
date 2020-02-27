import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import SearchBar from '../SearchBar/SearchBar.js';
import styles from './Search.module.css';
import SubNav from '../NavBar/SubNav/SubNav.js';
import SearchResultSummary from './SearchResultSummary/SearchResultSummary.js';
import SearchResults from './SearchResults/SearchResults.js';

function Search(props) {
	return (
		<div>
			<NavBar />
			<SubNav />
			<SearchResultSummary />
			<SearchResults />
		</div>
	);
}

export default Search;