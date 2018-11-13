import React from 'react';
import Post from './Post';

const Posts = props => {
    const { posts } = props;
    const postsList = posts.map(post => <Post key={post._id} post={post} onDelete={props.onDelete} />)
        return (
            <div>
                {postsList}
            </div>
    );
}
 
export default Posts;