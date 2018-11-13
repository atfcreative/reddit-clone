import React from 'react';
import { Link } from 'react-router-dom';
import trumpers from './trumpers.png';
import banner from './banner.png';
import arrowUp from './arrow-up.png';
import arrowDown from './arrow-down.png';

const Post = props => {
    const { post } = props;
    // const onClickDelete = () => props.onDelete(post._id);
    return (
        <div className="row">
            <div className="col posts">
                <img src={banner} alt="" class="image" />
          
                    <ol>
                        <li className="single-post row">
                            <h3>{post.id}</h3>
                                <div className="votes col">
                                <img src={arrowUp} alt="" />
                                <h4>{post.votes}</h4>
                                <img src={arrowDown} alt="" />
                            </div>
                            
                            <img src={trumpers} alt="uck" className="imgPost" />
                    
                            <div className="info col">
                                <h1>{post.title}</h1> <br/>
                                <small>Posted{post.timestamp} by <strong>Chumung420</strong> to rn/political.</small> <br/>
                                <h5><Link to={'/'}>{customElements.length} comments</Link>  <Link to={'/'}>share</Link>  <Link to={'/'}>report</Link></h5>
                            </div>
                        </li>
                    </ol>
            </div>
        </div>
    )
}

export default Post;



