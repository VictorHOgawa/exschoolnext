import React, { Component } from "react";
import Link from "next/link";

class Tags extends Component {
  render() {
    return (
      <div className="sidebar__widget mb-55">
        <div className="sidebar__widget-head mb-35">
          <h3 className="sidebar__widget-title">Tags</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__tag">
            <Link href="/blog-details">
              <a>Arte & Design</a>
            </Link>
            <Link href="/blog-details">
              <a>Cursos</a>
            </Link>
            <Link href="/blog-details">
              <a>Vídeos</a>
            </Link>
            <Link href="/blog-details">
              <a>App</a>
            </Link>
            <Link href="/blog-details">
              <a>Educação</a>
            </Link>
            <Link href="/blog-details">
              <a>Ciência de Dados</a>
            </Link>
            <Link href="/blog-details">
              <a>Machine Learning</a>
            </Link>
            <Link href="/blog-details">
              <a>Tips</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
