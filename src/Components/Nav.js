import React, { Component } from 'react';
import logo from '../img/svg/logo.png';
import plus from '../img/svg/add.svg';


class Nav extends Component {


    navToCrArt() {
        this.props.navTo("CrArt");
    }

    navToHome() {
        this.props.navTo("home")
    }

    navToProfile() {
        this.props.navTo('profile')
    }

    // user define function ^^^^^^^^^^^^^^


    constructor(props) {
        super(props)
        this.navToCrArt = this.navToCrArt.bind(this)
        this.navToProfile = this.navToProfile.bind(this)
        this.navToHome = this.navToHome.bind(this)
    }

    render() {

        return (
            <nav>
                <div className="nav-con">
                    <div className="logo">

                        <img src={logo} alt="logo" ></img>
                        <span>SPUTNIK</span>
                    </div>

                    <div className="links">

                        <img onClick={this.navToCrArt} src={plus} alt="+"></img>

                        <li onClick={this.navToHome}>
                            Home
                        </li>
                        {this.props.islogin ? <li onClick={this.navToProfile}>
                            Profile
                        </li> : <li className="logReg_btn" onClick={this.props.loginbtn}>Login/ Register</li>}


                        {
                            this.props.islogin ? <div className="userPic" style={{ backgroundImage: `url(${this.props.userPic})` }}></div> : null
                        }

                    </div>
                </div>


            </nav >
        )
    }
}



export default Nav;