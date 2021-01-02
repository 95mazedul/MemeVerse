import React from 'react';
import {Link} from 'react-router-dom';
const Signup =()=>{
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>MemeVerse</h2>
                <input  type="text" placeholder="name"/>
                <input  type="text" placeholder="email"/>
                <input  type="text" placeholder="password"/>
                <button className="btn waves-effect waves-light #ef5350 red lighten-1" >
                    Signin
                </button>
                <h5>
                <Link to="/signin">Already have an account ?</Link>
                </h5>
                
            </div>
        </div>        
    )
}

export default Signup