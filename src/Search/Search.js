import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import SubNav from '../NavBar/SubNav/SubNav.js';
import SearchResultSummary from './SearchResultSummary/SearchResultSummary.js';
import {SearchResults} from './SearchResults/SearchResults.js';
import {useLocation, useHistory} from 'react-router-dom';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';

function Search(props) {
	let location = useLocation();
	let history = useHistory();
	const params = new URLSearchParams(location.search);
	const term = params.get('find_desc');
	const locationParams = params.get('find_loc');

	const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParams);

	console.log(searchParams)

	if (!term || !locationParams) {
			history.push('/');
	}


	function search(term, location) {
		const encodedTerm = encodeURI(term);
		const encodedLocation = encodeURI(location);
		history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
		performSearch({term, location});
}

	return (
		<>
			<NavBar term={term} location={locationParams} search={search}/>
			<SubNav />
			<SearchResultSummary term={searchParams.term} 
													 location={searchParams.location}
													 amountResults={amountResults}
                           shownResults={businesses ? businesses.length : 0}
			/>
			<SearchResults businesses={businesses}/>
		</>
	);
}

export default Search;