import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumotron.jsx';


class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title='About' subtitle='this is a page about us'/>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Maiores excepturi sequi ipsum odit minus possimus esse quo 
            officiis est nemo dolores exercitationem quibusdam quam odio 
            asperiores animi nulla iusto velit totam fugit inventore dignissimos, 
            quasi quisquam repellendus? Ipsa, molestias nobis delectus consectetur 
            ad minus cum necessitatibus, nam officiis blanditiis perspiciatis odit 
            voluptatum illum commodi sit illo. Corporis rerum laudantium aliquam pariatur 
            nobis molestias beatae asperiores sequi optio in, adipisci quis ad sunt maxime 
            facere, eaque repudiandae dolores veritatis! Amet enim fugiat assumenda neque debitis, 
            ducimus iusto pariatur in magni, hic consectetur non sapiente quo consequatur aspernatur. 
            Minus ipsam voluptatum rerum.
          </p>  
          
          <Footer />
        </div>
      </div>
    );
  }
}

export default About