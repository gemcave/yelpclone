import React,{ useState } from 'react';
import styles from './SearchBar.module.css';


function SearchBar(props) {
	const [term, setTerm] = useState(props.term || '');
	const [location, setLocation] = useState(props.location || '');
	const sizeClass = props.small ? '': 'is-medium';
	// console.log(process.env.REACT_APP_BEARER_TOKEN)

	function submit(e) {
		if(typeof props.search === 'function'){
			props.search(term, location);
		}
		console.log(term, location);
		e.preventDefault();
	}
  return (
		<form onSubmit={submit}>
			<div className="field has-addons">
				<p className="control">
					<button className={`button is-static ${sizeClass}`}>Search</button>
				</p>
				<p className="control">
					<input
						className={`input ${sizeClass} ${styles['input-control']}`}
						type="text"
						placeholder="burgers, barbers, spas, handyman"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</p>
				<p className="control">
					<div className={`button is-static  ${sizeClass}`}>NEAR</div>
				</p>
				<p className="control">
					<input
						className={`input ${sizeClass} ${styles['input-control']}`}
						type="text"
						placeholder="Where"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
					/>
				</p>
				<div className={`button ${styles['search-button']} ${sizeClass}`} onClick={submit}>
					<span className={`icon is-small ${styles['search-icon']}`}>
						<i className="fas fa-search"></i>
					</span>
				</div>
			</div>
		</form>
  );
}

export default SearchBar;
