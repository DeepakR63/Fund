import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { messageBox } from '../component/messagebox';
import { validImage } from '../component/validation';
import ReactCrop from 'react-image-crop';
import { postCall, setAuthorization } from '../component/api';
import "babel-core/register";
import "babel-polyfill";

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
        // this.uploadImage=this.uploadImage.bind(this);
        // this.onCropped = this._onCropped.bind(this);
    }
    async crop() 
    {
        let image = await this.refs.crop.cropImage()
        this.setState({
            url: window.URL.createObjectURL(image)
        })
    }
    // onChange(e)
    // {
    //     this.setState({ crop:e,
            
    //      },
    //      ()=>{
            
    //         console.log(e);
    //          url:e
    //      }
    //     );
    // }

    // validateEntries()
    // {
    //     var _isValid=true;

        
    //     if(!validImage(this.state.file))
    //     {
    //         messageBox("Please select the valid image.");
    //         _isValid=false;
    //     }

    //     return _isValid;
    // }

    setURL(response)
    {
        this.setState(
        {
                url:response.data.image_url
        })
    }
    getURL()
    {
        
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

    // _onCropped(e) {
    //     this.setState(
    //         {
    //             file:e.target.files[0]},
    //             ()=>{  this.getURL();
    //             }
            
    //     );
    // }
    imageLoaded(img) {
        if (img.naturalWidth && img.naturalWidth < 262 &&
            img.naturalHeight && img.naturalHeight < 147) {
            this.crop()
        }
    }

    // uploadImage(e) {
      
    //     if(this.validateEntries())
    //     {

    //         if(this.props.imagetype=='fundraiserProfile')
    //         {
    //             localStorage.setItem('profile_image',JSON.stringify(this.state.url));
    //         }
    //         else
    //         {
    //             localStorage.setItem('logo_image',JSON.stringify(this.state.url));
    //         }       
            
    //         messageBox("Uploaded");   
    //     }    
    // }
    //  crop = {
    //     x: 20,
    //     y: 10,
    //     width: 30,
    //     height: 10
    //   }

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
                        {this.state.file && <div id="div-preview">
                         
                            <ReactCrop
                            ref='crop'
                            src={this.state.file}
                            width={100}
                            height={80}
                            onImageLoaded={this.imageLoaded}
                            
                        /><button onClick={this.crop}>Crop</button>
                          
                        </div>}
                        {
                    this.state.previewUrl &&
 
                    <img src={this.state.url} />
                }
                        
                    </div>
                    <div class="modal-footer" id="div-profile-title">
                        {/* <button class="btn btn-success " id="btn-login" onClick={this.uploadImage.bind(this)}> Upload </button> */}
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
