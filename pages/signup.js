import React, { Component } from 'react';
import axios from 'axios';
import HeadBanner from '../component/head';
import { toast, ToastContainer } from 'react-toastify';
import { messageBox } from '../component/messagebox';
import { validEmail } from '../component/validation';
import { validPassword } from '../component/validation';
import { validPhone } from '../component/validation';
import { comparePassword } from '../component/validation';
import { validFundraiserType } from '../component/validation';
import { validOrganization } from '../component/validation';
import { postCall } from '../component/api';

//Component for Sign Up
class SignUp extends Component
{
    constructor(props)
    {
        super(props);

        this.state={
            email:'',
            password:'',
            confirm_password:'',
            fundraiser_type:'',
            organization_name:'',
            phone:''

        }

        this.emailChange=this.emailChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
        this.confirmPasswordChange=this.confirmPasswordChange.bind(this);
        this.fundraiserTypeChange=this.fundraiserTypeChange.bind(this);
        this.organizationNameChange=this.organizationNameChange.bind(this);
        this.phoneChange=this.phoneChange.bind(this);
    }

    //Validate the data given to the controls
    validateEntries()
    {
        var _IsValid=true;

        if(!validEmail(this.state.email))
        {
            messageBox('Please enter valid email.');
            _IsValid=false;
        }
        else if(!validPassword(this.state.password))
        {
            messageBox('Password should contain an uppercase, a lowercase, a special character and the length is minimum of 6.');
            _IsValid=false;
        }
        else if(!comparePassword(this.state.password,this.state.confirm_password))
        {
            messageBox('Confirm Password does not match.');
            _IsValid=false;
        }
        else if(!validPhone(this.state.phone))
        {
            messageBox('Invalid Phone');
            _IsValid=false;
        }
        else if(!validFundraiserType(this.state.fundraiser_type))
        {
            messageBox('Invalid Fundraiser Type.');
            _IsValid=false;
        }
        else if(!validOrganization(this.state.organization_name))
        {
            messageBox('Invalid Organization Name.');
            _IsValid=false;
        }

        return _IsValid;
    }

    //API request for sign up,After successful sign up redirect to the login page
    doSignUp(event)
    {
        if(this.validateEntries())
        {
            var _url = "fundraisers/";

            postCall(_url, this.state)
            .then((response) => {
                console.log(response);

                if(response.status == 200)
                {
                    console.log("Registration successfull");
                    messageBox("Registration successfull");

                    this.gotoLogin();     
                }
                else
                {
                    console.log("Failed. try again.");
                    messageBox("Failed. try again.");
                }
            })
            .catch(function (error) {
                console.log(error);
                messageBox("Failed. try again.");
            });
        }
    }

    //*********** Set the state on the change of control values********
    emailChange(e) 
    {
        this.setState( { email: e.target.value } );
    }

    passwordChange(e) 
    {
        this.setState( { password: e.target.value } );
    }
      
    confirmPasswordChange(e) 
    {
        this.setState( { confirm_password: e.target.value } );
    }
      
    fundraiserTypeChange(e) 
    {
        this.setState( { fundraiser_type: e.target.value } );
    }
      
    organizationNameChange(e) 
    {
        this.setState( { organization_name: e.target.value } );
    }
      
    phoneChange(e) 
    {   
        this.setState( { phone: e.target.value } );    
    }
    //********************************************************************
    
    //Call signUp on submit button click
    handleClick(event)
    {
        this.doSignUp(event);
    }

    //Redirect to the login page
    gotoLogin()
    {
        this.props.history.push('/');
    }

    render()
    {
        return(

            <div>
                <HeadBanner/>
                <div id="div-signup-title">
                     <span id="spn-signup-title"> Sign Up </span>
                </div>
                <div id="div-signup-body">
                    <div class="row form-group">
                         <div class="col-sm-12">
                            <input type="email"  placeholder="email" class="form-control" onChange = {this.emailChange}/>
                        </div>
                    </div>
                    <div class="row form-group">
                         <div class="col-sm-12">
                            <input type="password"  placeholder="password" class="form-control" onChange = {this.passwordChange}/>
                        </div>
                    </div>
                    <div class="row form-group">
                         <div class="col-sm-12">
                            <input type="password"  placeholder="confirm password" class="form-control" onChange = {this.confirmPasswordChange}/>
                        </div>
                    </div>
                    <div class="row form-group">
                         <div class="col-sm-12">
                            <input type="text"  placeholder="phone" class="form-control" onChange = {this.phoneChange} maxLength="10"/>
                        </div>
                    </div>

                    <div class="row form-group">
                         <div class="col-sm-12">
                            <input type="text"  placeholder="fundraiser type" class="form-control" onChange = {this.fundraiserTypeChange}/>
                        </div>
                    </div>
                    <div class="row form-group">
                         <div class="col-sm-12">
                            <input type="text"  placeholder="organization name" class="form-control" onChange = {this.organizationNameChange}/>
                        </div>
                    </div>
                    <div class="row form-group">
                         <div class="col-sm-6">
                        
                        </div>
                         <div class="col-sm-3">
                         <button class="btn btn-success " id="btn-submit" onClick={this.handleClick.bind(this)}> Submit </button>
                        </div>
                        <div class="col-sm-3">
                         <button class="btn btn-danger " id="btn-cancel" onClick={this.gotoLogin.bind(this)}> Cancel </button>
                        </div>
                    </div>
                    <ToastContainer/>
                </div>
            </div>

        )
    }
}

export default  SignUp;