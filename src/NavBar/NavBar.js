import React from 'react';
import logo from '../assets/logo.png';
import SearchBar  from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

function NavBar(props) {
	return (
		<div className={styles['nav-bar']}>
			<img src={logo} className={styles.logo} alt="celp logo"/>			
			<SearchBar small/>
			<button className={`button ${styles['nav-button']}`}>Log In</button>
			<button className={`button ${styles['nav-button']}`}>Register</button>
		</div>
	);
}

export default NavBar;