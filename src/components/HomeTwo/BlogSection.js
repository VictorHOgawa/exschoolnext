import React, { Component } from "react";
import Link from "next/link";

class Blog extends Component {
  render() {
    return (
      <section className="blog__area pt-115 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">
                  Nós compartilhamos <br />
                  Nossos{" "}
                  <span className="yellow-bg yellow-bg-big">
                    Pensamentos{" "}
                    <img
                      src="assets/img/shape/yellow-bg.png"
                      alt="img not found"
                    />
                  </span>
                  Sobre Design
                </h2>
                <p>
                  Você não precisa fazer tudo sozinho, você tem nossa ajuda e
                  assistência.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="blog__item white-bg mb-30 transition-3 fix">
                <div className="blog__thumb w-img fix">
                  <Link href="/blog-details">
                    <a>
                      <img
                        src="assets/img/blog/blog-1.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                </div>
                <div className="blog__content">
                  <div className="blog__tag">
                    <Link href="/blog-details">
                      <a>Arte & Design</a>
                    </Link>
                  </div>
                  <h3 className="blog__title">
                    <Link href="/blog-details">
                      <a>O Desafio do Aprendizado Global no Ensino Público</a>
                    </Link>
                  </h3>

                  <div className="blog__meta d-flex align-items-center justify-content-between">
                    <div className="blog__author d-flex align-items-center">
                      <div className="blog__author-thumb mr-10">
                        <img
                          src="assets/img/blog/author/author-1.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog__author-info">
                        <h5>Jim Séchen</h5>
                      </div>
                    </div>
                    <div className="blog__date d-flex align-items-center">
                      <i className="fas fa-clock"></i>
                      <span>02 abr, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="blog__item white-bg mb-30 transition-3 fix">
                <div className="blog__thumb w-img fix">
                  <Link href="/blog-details">
                    <a>
                      <img
                        src="assets/img/blog/blog-2.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                </div>
                <div className="blog__content">
                  <div className="blog__tag">
                    <Link href="/blog-details">
                      <a className="purple">Marketing</a>
                    </Link>
                  </div>
                  <h3 className="blog__title">
                    <Link href="/blog-details">
                      <a>
                        Como Exatamente a Tecnologia pode Melhorar a Leitura
                      </a>
                    </Link>
                  </h3>

                  <div className="blog__meta d-flex align-items-center justify-content-between">
                    <div className="blog__author d-flex align-items-center">
                      <div className="blog__author-thumb mr-10">
                        <img
                          src="assets/img/blog/author/author-2.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog__author-info">
                        <h5>Barry Tone</h5>
                      </div>
                    </div>
                    <div className="blog__date d-flex align-items-center">
                      <i className="fas fa-clock"></i>
                      <span>02 jul, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="blog__item white-bg mb-30 transition-3 fix">
                <div className="blog__thumb w-img fix">
                  <Link href="/blog-details">
                    <a>
                      <img
                        src="assets/img/blog/blog-3.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                </div>
                <div className="blog__content">
                  <div className="blog__tag">
                    <Link href="/blog-details">
                      <a className="pink">Design de UX</a>
                    </Link>
                  </div>
                  <h3 className="blog__title">
                    <Link href="/blog-details">
                      <a>
                        Orçamento de Nova Escola em Chicago Depende de Pensão
                        Estadual
                      </a>
                    </Link>
                  </h3>

                  <div className="blog__meta d-flex align-items-center justify-content-between">
                    <div className="blog__author d-flex align-items-center">
                      <div className="blog__author-thumb mr-10">
                        <img
                          src="assets/img/blog/author/author-3.jpg"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog__author-info">
                        <h5>Barry Tone</h5>
                      </div>
                    </div>
                    <div className="blog__date d-flex align-items-center">
                      <i className="fas fa-clock"></i>
                      <span> 02 jul, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
