import React, { Component } from 'react';
import HomeBanner from '../component/homenavbar';

//Home page
class Home extends Component
{
	constructor(props)
	{
		super(props);
		
	}

	render()
	{
		return(
			<div>	
				<HomeBanner details={this}/>	
			</div>
		)
	}
}

export default Home;
