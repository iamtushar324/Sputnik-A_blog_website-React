import React from 'react';
import Nav from '../Components/Nav';
import LoginReg from '../Components/LoginReg';
import defaultUserPro from '../img/svg/account.svg'
import Home from './Home'


class App extends React.Component {

    // User defined functions    


    loginmenu() {

        this.setState(() => {
            return { loginModal: true }
        })
    }

    remLogReg() {

        this.setState(() => {
            return { loginModal: false }
        })
    }

    dologin(email, password) {

        fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user": {
                    "email": email,
                    "password": password
                }
            })
        })
            .then(res => res.json())
            .then(parJson => {

                if (parJson.token) {
                    this.setState(() => {
                        return {
                            userDetails: parJson,
                            loginModal: false,
                            islogin: true
                        }
                    })
                }

            })

    }

    regUser(username, email, pass) {

        fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user": {
                    "username": username,
                    "email": email,
                    "password": pass
                }
            })
        })
            .then(res => res.json())
            .then(parJson => {

                console.log(parJson)

                if (parJson.token) {
                    this.setState(() => {
                        return {
                            userDetails: parJson,
                            loginModal: false,
                            islogin: true
                        }
                    })
                }

            })

    }

    navTo(page) {

        this.setState(() => {
            return {
                whichPage: page
            }
        })
    }

    // User defined functions -----------------------


    constructor(props) {
        super(props)
        this.dologin = this.dologin.bind(this)
        this.loginmenu = this.loginmenu.bind(this)
        this.remLogReg = this.remLogReg.bind(this)
        this.regUser = this.regUser.bind(this)
        this.navTo = this.navTo.bind(this)


        this.state = {



            userDetails: {},
            islogin: false,
            loginModal: false,
            whichPage: "home"

        }

    }

    render() {

        let page;
        if (this.state.whichPage === "home") {
            page = (<Home />)
        }
        if (this.state.whichPage === "profile") {
            page = (<div>Pro</div>)
        }
        if (this.state.whichPage === "CrArt") {
            page = (<div>todo create articles</div>)
        }


        console.log(page)

        return (

            <div>

                {
                    this.state.loginModal ?

                        < LoginReg
                            dologin={this.dologin}
                            remLogReg={this.regUser}
                        />
                        : null
                }

                <Nav
                    navTo={this.navTo}
                    islogin={this.state.islogin}
                    loginbtn={this.loginmenu}
                    userPic={this.state.userDetails.image ? this.state.userDetails.image : defaultUserPro}
                />

                {page}


            </div>

        )




    }

}

export default App