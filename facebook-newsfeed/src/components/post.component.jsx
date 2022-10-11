import React, { Component } from "react";

class Post extends Component {
  state = {
    post: {
        imgSrc: './../../images/kamrul.jpg',
        userName: 'Kamrul Hasan',
        postDuration: '1h',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nam.',
        isLiked: false
    }
  };
  render() {
    const {imgSrc, userName, postDuration, content, isLiked} = this.state.post;
    return (
      <div className="container max-auto">
        <div className="post-wrapper">
          <div className="post aling-items-center d-flex">
            <div className="image-wrapper">
              <img src={ imgSrc } />
            </div>
            <div className="d-flex flex-column">
              <h2>{ userName }</h2>
              <div>{ postDuration }</div>
            </div>
          </div>
          <div className="post-content">
            <p>{ content }</p>
          </div>
          <div className="social d-flex justify-content-between">
            <div>{ isLiked ? 'Liked' : 'Like' }</div>
            <div>Comment</div>
            <div>Share</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
