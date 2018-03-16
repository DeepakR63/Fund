import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Profile extends Component
{
    constructor(props)
    {
        super(props);
        
        this.logindata=JSON.parse(localStorage.getItem('LoginData'));
        this.getProfileDetails(); 
    }

    getProfileDetails()
    {
        
        var _auth=JSON.parse(localStorage.getItem('Auth'));
        var _apibaseurl = "http://52.41.54.41:3001/fundraisers/"+parseInt(this.logindata.id);
        axios.interceptors.request.use((config) => {
            if( _auth ) {
                config.headers['Auth'] = _auth;
                return config;
            }
            else {
                return config;
            }
        });


        axios.get(_apibaseurl,{params : null})
        .then((response) =>
        {
            console.log(response);  
            if(response.status == 200)
            {

                this.userdata=response.data;
                localStorage.setItem('UserData', JSON.stringify(this.userdata));
                console.log(this.userdata);

            }
            else
            {
                console.log("Username does not exists");
                alert(response.headers.status-reason);
            }
        })
        .catch(function (error) 
        {
            console.log(error);
            alert("Exception");
        });
    }
    
    render()
    {
        return(
            <div>
                <ProfileDetails/>
            </div>

        )
    }
}

class ProfileDetails extends Component
{
    constructor(props)
    {
        super(props);
    }
    

    render()
    {
        return(
            <div class="container">
                <div class="row" id="div-profile-title">
                    <div class="col-sm-12">
                        <span id="spn-profile-title"> Profile </span>
                    </div>
                </div>
                <div class="row" id="div-profile-edit">
                    <div class="col-sm-12">
                    <span id="spn-profile-edit"><Link to='/home/profileupdation'><img src="../img/edit.png" class="img-round" id="img-edit" data-toggle="tooltip" title="edit" data-placement="right"/></Link></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <About/>
                    </div>
                    <div class="col-sm-8">
                        <Address/>
                    </div>
                </div>
                <div class="row" id="div-profile-contact">
                    <div class="col-sm-12">
                        <Contact/>
                    </div>
                </div>
            </div>
        )
    }
}

class About extends Component
{
    
    constructor(props)
    {
        

        super(props);
        this.userdata = JSON.parse(localStorage.getItem('UserData'));
    }

    render()
    {
        return(
            
                <div id="div-body-about">
                    <div class="row">
                        <div class="col-sm-10">
                            <div id="div-profile-img">
                                 <center> <img src="../img/usr.png" class="img-circle" id="img-usr"/> </center>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-10">
                            <center> <span class="spn-about-name">{this.userdata.first_name}</span><span class="spn-about-name"> {this.userdata.last_name} </span> </center>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-10">
                            <center> <span id="spn-profile-about" class="glyphicon glyphicon-envelope"> {this.userdata.email} </span></center>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-10">
                            <center> <span id="spn-profile-about" class="glyphicon glyphicon-phone">{this.userdata.phone} </span></center>
                        </div>
                    </div>

                </div>
        )
    }
}

class Address extends Component
{
    constructor(props)
    {
        super(props);
        this.userdata = JSON.parse(localStorage.getItem('UserData'));
    }

    render()
    {
        return(
                <div id="div-body-address">

                    <div class="row">
                        <div  class="col-sm-10">
                           
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-12">
                                        <span id="spn-profile-label"><img src="../img/dob.jpeg" class="img-circle" id="img-dob"/>{this.userdata.dob} </span>
                                        </div>
                                       
                                    </div>
                                    <hr/>
                                    <h5><b><span>Address</span></b></h5>
                                    <div class="row">
                                        
                                        
                                        <div class="col-sm-4">
                                            <span id="spn-profile-label"> Location : </span><span id="spn-profile-status"> {this.userdata.location} </span>
                                        </div>
                                         <div class="col-sm-4">
                                             <span id="spn-profile-label"> Street : </span><span id="spn-profile-status"> {this.userdata.street} </span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                             <span id="spn-profile-label"> City : </span><span id="spn-profile-status"> {this.userdata.city} </span>
                                        </div>
                                        <div class="col-sm-4">
                                            <span id="spn-profile-label"> State : </span><span id="spn-profile-status"> {this.userdata.state} </span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <span id="spn-profile-label"> Country Code : </span><span id="spn-profile-status"> {this.userdata.country_code} </span>
                                        </div>
                                        <div class="col-sm-4">
                                            <span id="spn-profile-label"> ZIP : </span><span id="spn-profile-status"> {this.userdata.zip} </span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <h5><b><span>Fundraiser</span></b></h5>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <span id="spn-profile-label"> Fundraiser Type : </span><span id="spn-profile-status"> {this.userdata.fundraiser_type} </span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <span id="spn-profile-label"> Organization : </span><span id="spn-profile-status"> {this.userdata.organization_name} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
        )
    }
}

class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.userdata = JSON.parse(localStorage.getItem('UserData'));
    }

    render()
    {
        return(
                <div id="div-body-contact">
                    <div id="div-contact-container">
                        <div class="row">
                            <div class="col-sm-12">
                                <span id="spn-profile-label"><a href={this.userdata.facebook_link}><img src="../img/fb.jpeg" class="img-circle" id="img-network"/></a> </span><span id="spn-profile-label"><a href={this.userdata.twitter_link}><img src="../img/twt.jpeg" class="img-circle" id="img-network"/></a> </span> <span id="spn-profile-label"><a href={this.userdata.google_link}><img src="../img/gle.png" class="img-circle" id="img-network"/> </a></span>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}


export default Profile;