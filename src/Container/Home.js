import React from 'react';
import Nav from '../Components/Nav';
import Article from '../Components/Article'
import FeedNav from '../Components/FeedNav'
import { useState } from 'react';
import Loading from '../Components/Loading'







let title = "test title";
let picUrl = "https://i.picsum.photos/id/257/200/200.jpg";
let text = "lorem fkljsdfu iaewhcna if iansdcjaweio fiaefhi ewnciewj neicew8 jnckc sjs kfjsdkf asdoifj w3ifncoew jkdsfjdsfjkasdfjalsdjfiawjae fndk aisdf udskfjf sdfuijedaisldfdkjfkjdsfkdsfjiwefjoi nccneifjkdsjfk jdks fjiasfiaejwnoa;nadfisidfhjbcajdsh fdh dfsj dhfaehfuaekbsfuaewbfsj d fjdfhauefincaheuhcjadn df sfdeuwf "

let name = "Tushar Bhardwaj"


class Home extends React.Component {





  constructor(props) {
    super(props)

    this.state = {
      isloading: true,
      articles: []
    }






  }

  componentDidMount() {
    this.getarticle()


  }

  getarticle() {

    fetch('/api/articles')
      .then(res => res.json())
      .then(parJson => {
        this.setState({
          articles: parJson.articles,
          isloading: false
        })
      })


  }


  render() {

    return (
      <div className="Home">

        <Nav />
        <FeedNav />





        {this.state.isloading ? <Loading /> : this.state.articles.map((arr) => {
          return <Article
            title={arr.title}
            text={arr.body}
            pic={picUrl}
            name={arr.author.username}


          />
        })
        }








      </div>
    )
  }
}

export default Home;
