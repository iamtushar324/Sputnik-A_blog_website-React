import React, { Component } from 'react';






class Article extends Component {




    constructor(props) {

        super(props)

    }





    render() {

        return (
            <div className="article">
                <AuthorCard
                    pic={this.props.pic}
                    name={this.props.name}
                />

                <br></br>
                <div className="body">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.text}</p>
                </div>





            </div>
        )
    }
}




class AuthorCard extends Component {



    render() {


        return (<div className="authorCard">



            <img id="proPic" src={this.props.pic} alt="Profile " />
            <span className="authName">{this.props.name} </span>




        </div >)
    }



}





export default Article;