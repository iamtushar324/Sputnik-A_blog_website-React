import React, { Component } from 'react';
import logo from '../img/svg/logo.png';
import plus from '../img/svg/add.svg';




class Nav extends Component {


    render() {

        return (
            <nav>
                <div className="nav-con">
                    <div className="logo">

                        <img src={logo} alt="logo" ></img>
                        <span>SPUTNIK</span>
                    </div>

                    <div className="links">

                        <img src={plus} alt="+"></img>

                        <li>
                            Home
                        </li>
                        <li>
                            Profile
                        </li>


                    </div>
                </div>


            </nav >
        )
    }
}



export default Nav;