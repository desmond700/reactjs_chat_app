import socketIOClient from 'socket.io-client'

export class Util{
    Url = "http://192.168.0.10:4001"
    socket;

    constructor(){
        this.socket = socketIOClient(this.Url)
    }

    async login(user){
        this.socket.emit("loginUser", user);
        return new Promise((resolve, reject) => {

            fetch(this.Url+"/login/"+user.username+"/"+user.password,{method: "GET"}).then(response => {
                response.json().then(json => {
                    resolve(json);
                    console.log(json);
                })
            }).catch(err => {
                reject(err);
                console.log(err)
            });
            
        })
    }

    async register(user){
        console.log("register user");
        console.log(user);
        var formData = new FormData();
        Object.keys(user).forEach(key => {
            formData.append(key,user[key]);
        });
        return await new Promise((resolve, reject) => {

             fetch(this.Url+"/register",{method: "POST", body: formData}).then(response => {
                response.json().then(json => {
                    resolve(json);
                    console.log(json);
                })
            }).catch(err => {
                reject(err);
                console.log(err)
            });
        })
    }


} 