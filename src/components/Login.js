import React from 'react';
import { Link } from 'react-router-dom'
import { Util } from '../Util/Util'
import { Redirect } from 'react-router-dom'

export class Login extends React.Component{
    displayName = Login.name;

    constructor(){
        super();
        this.loginUtility = new Util();
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        let user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
        
        console.log("username: "+ user.username +" password: " + user.password);
        this.loginUtility.login(user)
    .then((res) => {
        if(res.length !== 0){
            window.location.href=`/chat/${res[0].username}`;
        }
         else{
            document.getElementsByClassName("errordiv")[0].style.display="block";
            document.getElementsByClassName("error")[0].innerHTML="Username or Password incorrect";
         }   
    })
        .catch((err) => console.log(err));
    }

    onChangeCheckBox = (e) => {
        
      }


    render(){
        return(
            <div className="container w-50" style={{marginTop: "100px"}}>
            <div className="d-flex">
                <img className="mx-auto" src="/images/user (1).png" width="150" height="150" alt="user" />
            </div>
            <p className="text-center">Enter your information to login to your account</p>
            <form id="loginForm" className="mt-5" onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id="username" required />
                    <span className="username-error text-danger"></span>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" required />
                    <span className="password-error text-danger"></span>
                </div>
                <div className="d-flex justify-content-between">
                    <label><input id="rememberMe" checked="checked" type="checkbox" onChange={this.onChangeCheckBox} value="true" /> &nbsp;Remember me</label>
                    <Link to="register">Need an account?</Link>
                </div>
                <div className="py-2 d-flex justify-content-end">
                    <button type="submit" id="submitBtn" className="btn">Login</button>
                </div>
            </form> 
            <div className="alert alert-danger errordiv">
                    <span className="error"></span>
                </div>
        </div>
        );
    }
} 