import React, { Component } from 'react';






class Article extends Component {

    click() {
        this.props.onArtClick(this.props.slug)
    }



    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
    }


    render() {

        return (
            <div className="article" onClick={this.click}>
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