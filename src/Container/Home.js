import React from 'react';
import '../Styles/container/Home.scss';
import Nav from '../Components/Nav';
import Aritcle from '../Components/Article'



class Home extends React.Component {


  render() {

    return (
      <div className="Home">

        <Nav />


        <div className="articles">
          <Aritcle />

        </div>


      </div>
    )
  }
}

export default Home;
