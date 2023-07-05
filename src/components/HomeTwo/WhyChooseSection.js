import React, { Component } from "react";
import Link from "next/link";

class WhyChoose extends Component {
  render() {
    return (
      <section className="why__area pt-125">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
              <div className="why__content pr-50 mt-40">
                <div className="section__title-wrapper mb-30">
                  <span className="section__sub-title">
                    Por Quê nos Escolher
                  </span>
                  <h2 className="section__title">
                    Ferramentas para{" "}
                    <span className="yellow-bg yellow-bg-big">
                      Professores
                      <img
                        src="assets/img/shape/yellow-bg.png"
                        alt="img not found"
                      />
                    </span>{" "}
                    e Alunos
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div className="why__btn">
                  <Link href="/contact">
                    <a className="e-btn e-btn-3 mr-30">
                      Participe Gratuitamente
                    </a>
                  </Link>

                  <Link href="/about">
                    <a className="link-btn">
                      Aprenda Mais
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8">
              <div className="why__thumb">
                <img src="assets/img/why/why.png" alt="img not found" />
                <img
                  className="why-green"
                  src="assets/img/why/why-shape-green.png"
                  alt="img not found"
                />
                <img
                  className="why-pink"
                  src="assets/img/why/why-shape-pink.png"
                  alt="img not found"
                />
                <img
                  className="why-dot"
                  src="assets/img/why/why-shape-dot.png"
                  alt="img not found"
                />
                <img
                  className="why-line"
                  src="assets/img/why/why-shape-line.png"
                  alt="img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChoose;
