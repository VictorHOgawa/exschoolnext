import React, { Component } from "react";
import Link from "next/link";

class Skilline extends Component {
  render() {
    return (
      <section className="what__area pt-115">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="section__title-wrapper mb-60 text-center">
                <h2 className="section__title">
                  O Quê é a{" "}
                  <span className="yellow-bg-big">
                    Executivo's?{" "}
                    <img
                      src="assets/img/shape/yellow-bg-2.png"
                      alt="img not found"
                    />
                  </span>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-5 offset-xl-1 col-xl-5 offset-xl-1 col-lg-6">
              <div className="what__item transition-3 mb-30 p-relative fix">
                <div className="what__thumb w-img">
                  <img src="assets/img/what/what-1.jpg" alt="img not found" />
                </div>
                <div className="what__content p-absolute text-center">
                  <h3 className="what__title white-color">
                    Aprendizado Majoritariamente
                    <br /> Online
                  </h3>
                  <Link href="/contact">
                    <a className="e-btn e-btn-border-2">Comece uma Aula Hoje</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6">
              <div className="what__item transition-3 mb-30 p-relative fix">
                <div className="what__thumb w-img">
                  <img src="assets/img/what/what-2.jpg" alt="img not found" />
                </div>
                <div className="what__content p-absolute text-center">
                  <h3 className="what__title white-color">
                    Se torne um
                    <br /> Instrutor
                  </h3>
                  <Link href="/contact">
                    <a className="e-btn e-btn-border-2">Comece a Ensinar</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skilline;
