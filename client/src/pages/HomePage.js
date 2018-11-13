import React, { Component } from 'react';
import NavBar from '../components/navbar/NavBar';
import Main from '../components/main/Main';

class HomePage extends Component {
    render() { 
        return (
            <div>
                <NavBar />
                <Main />
            </div>
        );
    }
}
 
export default HomePage;