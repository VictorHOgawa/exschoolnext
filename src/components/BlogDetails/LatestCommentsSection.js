import React, { Component } from "react";
import Link from "next/link";

class LatestComments extends Component {
  render() {
    return (
      <div className="latest-comments mb-95">
        <h3>3 Comentários</h3>
        <ul>
          <li>
            <div className="comments-box grey-bg">
              <div className="comments-info d-flex">
                <div className="comments-avatar mr-20">
                  <img
                    src="assets/img/blog/comments/comment-1.jpg"
                    alt="img not found"
                  />
                </div>
                <div className="avatar-name">
                  <h5>Eleanor Fant</h5>
                  <span className="post-meta"> 14 jul, 2022</span>
                </div>
              </div>
              <div className="comments-text ml-65">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="comments-replay">
                  <a href="#">Reply</a>
                </div>
              </div>
            </div>
          </li>
          <li className="children">
            <div className="comments-box grey-bg">
              <div className="comments-info d-flex">
                <div className="comments-avatar mr-20">
                  <img
                    src="assets/img/blog/comments/comment-1.jpg"
                    alt="img not found"
                  />
                </div>
                <div className="avatar-name">
                  <h5>Dominic</h5>
                  <span className="post-meta">16 abril, 2022 </span>
                </div>
              </div>
              <div className="comments-text ml-65">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="comments-replay">
                  <a href="#">Reply</a>
                </div>
              </div>
            </div>
            <ul>
              <li className="children-2">
                <div className="comments-box grey-bg">
                  <div className="comments-info d-flex">
                    <div className="comments-avatar mr-20">
                      <img
                        src="assets/img/blog/comments/comment-3.jpg"
                        alt="img not found"
                      />
                    </div>
                    <div className="avatar-name">
                      <h5>Von Rails</h5>
                      <span className="post-meta">18 abril, 2022 </span>
                    </div>
                  </div>
                  <div className="comments-text ml-65">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <div className="comments-replay">
                      <a href="#">Reply</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default LatestComments;
