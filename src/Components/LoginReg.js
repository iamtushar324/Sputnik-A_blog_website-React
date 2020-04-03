import React, { Component } from 'react';


class LoginReg extends Component {

    sendLogData() {
        let email = document.getElementById('email').value
        let pass = document.getElementById('pass').value
        this.props.dologin(email, pass)

    }

    sendRegData() {
        let email = document.getElementById('email').value
        let pass = document.getElementById('pass').value
        let name = document.getElementById('name').value

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            alert("Invalid email ")
            return
        }

        if (pass.length < 8) {
            alert("Password should be greater than 8 letters")
            return
        }


        fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user": {
                    "username": name,
                    "email": email,
                    "password": pass
                }
            })
        })
            .then(res => res.json())
            .then(parJson => {

                if (parJson.user.token) {
                    this.setlog()
                    alert("Registration Complete Now log in ")





                }
                else if (parJson.errors) {
                    alert(parJson.errors.body)

                }

            }).catch((error) => {
                alert(error)
            })







    }

    setreg() {

        this.setState(() => {
            return { loc: "reg" }
        })
    }
    setlog() {

        this.setState(() => {
            return { loc: "log" }
        })
    }

    constructor(props) {
        super(props)
        this.setreg = this.setreg.bind(this)
        this.setlog = this.setlog.bind(this)
        this.sendLogData = this.sendLogData.bind(this)
        this.sendRegData = this.sendRegData.bind(this)
        this.state = {
            loc: "log"
        }
    }


    render() {
        return (
            <div >
                <div className="overlay" onClick={this.props.remLogReg}></div>

                <div className="logReg">

                    <div className="logNav">

                        <span onClick={this.setlog} className={this.state.loc === "log" ? "active log" : "log"}  >Login</span>
                        <span onClick={this.setreg} className={this.state.loc === "reg" ? "active reg " : "reg"} >Register</span>

                    </div>

                    {this.state.loc === "log" ?
                        null
                        :
                        <input id="name" type="text" placeholder="Name" />

                    }



                    <input id="email" type="text" placeholder="Email" />


                    <input id="pass" type="password" placeholder="Password" />



                    {this.state.loc === "log" ?
                        <button className="loginBtn" onClick={this.sendLogData}>Login</button>
                        :
                        <button className="regBtn" onClick={this.sendRegData}>Register</button>

                    }



                </div >






            </div >

        )
    }
}



export default LoginReg;