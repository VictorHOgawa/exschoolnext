import React, { Component } from "react";
import Link from "next/link";

class RecentPost extends Component {
  render() {
    return (
      <div className="sidebar__widget mb-55">
        <div className="sidebar__widget-head mb-35">
          <h3 className="sidebar__widget-title">Posts Recentes</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="rc__post-wrapper">
            <div className="rc__post d-flex align-items-center">
              <div className="rc__thumb mr-20">
                <Link href="/blog-details">
                  <a>
                    <img
                      src="assets/img/blog/sm/blog-sm-1.jpg"
                      alt="img not found"
                    />
                  </a>
                </Link>
              </div>
              <div className="rc__content">
                <div className="rc__meta">
                  <span>15 out, 2021</span>
                </div>
                <h6 className="rc__title">
                  <Link href="/blog-details">
                    <a>A importância da motivação intrínseca.</a>
                  </Link>
                </h6>
              </div>
            </div>
            <div className="rc__post d-flex align-items-center">
              <div className="rc__thumb mr-20">
                <Link href="/blog-details">
                  <a>
                    <img
                      src="assets/img/blog/sm/blog-sm-2.jpg"
                      alt="img not found"
                    />
                  </a>
                </Link>
              </div>
              <div className="rc__content">
                <div className="rc__meta">
                  <span> 26 mar, 2021</span>
                </div>
                <h6 className="rc__title">
                  <Link href="/blog-details">
                    <a>Uma Alternativa Melhor para dar Notas à Alunos</a>
                  </Link>
                </h6>
              </div>
            </div>
            <div className="rc__post d-flex align-items-center">
              <div className="rc__thumb mr-20">
                <Link href="/blog-details">
                  <a>
                    <img
                      src="assets/img/blog/sm/blog-sm-3.jpg"
                      alt="img not found"
                    />
                  </a>
                </Link>
              </div>
              <div className="rc__content">
                <div className="rc__meta">
                  <span> 15 out, 2021</span>
                </div>
                <h6 className="rc__title">
                  <Link href="/blog-details">
                    <a>_Evolução de Social Media Estratégica</a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentPost;
