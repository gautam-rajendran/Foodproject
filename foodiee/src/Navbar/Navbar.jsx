import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'



export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar'> 
        <Link to='/home' className='navbar-brand'>React</Link>
        <div className='navitems'>
            <ul className='list'>
                <li ><Link className='nav-link' to="./Home">Home</Link></li>
                <li ><Link className='nav-link' to="./Contact">Contact</Link></li>
                <li ><Link className='nav-link' to="./Settings">Settings</Link></li>
                <li ><Link className='nav-link' to="./Users">Users</Link></li>
            </ul>
        </div>        
        </nav>
      </div>
    )
  }
}

export default Navbar