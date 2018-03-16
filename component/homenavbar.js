import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/home';
import Profile from '../pages/profile';
class HomeBanner extends Component{
    // constructor(props)
	// {
	// 	super(props);
	// }
    render(){
        return(
            <div >
                <nav class="navbar navbar-inverse" id="nav-banner">
                    <div class="container-fluid">
                   
                    <ul class="nav navbar-nav navbar-right">
                        
                        
      
                            <li class="dropdown-toggle">
                            <a  class="dropdown" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user" id="spn-icon-usr"/></a>
                            <ul class="dropdown-menu">
                            <li><Link to={ { 
                                pathname: '/home/profile', 
                                state: { profile: this.props.details.email } 
                                } }>Profile</Link></li>
                            <li><Link to="/">SignOut</Link></li>
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