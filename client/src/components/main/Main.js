import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Posts from '../posts/Posts';
import '../../index.css';
import trumpers from './trumpers.png';
import banner from './banner.png';
import arrowUp from './arrow-up.png';
import arrowDown from './arrow-down.png';
import aside from './aside.png';


class Main extends Component {
    render() { 
        return (
            <div className="row">
               <Posts />
              <div className="col posts">
               <img src={banner} alt="" class="image" />
                
                <ol>
                 <li className="single-post row">
                    <h3>1</h3>
                        <div className="votes col">
                        <img src={arrowUp} alt="" />
                        <h4>53k</h4>
                        <img src={arrowDown} alt="" />
                    </div>
                    
                    <img src={trumpers} alt="uck" className="imgPost" />
          
                    <div className="info col">
                      <h1>Man Rescued by Taliban Didn't Believe Trump Was President</h1> <br/>
                      <small>Submitted 4 hours ago by <strong>Chumung420</strong> to rn/political.</small> <br/>
                      <h5><Link to={'/'}>3415 comments</Link>  <Link to={'/'}>share</Link>  <Link to={'/'}>report</Link></h5>
                    </div>
                  </li>
                </ol>
            </div>

            <aside className="col">
                <img src={aside} alt="" className="image" />
            </aside>
          
            </div>
            
          
       
        );
    }
}
 
export default Main;