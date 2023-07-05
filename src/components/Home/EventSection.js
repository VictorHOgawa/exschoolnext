import React, { Component } from "react";
import Link from "next/link";

class Event extends Component {
  render() {
    return (
      <main>
        <section className="events__area pt-115 pb-120 p-relative">
          <div className="events__shape">
            <img
              className="events-1-shape"
              src="assets/img/events/events-shape.png"
              alt="img not found"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-4 offset-xxl-4">
                <div className="section__title-wrapper mb-60 text-center">
                  <h2 className="section__title">
                    Eventos{" "}
                    <span className="yellow-bg yellow-bg-big">
                      Atuais
                      <img
                        src="assets/img/shape/yellow-bg.png"
                        alt="img not found"
                      />
                    </span>
                  </h2>
                  <p>Nós achamos 13 eventos disponíveis para você.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                <div className="events__item mb-10 hover__active">
                  <div className="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                    <div className="events__content">
                      <div className="events__meta">
                        <span> 14 jun, 2022</span>
                        <span>00:00 - 14:30 </span>
                        <span>Nova York</span>
                      </div>
                      <h3 className="events__title">
                        <Link href="/event-details">
                          <a>Conferência de Transformação Digital</a>
                        </Link>
                      </h3>
                    </div>
                    <div className="events__more">
                      <Link href="/event-details">
                        <a className="link-btn">
                          Ver Mais
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                <div className="events__item mb-10 hover__active active">
                  <div className="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                    <div className="events__content">
                      <div className="events__meta">
                        <span>10 Abril, 2022</span>
                        <span>9:00 - 17:00 </span>
                        <span>Mindahan</span>
                      </div>
                      <h3 className="events__title">
                        <Link href="/event-details">
                          <a>Conferência do Dia de Educação Mundial</a>
                        </Link>
                      </h3>
                    </div>
                    <div className="events__more">
                      <Link href="/event-details">
                        <a className="link-btn">
                          Ver Mais
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                <div className="events__item mb-10 hover__active">
                  <div className="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                    <div className="events__content">
                      <div className="events__meta">
                        <span>16 jul, 2022</span>
                        <span>10:30 - 13:30 </span>
                        <span>Weedpatch</span>
                      </div>
                      <h3 className="events__title">
                        <Link href="/event-details">
                          <a>Fundamentos da Saúde Global</a>
                        </Link>
                      </h3>
                    </div>
                    <div className="events__more">
                      <Link href="/event-details">
                        <a className="link-btn">
                          Ver Mais
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                <div className="events__item mb-10 hover__active">
                  <div className="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                    <div className="events__content">
                      <div className="events__meta">
                        <span> 24 mar, 2022</span>
                        <span>10:30 - 12:00 </span>
                        <span>Lnland</span>
                      </div>
                      <h3 className="events__title">
                        <Link href="/event-details">
                          <a>Workshops de Criatividade em Negócios</a>
                        </Link>
                      </h3>
                    </div>
                    <div className="events__more">
                      <Link href="/event-details">
                        <a className="link-btn">
                          Ver Mais
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Event;
