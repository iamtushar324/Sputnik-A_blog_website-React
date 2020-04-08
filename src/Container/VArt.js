import React from 'react';
import Article, { comments } from "../Components/Article"


class VArt extends React.Component {

    addcomnt() {
        let text = document.getElementById('comment_text').value
        fetch(`/api/articles/${this.props.slug}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "comment": {
                    "body": text
                }
            })
        })
            .then(res => res.json())
            .then(parJson => {
                if (parJson.comment) {
                    this.reloadComnt()
                }
                else {
                    alert(parJson)
                }

            })

    }




    reloadComnt() {
        fetch(`/api/articles/${this.props.slug}/comments`)
            .then(res => res.json())
            .then(parJson => {
                console.log(parJson)
                this.setState({
                    comments: parJson,


                })
            })
    }


    constructor(props) {
        super(props)

        this.addcomnt = this.addcomnt.bind(this)
        this.reloadComnt = this.reloadComnt.bind(this)

        this.state = {

            article: null,
            comments: null
        }

        fetch(`/api/articles/${this.props.slug}`)
            .then(res => res.json())
            .then(parJson => {
                this.setState({
                    article: parJson.article,


                })
            })


        this.reloadComnt()

    }

    render() {

        return (
            <div>

                {this.state.article ?
                    <div> <Article

                        key={this.state.article.slug}
                        slug={this.state.article.slug}
                        title={this.state.article.title}
                        text={this.state.article.body}
                        pic={this.state.article.author.image}
                        name={this.state.article.author.username}

                    />

                        <div className="article" id="tags">
                            {this.state.article.description ?
                                <span><span>Description:-</span> {this.state.article.description}<br></br> </span>
                                : null

                            }

                            <span>Tags:-</span>   {this.state.article.tagList.map((t) => t + " ")}
                        </div>

                        <div className="article" id="comnt_box" >
                            <input id="comment_text" type="text" placeholder="Comment on this Article" />
                            <button onClick={this.addcomnt} id="comnt_btn">Comment</button>

                        </div>

                        <div className="article" >
                            Commnets : -
                    </div>


                        {this.state.comments ? this.state.comments.map((comment) => {
                            return <Article
                                key={comment.id}
                                id={comment.id}
                                text={comment.body}
                                pic={comment.author.image}
                                name={comment.author.username}
                            />
                        })
                            : null


                        }




                    </div>





                    : null}








            </div>
        )


    }
}

export default VArt