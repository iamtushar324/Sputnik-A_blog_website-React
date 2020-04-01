import React, { Component } from 'react';
import '../Styles/components/Article.scss'



class Article extends Component {

    constructor() {
        super()
        fetch('0.0.0.0:3333/api/articles', { method: "GET" }).then((res) => {
            res.json().then((data) => {
                console.log(data)
            })


        })
    }


    render() {

        return (
            <div className="article">
                <AuthorCard />

                <br></br>
                <div className="body">
                    <h1>Test title</h1>
                    <p>lorem sdkfdslfofj sdklfj dksj fkjf jiirhn  fkji frroiufj k jfijfi fj kdjfkjriekfn  fdjfkdf hd dkjf idjf kuerirjhsfh fhh sh firughifdhi ruhfdjghdfkk fj;aos uskfj ksj iut jirj ugrjgiuriug kdsgijfdskesriogjgkldfjoirej girjg  i; giijr ifvjskldrj gijiovhjrlgvjsdifhgksdfjgisvjijvi rjri irj vkfdsjgknvfsjdgisfdg idsfjgijfgnvkfdv kfnijgkfnkjgkvf  i jkjijrgvnfdkghskdfjg kljkjgifjkj  idfjgksejrgijvsfdhijdgvksdigfjsfj g f gidfj gkjdfgdsigj jfg ksdfjgkdsfjgosjgifdnblisf igj ifjgifjgirjgbsnopsgif fgfg jserijgsnfoi sjrgkljfgkjfkgjirhgofnkjgjjdsk fishfvnoaie dj fksj firendkjfkdj ofirsifjckdd jdfck heofdishvkcn grhhjfio hfi </p>

                </div>


                <div >
                    <h4>Comments:-</h4>
                    <Comment />
                </div>


            </div>
        )
    }
}

const style = {
    backgroundImage: 'url("../testpro.jpeg")'
};
class AuthorCard extends Component {



    render() {


        return (<div className="authorCard" style={style}>



            <div id="propic"></div>
            <span className="authName">Tushar Bhardwaj</span>




        </div >)
    }



}

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <AuthorCard />
                <div className="cmnt-body">
                    <p>This is a very bad idea</p>
                </div>



            </div>





        )
    }
}



export default Article;