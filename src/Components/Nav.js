import React, { Component } from 'react';
import logo from '../img/svg/logo.png';
import plus from '../img/svg/add.svg';
import menu from '../img/svg/menu.svg';


class Nav extends Component {


    navToCrArt() {
        this.menuclose()
        this.props.navTo("CrArt");
    }

    navToHome() {
        this.menuclose()
        this.props.navTo("home")
    }

    navToProfile() {
        this.menuclose()
        this.props.navTo('profile')
    }
    navToLogin() {
        this.menuclose()
        this.props.loginbtn()
    }

    menutoggle() {


        this.setState((prevState) => {

            if (this.state.mmenu)
                return { mmenu: false }

            else return { mmenu: true }
        })

    }


    menuclose() {


        this.setState(() => {

            return { mmenu: false }
        })



    }

    // user define function ^^^^^^^^^^^^^^


    constructor(props) {
        super(props)
        this.navToLogin = this.navToLogin.bind(this)
        this.navToCrArt = this.navToCrArt.bind(this)
        this.navToProfile = this.navToProfile.bind(this)
        this.navToHome = this.navToHome.bind(this)
        this.menutoggle = this.menutoggle.bind(this)
        this.menuclose = this.menuclose.bind(this)

        this.state = {
            mmenu: false
        }
    }

    render() {

        let links, linkss, menubtn;

        if (this.state.mmenu) {
            links = {
                transform: " translate(440px, -250px)",
                transitionDelay: "0.1s"

            }

            linkss = {
                transform: "translate(200px, -250px)",
                transitionDelay: "0s"

            }

            menubtn = {
                transform: "rotateZ(-90deg)"
            }

        }

        return (
            <nav>
                <img id="menu" onClick={this.menutoggle} style={menubtn} src={menu} alt="" />
                <div className="nav-con">
                    <div className="logo">

                        <img id="earth" src={logo} alt="logo" ></img>
                        <span>SPUTNIK</span>
                    </div>


                    <div className="links" id="menuj" style={links}>

                        <img className="CArtbtn" onClick={this.navToCrArt} src={plus} alt="+"></img>

                        <li onClick={this.navToHome}>
                            Home
                        </li>
                        {this.props.islogin ? <li className="sbtn" onClick={this.navToProfile}>
                            Profile
                        </li> : <li className="logReg_btn sbtn" onClick={this.navToLogin}>Login/ Register</li>}


                        {
                            this.props.islogin ? <div className="userPic" style={{ backgroundImage: `url(${this.props.userPic})` }}></div> : null
                        }

                    </div>
                    <div className="linkss" id="menubkg" style={linkss}></div>
                </div>


            </nav >
        )
    }
}



export default Nav;