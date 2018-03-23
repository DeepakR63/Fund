import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeadBanner from '../component/head';
import { toast, ToastContainer } from 'react-toastify';
import { messageBox } from '../component/messagebox';
import { validEmail, validPassword } from '../component/validation';
import { postCall } from '../component/api';

//Component for Login
class Login extends Component
{
    constructor(props)
    {
        super(props);

        this.state={
            email:'',
            password:''
        }

        this.userdata=null;

        this.usernameChange=this.usernameChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
        this.validateEntries=this.validateEntries.bind(this);
        
    }

    //Check the given entries are valid
    validateEntries()
    {
        var _IsValid=true;

        if(!validEmail(this.state.email))
        {
            messageBox("Invalid Email");
            _IsValid=false;
        }

        if(!validPassword(this.state.password))
        {
            messageBox("Invalid Password");
            _IsValid=false;
        }

        return _IsValid;
    }

   //Set the authentication details 
   setLoginDetails(response)
   {
        this.userId=response.data.user_data.id;
        this.auth=response.headers.auth;
        localStorage.setItem('UserData', JSON.stringify(this.userId));
        localStorage.setItem('Auth', JSON.stringify(this.auth));

        console.log("Login successfull");

        this.gotoProfile();

   }

   //Redirect to the profile component
    gotoProfile()
    {
        this.props.history.push('/home/profile');
    }

    //Login Process
    doLogin(event)
    {
        if(this.validateEntries())
        {
            var _url = "fundraisers/login";

            postCall(_url,this.state)
            .then((response) =>
            {
                console.log(response);  

                if(response.status == 200)
                {
                    this.setLoginDetails(response);    
                }
                else
                {
                    messageBox("email or password is wrong",false);
                
                }
            })
            .catch(function (error) 
            {
                console.log(error);
                messageBox("email or password is wrong");
            });
        }
    }

    //Set the given details to the component state *******************
    usernameChange(e) 
    {
        this.setState({email: e.target.value});
    }

    passwordChange(e) 
    {
        this.setState({password: e.target.value});
    }
    //*****************************************************************

    //Redirect to Home page.
    gotoHome()
    {
        this.props.history.push('/home');
    }
    
    //Call Login Process on button click
    handleClick(event)
    {
       this.doLogin(event);
    }

    render()
    {
        return(
            <div>
                <HeadBanner/>
                <div id="div-login-title">
                    <span id="spn-login-title">
                         Sign In
                    </span>
                </div>
                <div id="div-login">
                    <div class="row form-group">
                        <div class="col-sm-12">
                            <input type="email" placeholder="email" class="form-control" onChange = {this.usernameChange}/>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-sm-12">
                            <input type="password" placeholder="******" class="form-control" onChange = {this.passwordChange}/>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-sm-8">
                           
                        </div>
                        <div class="col-sm-4">
                            <button class="btn btn-success " id="btn-login" onClick={(event) => this.handleClick(event)}> Login </button>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-sm-12">
                         <center>  For new account please <Link to="/signup">SignUp</Link></center>
                        </div>
                    </div>
                    <ToastContainer/>
                </div>    
            </div>    
        )
    } 
}

export default Login;