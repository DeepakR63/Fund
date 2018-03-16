import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeadBanner from '../component/head';


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
    }

    usernameChange(e) 
    {
        this.setState({email: e.target.value});
    }

    passwordChange(e) 
    {
        this.setState({password: e.target.value});
    }
    gotoHome()
    {
        this.props.history.push('/home');
    }
    handleClick(event)
    {
        var _apibaseurl = "http://52.41.54.41:3001/fundraisers/login";

        axios.post(_apibaseurl, this.state)
        .then((response) =>
        {
            console.log(response);  
            if(response.status == 200)
            {
                console.log("Login successfull");
                this.userdata=response.data.user_data;
                this.auth=response.headers.auth;
                localStorage.setItem('UserData', JSON.stringify(this.userdata));
                localStorage.setItem('Auth', JSON.stringify(this.auth));

                this.props.history.push('/home');
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
            alert("yes");
        });
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
                </div>
                
            </div>
               
            )

    }
    
}

export default Login;