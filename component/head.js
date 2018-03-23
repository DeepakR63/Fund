import React, { Component } from 'react';

//Login header
class HeadBanner extends Component
{
    render()
    {
        return(
            <div >
                <nav class="navbar navbar-inverse" id="nav-banner">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <h3 id="h3-nav-head"><b>Fundraiser.com</b></h3>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}

export default HeadBanner;