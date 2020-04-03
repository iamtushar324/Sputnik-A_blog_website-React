import React, { Component } from 'react'

class CArt extends Component {

    createArt() {


        let title = document.getElementById('title').value
        let des = document.getElementById('description').value
        let body = document.getElementById("body").value
        let taglist = document.getElementById("tags").value.split(" ")


        fetch('/api/articles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "article": {
                    "title": title,
                    "description": des,
                    "body": body,
                    "tagList": taglist
                }
            })
        })
            .then(res => res.json())
            .then(parJson => {
                if (parJson.article.slug) {
                    this.props.navTo("home")

                }

                else if (parJson.error) {
                    alert(parJson.error.body)
                }

            }).catch((error) => {
                alert(error)
            })

    }


    constructor(props) {
        super(props)
        this.createArt = this.createArt.bind(this)
    }

    render() {

        return (<div>

            <div className="CArt_con"><h1> Create your Article</h1>


                <input id="title" type="text" placeholder="title" />
                <input id="description" type="text" placeholder="description" />
                <textarea id="body" type="text" placeholder="write your text here" />
                <input id="tags" type="text" placeholder="tags" />

                <button onClick={this.createArt}> Create</button>

            </div>



        </div>)

    }
}


export default CArt