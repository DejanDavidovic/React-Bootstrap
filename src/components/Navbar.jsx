import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className='navbar-header'>
                  <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                  </button>
                  
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav  ">
                    <li >
                      <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li >
                      <Link className='nav-link' to='/about'>About</Link>
                    </li>
                    <li >
                      <Link className='nav-link' to='/contact'>Contact Us</Link>  
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        );
    }
}

export default Navbar;