import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumotron.jsx';


class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title='Contact' subtitle='this is our contact page'/>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quidem quisquam cumque recusandae, accusamus praesentium 
            corporis deserunt, reiciendis minus quos mollitia libero aut vero? 
            Blanditiis error deleniti sed quia animi ipsa esse fugit quis quas 
            mollitia illum quisquam eligendi unde enim aliquid repellendus 
            perspiciatis ad non totam, culpa hic accusantium! Laborum voluptatem 
            vitae nisi eaque veritatis expedita eum maxime, sequi architecto 
            aspernatur consequatur dolore doloribus minus incidunt provident 
            deleniti ipsa aut tenetur. Laborum dolor quibusdam voluptatum rem culpa? 
            In iste ratione voluptatem veniam fuga omnis deserunt explicabo error 
            voluptate totam quasi vitae a earum culpa laborum sint odit dolores, assumenda voluptatibus!
          </p>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact