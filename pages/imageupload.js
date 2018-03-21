import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { messageBox } from '../component/messagebox';
import { validImage } from '../component/validation';
import ReactCrop from 'react-image-crop';
import { postCall, setAuthorization } from '../component/api';


class ImageUpload extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = { 
                        file: '',
                        type:'',
                        user_id:'',
                        url:'',
                        crop:''
                    };
        this.uploadImage=this.uploadImage.bind(this);
        this.onCropped = this._onCropped.bind(this);
    }

    onChange(e)
    {
        this.setState({ crop:e,
            
         },
         ()=>{
            
            console.log(e);
             url:e
         }
        );
    }

    validateEntries()
    {
        var _isValid=true;

        
        if(!validImage(this.state.file))
        {
            messageBox("Please select the valid image.");
            _isValid=false;
        }

        return _isValid;
    }

    setURL(response)
    {
        this.setState(
        {
                url:response.data.image_url
        })
    }

    getURL()
    {
        if(this.validateEntries())
        {
            const data = new FormData();
            data.append('file', this.state.file);
            data.append('type', this.props.imagetype);
            data.append('user_id', this.props.userid);  

            var _url = "common/imageUpload";

            setAuthorization();
        

            postCall(_url, data).then((response) => {

                console.log("Success",response);  
                this.setURL(response);
             });
        }
    }

    changeImage(e)
    {
        e.preventDefault();
        this.setState(
            {
                file:e.target.files[0]},
                ()=>{  this.getURL();
                }
            
        );
        
    }

    _onCropped(e) {
        this.setState(
            {
                file:e.target.files[0]},
                ()=>{  this.getURL();
                }
            
        );
    }

    uploadImage(e) {
      
        if(this.validateEntries())
        {

            if(this.props.imagetype=='fundraiserProfile')
            {
                localStorage.setItem('profile_image',JSON.stringify(this.state.url));
            }
            else
            {
                localStorage.setItem('logo_image',JSON.stringify(this.state.url));
            }       
            
            messageBox("Uploaded");   
        }    
    }

    render()
    {
      
        if(!this.props.show) 
        {
            return null;
        }

        return (
            <div >
                <div class="modal-content" id="div-modal-screen">
                    <div class="modal-header"  id="div-profile-title">
                        <button type="button" class="close" data-dismiss="modal" onClick={this.props.onClose}>&times;</button>
                        <h4 class="modal-title"><span id="spn-profile-title">{this.props.imagetype}</span></h4>
                    </div>
                    <div class="modal-body">
                        <div className="previewComponent">
                            <form >
                                <input className="fileInput" type="file" onChange={this.changeImage.bind(this)} />
                            
                            </form>
                        </div>
                        <div id="div-preview">
                          {/* <img src={this.state.url} id="img-preview"/> */}
                          {/* <ReactImageCrop src={this.state.url}
                            onCrop={this.onCropped}/> */}
                            <ReactCrop src={this.state.url} crop={this.state.crop} onChange={this.onChange.bind(this)}/>
                        </div>
                    </div>
                    <div class="modal-footer" id="div-profile-title">
                        <button class="btn btn-success " id="btn-login" onClick={this.uploadImage.bind(this)}> Upload </button>
                    </div>
                </div>
                <ToastContainer/>
      
            </div>
  
        
        );
    }
    
  }
  
  ImageUpload.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };
  
  export default ImageUpload;
