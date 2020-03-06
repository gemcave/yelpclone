import React from 'react';
import logo from '../assets/logo.png';
import SearchBar  from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar(props) {
	return (
		<div className={styles['nav-bar']}>
			<Link to={'/'}><img src={logo} className={styles.logo} alt="celp logo"/></Link>
			<SearchBar small term={props.term} location={props.location}/>
			<button className={`button ${styles['nav-button']}`}>Log In</button>
			<button className={`button ${styles['nav-button']}`}>Register</button>
		</div>
	);
}

export default NavBar;