import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {
	const sizeClass = props.small ? '': 'is-medium';
  return (
    <div className="field has-addons">
      <p className="control">
        <button className={`button is-static ${sizeClass}`}>Search</button>
      </p>
      <p className="control">
        <input
          className={`input ${sizeClass} ${styles['input-control']}`}
          type="text"
          placeholder="burgers, barbers, spas, handyman"
        />
      </p>
      <p className="control">
        <button className={`button is-static  ${sizeClass}`}>NEAR</button>
      </p>
      <p className="control">
        <input
          className={`input ${sizeClass} ${styles['input-control']}`}
          type="text"
          placeholder="Where"
        />
      </p>
      <div className={`button ${styles['search-button']} ${sizeClass}`}>
        <span className={`icon is-small ${styles['search-icon']}`}>
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
