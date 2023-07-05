import React, { Component } from "react";

class BlogAuthor extends Component {
  render() {
    return (
      <div className="blog__author-3 d-sm-flex grey-bg mb-90">
        <div className="blog__author-thumb-3 mr-20">
          <img
            src="assets/img/blog/author/blog-author-1.jpg"
            alt="img not found"
          />
        </div>
        <div className="blog__author-content">
          <h4>Justin Case</h4>
          <span>Autor</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    );
  }
}

export default BlogAuthor;
