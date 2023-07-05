import React, { Component } from "react";
import Cta from "../Home/CtaSection";
import Link from "next/link";

class EventDetailsMain extends Component {
  render() {
    return (
      <main>
        <section className="page__title-area pt-120">
          <div className="page__title-shape">
            <img
              className="page-title-shape-5 d-none d-sm-block"
              src="assets/img/page-title/page-title-shape-1.png"
              alt="img not found"
            />
            <img
              className="page-title-shape-6"
              src="assets/img/page-title/page-title-shape-2.png"
              alt="img not found"
            />
            <img
              className="page-title-shape-7"
              src="assets/img/page-title/page-title-shape-4.png"
              alt="img not found"
            />
            <img
              className="page-title-shape-8"
              src="assets/img/page-title/page-title-shape-5.png"
              alt="img not found"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-9 col-xl-8">
                <div className="page__title-content mb-25 pr-40">
                  <div className="page__title-breadcrumb">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/">
                            <a>Home</a>
                          </Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link href="/event-details">
                            <a>Evento</a>
                          </Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Se torne um Product Manager
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <span className="page__title-pre purple-bg">
                    Arte & Design
                  </span>
                  <h5 className="page__title-3">Se torne um Product Manager</h5>
                </div>
                <div className="course__meta-2 d-sm-flex mb-30">
                  <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
                    <div className="course__teacher-thumb-3 mr-15">
                      <img
                        src="assets/img/course/teacher/teacher-1.jpg"
                        alt="img not found"
                      />
                    </div>
                    <div className="course__teacher-info-3">
                      <h5>Professor</h5>
                      <p>
                        <Link href="/instructor">
                          <a>Elon Gated</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="course__update mr-80 mb-30">
                    <h5>Last Update:</h5>
                    <p>24 jul, 2022</p>
                  </div>
                  <div className="course__update mb-30">
                    <h5>Local:</h5>
                    <p>Nova York, TX 82760, US</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="event__area pb-110">
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="events__wrapper">
                  <div className="events__thumb mb-35 w-img">
                    <img
                      src="assets/img/events/event-1.jpg"
                      alt="img not found"
                    />
                  </div>
                  <div className="events__details mb-35">
                    <h3>Descrição</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                  <div className="events__allow mb-40">
                    <h3>Esse Evento permite que os participantes:</h3>
                    <ul>
                      <li>
                        <i className="fas fa-check"></i> Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                      </li>
                    </ul>
                  </div>
                  <div className="events__tag">
                    <span>
                      <i className="fas fa-tag"></i>
                    </span>
                    <Link href="/course-details">
                      <a>Big data,</a>
                    </Link>
                    <Link href="/course-details">
                      <a> Análise de Dados,</a>
                    </Link>
                    <Link href="/course-details">
                      <a> Modelação de Dados</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="events__sidebar pl-70">
                  <div className="events__sidebar-widget white-bg mb-20">
                    <div className="events__sidebar-shape">
                      <img
                        className="events-sidebar-img-2"
                        src="assets/img/events/event-shape-2.png"
                        alt="img not found"
                      />
                      <img
                        className="events-sidebar-img-3"
                        src="assets/img/events/event-shape-3.png"
                        alt="img not found"
                      />
                    </div>
                    <div className="events__info">
                      <div className="events__info-meta mb-25 d-flex align-items-center justify-content-between">
                        <div className="events__info-price">
                          <h5>
                            $76.<span>00</span>{" "}
                          </h5>
                          <h5 className="old-price">$142.00</h5>
                        </div>
                        <div className="events__info-discount">
                          <span>68% OFF</span>
                        </div>
                      </div>
                      <div className="events__info-content mb-35">
                        <ul>
                          <li className="d-flex align-items-center">
                            <div className="events__info-icon">
                              <i className="fas fa-calendar-alt"></i>
                            </div>
                            <div className="events__info-item">
                              <h5>
                                <span>Acaba: </span> 26 jul, 2022 00:30
                              </h5>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="events__info-icon">
                              <i className="fas fa-clock"></i>
                            </div>
                            <div className="events__info-item">
                              <h5>
                                <span>Horário:</span> 10:45 - 13:30
                              </h5>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="events__info-icon">
                              <i className="fas fa-address-card"></i>
                            </div>
                            <div className="events__info-item">
                              <h5>
                                <span>Local: </span> Nova York, TX 82760, US
                              </h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="events__join-btn">
                        <Link href="/contact">
                          <a className="e-btn e-btn-7 w-100">
                            Matricule-se <i className="fas fa-arrow-right"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="events__sidebar-widget white-bg">
                    <div className="events__sponsor">
                      <h3 className="events__sponsor-title">Patrocinadores</h3>
                      <div className="events__sponsor-thumb mb-35">
                        <img
                          src="assets/img/events/sponsor-logo.png"
                          alt="img not found"
                        />
                      </div>
                      <div className="events__sponsor-info">
                        <h3>Thomas R. Toe</h3>
                        <h4>
                          Email: <span>support@educal.com</span>
                        </h4>
                        <div className="events__social d-xl-flex align-items-center">
                          <h4>Compartilhe:</h4>
                          <ul>
                            <li>
                              <a href="#" className="fb">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tw">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="pin">
                                <i className="fab fa-pinterest-p"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* cta-start */}
        <Cta />
        {/* cta-end */}
      </main>
    );
  }
}

export default EventDetailsMain;
