import React from 'react';
import {Link} from 'react-router-dom'
const Navbar =()=>{
    return(
        <nav>
    <div className="nav-wrapper white">
      <Link to="/" className="brand-logo left">MemeVerse</Link>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>
    )
}

export default Navbar