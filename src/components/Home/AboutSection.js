import React, { Component } from "react";
import Link from "next/link";

class About extends Component {
  render() {
    return (
      <section className="about__area pt-90 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
              <div className="about__thumb-wrapper">
                <div className="about__review">
                  <h5>
                    {" "}
                    <span>8,200+</span> Avaliações 5 estrelas
                  </h5>
                </div>
                <div className="about__thumb ml-100">
                  <img src="assets/img/about/about.jpg" alt="img not found" />
                </div>
                <div className="about__banner mt--210">
                  <img
                    src="assets/img/about/about-banner.jpg"
                    alt="img not found"
                  />
                </div>
                <div className="about__student ml-270 mt--80">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/about/student-4.jpg"
                        alt="img not found"
                      />
                      <img
                        src="assets/img/about/student-3.jpg"
                        alt="img not found"
                      />
                      <img
                        src="assets/img/about/student-2.jpg"
                        alt="img not found"
                      />
                      <img
                        src="assets/img/about/student-1.jpg"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <p>
                    Junte-se a <span>4,000+</span> estudantes
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__content pl-70 pr-60 pt-25">
                <div className="section__title-wrapper mb-25">
                  <h2 className="section__title">
                    Conquiste suas <br />
                    <span className="yellow-bg-big">
                      Metas{" "}
                      <img
                        src="assets/img/shape/yellow-bg-2.png"
                        alt="img not found"
                      />
                    </span>{" "}
                    Conosco{" "}
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="about__list mb-35">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check"></i> Atualize as habilidades
                      de sua organização
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check"></i> Acesse mais de 100K
                      cursos online
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check"></i> Aprenda as últimas
                      habilidades
                    </li>
                  </ul>
                </div>
                <Link href="/contact">
                  <a className="e-btn e-btn-border">Comece agora</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
