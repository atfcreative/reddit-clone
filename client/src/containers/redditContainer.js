import React, { Component } from 'react';
import Posts from './Posts';
import redditAPI from '../containers/redditAPI';

class PostsContainer extends Component {
    state = {
        posts: [],
      }
    
    componentDidMount = () => {
        redditAPI.index()
        .then(res => {
            const posts = res.data;
            this.setState({ posts })
        })
        .catch(err => console.log(err));
    }  

    handleDelete = id => {
        console.log(id);
        redditAPI.destroy(id)
            .then(res => {
                const posts = this.state.posts;
                const updatedPosts = posts.filter(post => post._id !== id);
                this.setState({ posts: updatedPosts });
            })
            .catch(err => console.log(err));
    }

    render() { 
        const { posts } = this.state;
        return (
            <div>
                <Posts posts={posts} onDelete={this.handleDelete} />
            </div>
        );
    }
}
 
export default PostsContainer;