import React, { Component } from 'react';
import '../../index.css';
import reddit from './reddit.png';

class NavBar extends Component {
    render() { 
        return (
        
            <div className="navbar">
                <img src={reddit} alt="" class="mb" />
                <p class="right">Want to join? <strong>Login</strong> or <strong>sign up</strong> in seconds. | <strong>English</strong></p>
                <h6 class="active">hot</h6>
                <h6>new</h6>
                <h6>rising</h6>
                <h6>controversial</h6>
                <h6>top</h6>
                <h6>gilded</h6>
                <h6>wiki</h6>
             </div>
        
        );
    }
}
 
export default NavBar;