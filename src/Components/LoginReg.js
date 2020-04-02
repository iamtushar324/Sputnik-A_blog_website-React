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
        this.props.remLogReg(name, email, pass)



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