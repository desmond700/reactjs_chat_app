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

    componentDidMount(){
        this.socket = socketIOClient(this.state.endpoint)
    }

    handleModalClose = () => {
        document.getElementById('id01').style.display='none';
    }

    handleSubmit = () => {
        let username = document.getElementById('uname').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('psw').value;

        let data = {
            username: username,
            email: email,
            password: password
        }

        if(username != null && email != null && password != null){
            this.socket.emit("registerUser", data);
        }
    }

    render(){
        return(
            <div id="registerModal" className="modal">
                <span onClick={this.handleModalClose}
                className="close" title="Close Modal">&times;</span>
                <form className="modal-content animate" onSubmit={this.handleSubmit}>
                    <div className="imgcontainer">
                        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" id="uname" required />

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter Username" id="email" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" id="psw" required />

                        <button type="submit" className="actionbtn">Register</button>
                        <label>
                            <input type="checkbox" checked="checked" id="remember" /> Remember me
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