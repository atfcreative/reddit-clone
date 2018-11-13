import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import redditAPI from '../containers/redditAPI';

class NewPostForm extends Component {
    state = {
        title: '',
        content: '',
        thumbnail_image_url: '',
        votes: '',
        comments: '',
      }

      inputChange = event => {
          const { name, value } = event.target;
          this.setState({ [name]: value })
      }

      handleSubmit = event => {
          event.preventDefault();
          const { title, content, thumbnail_image_url, votes, comments } = this.state;
          const TextPost = { title, content, thumbnail_image_url, votes, comments}
          redditAPI.create(newTextPost)
            .then(res => {
                this.props.history.push('/posts')
            })
      }

    render() { 
        const { title, content, thumbnail_image_url, votes, comments} = this.state;
        return (
           <form onSubmit={this.handleSubmit}>
           {/*===================================================*/}
                <div className="form-row">
                    <div classname="col-md-4 mb-3">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title" placeholder="Title" value={title} />
                    </div>
                    <div classname="col-md-4 mb-3">
                        <label htmlFor="content">Content</label>
                        <input type="text" className="form-control" name="content" placeholder="Content" value={content} />
                    </div>
                    <div classname="col-md-4 mb-3">
                        <label htmlFor="thumbnail">thumbnail</label>
                        <input type="text" className="form-control" name="thumbnail" placeholder="Thumbnail" value={thumbnail} />
                    </div>
                </div>
            {/*===================================================*/}
                <div className="form-row">
                    <div classname="col-md-4 mb-3">
                        <label htmlFor="title">Votes</label>
                        <input type="text" className="form-control" name="votes" placeholder="Title" value={votes} />
                    </div>
                    <div classname="col-md-8 mb-3">
                        <label htmlFor="content">comments</label>
                        <input type="text" className="form-control" name="comments" placeholder="Comments" value={comments} />
                    </div>
                </div>
            {/*===================================================*/}
           </form>

          );
    }
}
 
export default NewPostForm;