import React, { Component } from 'react';
import axios from 'axios';
import HeadBanner from '../component/head';

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

    emailChange(e) 
    {
        this.setState({email: e.target.value});
    }
      
    passwordChange(e) 
    {
        this.setState({password: e.target.value});
    }
      
    confirmPasswordChange(e) 
    {
        this.setState({confirm_password: e.target.value});
    }
      
    fundraiserTypeChange(e) 
    {
        this.setState({fundraiser_type: e.target.value});
    }
      
    organizationNameChange(e) 
    {
        this.setState({organization_name: e.target.value});
    }
      
    phoneChange(e) 
    {
        this.setState({phone: e.target.value});
    }
    
    handleClick(event)
    {
        var apiBaseUrl = "http://52.41.54.41:3001/fundraisers/";

        axios.post(apiBaseUrl, this.state)
        .then((response) => {
            console.log(response);
            if(response.status == 200)
            {
                console.log("Registration successfull");
                alert("Registration successfull");

                this.props.history.push('/');
            }
            else
            {
                console.log("Failed. try again.");
                alert("Failed. try again.");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

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
                            <input type="text"  placeholder="phone" class="form-control" onChange = {this.phoneChange}/>
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
                </div>
            </div>

        )
    }
}
export default  SignUp;