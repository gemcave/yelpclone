import React from 'react';
import logo from '../assets/logo.png';
import styles from './NavBar.module.css';
import SearchBar  from '../SearchBar/SearchBar';

function NavBar(props) {
	return (
		<div className={styles['nav-bar']}>
			<img src={logo} className={styles.logo} alt="celp logo"/>			
			<SearchBar />
		</div>
	);
}

export default NavBar;