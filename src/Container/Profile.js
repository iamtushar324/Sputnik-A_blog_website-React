import React, { Component } from 'react';
import depic from '../img/svg/account.svg'
class Profile extends Component {





    render() {

        return (

            <div>

                <div className="back_gradient"></div>
                <div className="main_con">

                    <div className="user_info" >

                        <img id="user_pro_img" src={this.props.pic ? this.props.pic : depic} alt="" />
                        <h1 id="user_name"> {this.props.user_name}</h1>
                        <h4 id="user_email">{this.props.user_email} </h4>


                    </div>
                    <div className="acc_info" >

                        <div> <h1 className="pro_num">{this.props.article_num}</h1> <h3>Articles</h3>   </div>
                        <div> <h1 className="pro_num">{this.props.follower_num}</h1> <h3>Followers</h3>  </div>
                        <div> <h1 className="pro_num">{this.props.following_num}</h1>  <h3>Following</h3> </div>

                    </div>

                </div>



            </div>

        )


    }
}


export default Profile