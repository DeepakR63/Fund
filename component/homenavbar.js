import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/home';
import Profile from '../pages/profile';

//Home menu bar
class HomeBanner extends Component
{
    constructor(props)
	{
        super(props);
        this.doLogout=this.doLogout.bind(this);
    }

    //Clear the Authentication details from the localstorage.
    doLogout()
    {
        localStorage.setItem('Auth', "");
    }

    render()
    {
        return(
            <div>
                <nav class="navbar navbar-inverse" id="nav-banner">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <h3 id="h3-nav-head"><b>Fundraiser.com</b></h3>
                        </div>
                        <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown-toggle">
                                <a  class="dropdown" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user" id="spn-icon-usr"/></a>
                                <ul class="dropdown-menu">
                                    <li><Link to={ { pathname: '/home/profile', state: { profile: this.props.details.email } } }>Profile</Link></li>
                                    <li><Link to="/" onClick={this.doLogout}>SignOut</Link></li>
                                </ul>
                            </li>    
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}

export default HomeBanner;