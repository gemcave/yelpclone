import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import SearchBar from '../SearchBar/SearchBar.js';
import styles from './Search.module.css';
import SubNav from '../NavBar/SubNav/SubNav.js';
import SearchResultSummary from './SearchResultSummary/SearchResultSummary.js';
import SearchResults from './SearchResults/SearchResults.js';
import {useLocation} from 'react-router-dom'

function Search(props) {
	let location = useLocation();
	const params = new URLSearchParams(location.search);
	const term = params.get('find_desc');
	const locationParams = params.get('find_loc');


	return (
		<div>
			<NavBar term={term} location={locationParams}/>
			<SubNav />
			<SearchResultSummary term={term} location={locationParams}/>
			<SearchResults />
		</div>
	);
}

export default Search;