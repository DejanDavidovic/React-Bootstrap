import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumotron.jsx';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title='Home' subtitle='this is our home page'/>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi earum numquam omnis facere ipsa possimus, iusto 
            neque eos obcaecati mollitia aliquid impedit ex in veritatis 
            doloremque. Eveniet commodi eum, maxime provident impedit 
            ipsa adipisci iste cumque dicta qui eos omnis pariatur asperiores sunt, 
            similique soluta consequatur perspiciatis maiores a voluptatem? 
            Rem, dolorum iste architecto quas minima reiciendis excepturi eveniet, aspernatur,
            dicta nam eum ratione quis ad accusantium. Aut similique, veniam obcaecati vitae 
            perspiciatis molestias rerum deleniti aliquid architecto quas porro animi. 
            Minima rem deserunt, deleniti maxime id corporis natus ut ex, cum architecto consequuntur suscipit, 
            ipsam quasi inventore totam ab!
          </p>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home