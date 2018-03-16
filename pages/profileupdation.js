import React, { Component } from 'react';
import axios from 'axios';
import ImageUpload from '../pages/imageupload';

var editabledata={
    first_name:'',
    last_name:'',
    dob:'',
    phone:'',
    email:'',
    street:'',
    city:'',
    state:'',
    country_code:'',
    fundraiser_type:'',
    organization_name:'',
    facebook_link:'',
    google_link:'',
    twitter_link:'',
    zip:'',
    profile_image_url:'',
    fundraiser_logo_url:''
}
class UpdateProfile extends Component
{
    constructor(props)
    {
        super(props);
        
        this.logindata=JSON.parse(localStorage.getItem('LoginData'));
        this.updateProfileData=this.updateProfileData.bind(this);
    }

    updateProfileData()
    {
        alert(editabledata.first_name);
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


        axios.put(_apibaseurl, editabledata)
        .then((response) => {
            console.log(response);
            if(response.status == 200)
            {
                console.log("Updation successfull");
                alert("Profile Updated");

                this.props.history.push('/home/profile');
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

    render()
    {
        return(
            <div class="container">
                <div class="row" id="div-img-update">
                    <div class="col-sm-12">
                    <span> <img src="../img/update.jpeg" class="img-circle" id="img-update" onClick={this.updateProfileData}/></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-10">
                        <Basic/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-10">
                        <Communication/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-10">
                        <Fundraiser/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-10">
                        <Connectivity/>
                    </div>
                </div>
                

            </div>
        )
    }
}
class Basic extends Component
{
    constructor(props)
    {
        super(props);
        
        this.userdata=JSON.parse(localStorage.getItem('UserData'));
        this.state = {
            isHidden: true,
            firstname:'',
            lastname:'',
            dob:'',
            phone:'',
            isOpen: false
        
          }

          editabledata.first_name=this.userdata.first_name;
          editabledata.last_name=this.userdata.last_name;
          editabledata.dob=this.userdata.dob;
          editabledata.phone=this.userdata.phone;
          editabledata.email=this.userdata.email;

          {!this.state.isHidden && <span />}
          
          this.firstnameChange=this.firstnameChange.bind(this);
          this.lastnameChange=this.lastnameChange.bind(this);
          this.dobChange=this.dobChange.bind(this);
          this.phoneChange=this.phoneChange.bind(this);
       
    }
     
    toggleModal() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
    toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

    firstnameChange(e)
    {
        this.setState({firstname: e.target.value},
        ()=>{
            editabledata.first_name=this.state.firstname;});
    }

    lastnameChange(e)
    {
        this.setState({lastname: e.target.value},
        ()=>{editabledata.last_name=this.state.lastname;});
        
    }

    dobChange(e)
    {
        this.setState({dob: moment(e.target.value).format('MM-DD-YYYY')},
          ()=>{  editabledata.dob=this.state.dob;
            }
        ); 
    }

    phoneChange(e)
    {
        this.setState({phone: e.target.value},
        ()=>{
            editabledata.phone=this.state.phone;});
    }


    render()
    {
        return(

            <div class="container" >
                <div id="div-profile-pic" class="row">
                    <div class="col-sm-12">
                        <center><span> <img src="../img/usr.png" class="img-circle" id="img-profile-update" onClick={this.toggleModal.bind(this)}/></span><ImageUpload show={this.state.isOpen}
          onClose={this.toggleModal.bind(this)}>
          Here's some content for the modal
        </ImageUpload> </center>
                    </div>
                </div>
                <h1 onClick={this.toggleHidden.bind(this)}>Basic</h1>
                <hr/>
                {!this.state.isHidden &&<span class="spn-profile-update-body container">
                <div class="row form-group">
                    <div class="col-sm-6">
                        
                        <span id="spn-update-label">First Name : </span><input type="text" value={this.userdata.first_name} class="form-control" onChange = {this.firstnameChange}/>

                    </div>
                    <div class="col-sm-6">
                    <span id="spn-update-label">Last Name : </span><input type="text" value={this.userdata.last_name} class="form-control" onChange = {this.lastnameChange}/>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm-6">
                        
                        <span id="spn-update-label">Dob : </span><input type="date"  class="form-control" onChange = {this.dobChange} />

                    </div>
                    <div class="col-sm-6">
                    <span id="spn-update-label">Phone : </span><input type="text" value={this.userdata.phone} class="form-control" onChange = {this.phoneChange}/>
                    </div>
                </div>
                </span>}
                
            </div>
        )
    }
}

class Communication extends Component
{
    constructor(props)
    {
        super(props);
        this.userdata=JSON.parse(localStorage.getItem('UserData'));

        this.state = {
            isHidden: true,
            street:'',
            city:'',
            state:'',
            countrycode:'',
            zip:''
          }

          editabledata.street=this.userdata.street;
          editabledata.city=this.userdata.city;
          editabledata.state=this.userdata.state;
          editabledata.country_code=this.userdata.country_code;
          editabledata.zip=this.userdata.zip;

          {!this.state.isHidden && <span />}

          this.streetChange=this.streetChange.bind(this);
          this.cityChange=this.cityChange.bind(this);
          this.countryChange=this.countryChange.bind(this);
          this.stateChange=this.stateChange.bind(this);
          this.zipChange=this.zipChange.bind(this);
       
    }
    toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
      streetChange(e)
      {
          this.setState({street: e.target.value},
        ()=>{  editabledata.street=this.state.street;});
        
      }

      cityChange(e)
      {
          this.setState({city: e.target.value},
        ()=>{
            editabledata.city=this.state.city;
        });
          
      }

      countryChange(e)
      {
          this.setState({countrycode: e.target.value},
        ()=>{
            editabledata.country_code=this.state.countrycode;
        });
          
      }

      stateChange(e)
      {
          this.setState({state: e.target.value},
        ()=>{
            editabledata.state=this.state.state;
        });
          
      }

      zipChange(e)
      {
          this.setState({zip: e.target.value},
        ()=>{
            editabledata.zip=this.state.zip;
        });
          
      }

    render()
    {
        return(

            <div class="container">
                <h1 onClick={this.toggleHidden.bind(this)}>Communication</h1>
                <hr/>
                {!this.state.isHidden &&<span class="spn-profile-update-body container">
                <div class="row form-group">
                    <div class="col-sm-6">
                        
                        <span id="spn-update-label">Location : </span><input type="text" placeholder={this.userdata.location} class="form-control" disabled/>

                    </div>
                    <div class="col-sm-6">
                    <span id="spn-update-label">Street : </span><input type="text" placeholder={this.userdata.street} class="form-control" onChange = {this.streetChange}/>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm-6">
                        
                        <span id="spn-update-label">City : </span><input type="text" placeholder={this.userdata.city} class="form-control" onChange = {this.cityChange}/>

                    </div>
                    <div class="col-sm-6">
                    <span id="spn-update-label">State : </span><input type="text" placeholder={this.userdata.state} class="form-control" onChange = {this.stateChange}/>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm-6">
                        
                        <span id="spn-update-label">Country Code : </span><input type="text" placeholder={this.userdata.country_code} class="form-control" onChange = {this.countryChange}/>

                    </div>
                    <div class="col-sm-6">
                    <span id="spn-update-label">ZIP : </span><input type="text" placeholder={this.userdata.zip} class="form-control" onChange = {this.zipChange}/>
                    </div>
                </div>
                </span>}
            </div>
        )
    }
}

class Fundraiser extends Component
{
    constructor(props)
    {
        super(props);
        this.userdata=JSON.parse(localStorage.getItem('UserData'));

        this.state = {
            isHidden: true,
            type:'',
            organization:''

          }
        editabledata.fundraiser_type=this.userdata.fundraiser_type;
        editabledata.organization_name=this.userdata.organization_name;

          {!this.state.isHidden && <span />}
       
          this.typeChange=this.typeChange.bind(this);
          this.organizationChange=this.organizationChange.bind(this);
    }
    toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
      typeChange(e)
      {
          this.setState({type: e.target.value},
        ()=>{

          editabledata.fundraiser_type=this.state.type;
        });
      }
      organizationChange(e)
      {
          this.setState({organization: e.target.value},
        ()=>{
            editabledata.organization_name=this.state.organization;
        });
         
      }

    render()
    {
        return(

            <div class="container">
                <h1 onClick={this.toggleHidden.bind(this)}>Fundraiser</h1>
                <hr/>
                {!this.state.isHidden &&<span class="spn-profile-update-body container">
                <div class="row ">
                    
                    <div class="col-sm-6">
                        <div class="row form-group">
                            <div class="col-sm-12">
                                <span id="spn-update-label">Type : </span><input type="text" placeholder={this.userdata.fundraiser_type} class="form-control" onChange = {this.typeChange}/>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-sm-12">
                                <span id="spn-update-label">Organization : </span><input type="text" placeholder={this.userdata.organization_name} class="form-control" onChange = {this.organizationChange}/>
                            </div>
                        </div>
                        

                    </div>
                    <div class="col-sm-6">
                            <center><span> <img src="../img/usr.png" class="img-circle" id="img-fundraiser-logo-update"/></span> </center>
                    </div>
                </div>
                </span>}
            </div>
        )
    }
}

class Connectivity extends Component
{
    constructor(props)
    {
        super(props);
        this.userdata=JSON.parse(localStorage.getItem('UserData'));

        this.state = {
            isHidden: true,
            google:this.userdata.google_link,
            twitter:this.userdata.twitter_link,
            fb:this.userdata.facebook_link
          }

          editabledata.google_link=this.userdata.google_link;
          editabledata.twitter_link=this.userdata.twitter_link;
          editabledata.facebook_link=this.userdata.facebook_link;

          {!this.state.isHidden && <span />}
          this.googleChange=this.googleChange.bind(this);
          this.twitterChange=this.twitterChange.bind(this);
          this.fbChange=this.fbChange.bind(this);
    }
    toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
      googleChange(e)
      {
          this.setState({google: e.target.value},
        ()=>{
            editabledata.google_link=this.state.google;
        });
         
      }
      twitterChange(e)
      {
          this.setState({twitter: e.target.value},
        ()=>{

          editabledata.twitter_link=this.state.twitter;
        });
      }
      fbChange(e)
      {
          this.setState({fb: e.target.value},
        ()=>{

          editabledata.facebook_link=this.state.fb;
        });
      }

    render()
    {
        return(

            <div class="container">
                <h1 onClick={this.toggleHidden.bind(this)}>Connectivity</h1>
                <hr/>
                {!this.state.isHidden &&<span class="spn-profile-update-body container">
                <div class="row form-group">
                    <div class="col-sm-12">
                        
                        <span id="spn-update-label"><img src="../img/fb.jpeg" class="img-circle" id="img-network"/></span><input type="text" placeholder={this.userdata.facebook_link} class="form-control" onChange = {this.fbChange}/>

                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm-12">
                        
                        <span id="spn-update-label"><img src="../img/twt.jpeg" class="img-circle" id="img-network"/></span><input type="text" placeholder={this.userdata.twitter_link} class="form-control" onChange = {this.twitterChange}/>

                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm-12">
                        
                        <span id="spn-update-label"><img src="../img/gle.png" class="img-circle" id="img-network"/></span><input type="text" placeholder={this.userdata.google_link} class="form-control" onChange = {this.googleChange}/>

                    </div>
                </div>
                </span>}
            </div>
        )
    }
}
export default UpdateProfile;