import React from 'react';
import { LandingPage } from './LandingPage/LandingPage';
import {Switch, Route} from 'react-router-dom';
import Search from './Search/Search';

function App()   {
  return (
    <>
			<Switch>
				<Route path='/search' component={Search} exact/>
				<Route path='/' component={LandingPage}/>
			</Switch>
    </>
  )
}

export default App;
