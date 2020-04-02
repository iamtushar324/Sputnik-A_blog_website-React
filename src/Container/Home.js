import React from 'react';
import Article from '../Components/Article'
import FeedNav from '../Components/FeedNav'
import Loading from '../Components/Loading'


class Home extends React.Component {


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


  constructor(props) {
    super(props)


    this.state = {
      articles: [],
      isloading: true,
    }

  }

  componentDidMount() {
    this.getarticle()
  }

  render() {

    return (
      <div className="Home">


        <FeedNav />

        {
          this.state.isloading ? <Loading /> : this.state.articles.map((arr) => {
            return <Article
              title={arr.title}
              text={arr.body}
              pic={arr.author.image}
              name={arr.author.username}
            />

          })
        }

      </div>
    )
  }
}

export default Home;
