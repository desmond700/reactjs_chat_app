import React from 'react';
import socketIOClient from 'socket.io-client'
import { Link } from 'react-router-dom'
import { Util } from '../Util/Util'
import { isNullOrUndefined } from 'util';

export class Register extends React.Component{
    displayName = Register.name;

    constructor(){
        super();
        this.state = {
            imageName: null,
            imageFile: null,
            imagePreviewUrl: null
        };
        this.registerUtility = new Util();
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        let user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value,
            imageName: this.state.imageName,
            imageFile: this.state.imageFile
        }

        console.log("username: "+user.username);
        console.log("password: "+user.password);

        if(user.password !== document.getElementById("confirmPassword").value){
            document.getElementsByClassName("errordiv")[0].style.display="block";
            document.getElementsByClassName("error")[0].innerHTML="Both Password and Confirm password fields must be equal";
            return false;
        }

        this.registerUtility.register(user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    onChangeImage = (e) => {
        const file = e.target.files[0];
        let reader = new FileReader();
        console.log(file.name);
        reader.onloadend = () => {
          this.setState({
            imageName: file.name,
            imageFile: file,
            imagePreviewUrl: reader.result
          });
        };
    
        reader.readAsDataURL(file);
      }

    render(){
        const {imagePreviewUrl} = this.state;

        return(
            <div className="container w-50" style={{marginTop: "100px"}}>
                <div className="d-flex">
                    <img className="mx-auto" src="/images/user (1).png" width="150" height="150" />
                </div>
                <p className="text-center">Create a new account</p>
                <form className="mt-5" onSubmit={this.handleOnSubmit} method="post" encType="multipart/form-data">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" name="UserName" id="username" required />
                        <div className="text-danger username-error"></div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="Email" id="email" aria-describedby="emailHelp" required />
                        <div className="text-danger email-error"></div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" required />
                        <div className="text-danger password-error"></div>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" required />
                    </div>
                    <div className="form-group d-flex justify-content-between p-2 border" style={{borderRadius: "5px"}}>
                        <div>
                        <label>Upload image</label>
                        <input type="file" className="form-control-file" onChange={this.onChangeImage} />
                        </div>
                        <img src={imagePreviewUrl} alt="user" height="76" />
                    </div>
                    <div className="py-3 d-flex justify-content-between">
                        <Link to="login">Back to login</Link>
                        <button type="submit" className="btn">Register</button>
                    </div>
                </form>
                <div className="alert alert-danger errordiv">
                    <span className="error"></span>
                </div>
            </div>

        );
    }
} 