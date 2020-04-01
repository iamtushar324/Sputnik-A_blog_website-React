import React, { Component } from 'react';
import '../Styles/components/Nav.scss';
import logo from '../img/logo.png'






class Nav extends Component {


    render() {

        return (
            <nav>
                <div className="nav-con">
                    <div className="logo"><img src={logo} style={logostyle} ></img></div>
                    <div className="links">

                        <li>
                            Home
                        </li>
                        <li>
                            Profile
                        </li>


                    </div>
                </div>


            </nav>
        )
    }
}



const logostyle = {
    height: "10px"
}

export default Nav;