import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageUpload extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }
    
    _handleSubmit(e) 
    {
        console.log('handle uploading-', this.state.file);
        
    }
    
    _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.readAsDataURL(file);
        this.setState({
            file: file,
            imagePreviewUrl: reader.result
        })
            console.log(this.state.imagePreviewUrl);
    
       
    }
    render()
    {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) 
        {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } 
        else 
        {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
      
        if(!this.props.show) 
        {
            return null;
        }

        return (
            <div >
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" onClick={this.props.onClose}>&times;</button>
                        <h4 class="modal-title">Modal Header</h4>
                    </div>
                    <div class="modal-body">
                    <div className="previewComponent">
                        <form >
                            <input className="fileInput" type="file" onChange={this._handleImageChange.bind(this)} />
                            <button className="submitButton" type="submit" onClick={this._handleSubmit.bind(this)}>Upload Image</button>
                        </form>
                        <div className="imgPreview">
                             {$imagePreview}
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success " id="btn-login" onClick={(event) => this.handleClick(event)}> Upload </button>
                </div>
            </div>
      
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
