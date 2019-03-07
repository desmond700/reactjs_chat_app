import React from 'react';
import socketIOClient from 'socket.io-client'

export class Login extends React.Component{
    displayName = Login.name;

    constructor(){
        super();
        this.state = {
            endpoint: "http://localhost:4001"
        };

    }

    handleModalClose = () => {
        document.getElementById('loginModal').style.display='none'
    }

    handleSubmit = () => {
        let username = document.getElementById('uname').value;
        let password = document.getElementById('psw').value;

        let data = {
            username: username,
            password: password
        }

        if(username != null && password != null){
            this.socket.emit("loginUser", data);
        }
    }


    render(){
        return(
            <div id="loginModal" className="modal">
                <span onClick={this.handleModalClose}
                className="close" title="Close Modal">&times;</span>
                <form className="modal-content animate" action="/action_page.php">
                    <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" id="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" id="psw" required />

                    <button type="submit" className="actionbtn">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                    </div>

                    <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                    <button type="button" onClick={this.handleModalClose} className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="">password?</a></span>
                    </div>
                </form>
            </div>
        );
    }
} 