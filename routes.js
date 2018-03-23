import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/login';
import SignUp from './pages/signup'
import Home from './pages/home';
import Profile from './pages/profile';
import UpdateProfile from './pages/profileupdation';

//Main component with route details
export default class App extends Component 
{
	render() 
	{
		return(
				<BrowserRouter>
					<div>
						<Route
							exact
							path="/"
							component={ Login }
						/>
						<Route
                           
							path="/signup"
							component={ SignUp }
						/>
						<Route
                           
							path="/home"
							component={ Home }
						/>
						 <Route 
						 	exact
                            path="/home/profile"
                            component={ Profile }
                        />
						 <Route 
                            path="/home/profileupdation"
                            component={ UpdateProfile }
                        />
						
					</div>
				</BrowserRouter>
		)
	}
}