import React, { Component } from "react";
import Link from "next/link";

class SignInMain extends Component {
  render() {
    return (
      <main>
        <section className="signup__area po-rel-z1 pt-100 pb-145">
          <div className="sign__shape">
            <img
              className="man-1"
              src="assets/img/icon/sign/man-1.png"
              alt="img not found"
            />
            <img
              className="man-2"
              src="assets/img/icon/sign/man-2.png"
              alt="img not found"
            />
            <img
              className="circle"
              src="assets/img/icon/sign/circle.png"
              alt="img not found"
            />
            <img
              className="zigzag"
              src="assets/img/icon/sign/zigzag.png"
              alt="img not found"
            />
            <img
              className="dot"
              src="assets/img/icon/sign/dot.png"
              alt="img not found"
            />
            <img
              className="bg"
              src="assets/img/icon/sign/sign-up.png"
              alt="img not found"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                <div className="section__title-wrapper text-center mb-55">
                  <h2 className="section__title">
                    Faça o Login <br /> Para ter Acesso à Plataforma.
                  </h2>
                  <p>
                    Se você não tem uma conta você pode{" "}
                    <Link href="/sign-up">
                      <a>se Cadastrar Aqui!</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                <div className="sign__wrapper white-bg">
                  <div className="sign__header mb-35">
                    <div className="sign__in text-center">
                      <a href="#" className="sign__social text-start mb-15">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <p>
                        {" "}
                        <span>........</span> Ou,{" "}
                        <Link href="/sign-in">
                          <a>Entre</a>
                        </Link>{" "}
                        com seu email<span> ........</span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="sign__form">
                    <form action="#">
                      <div className="sign__input-wrapper mb-25">
                        <h5>Email</h5>
                        <div className="sign__input">
                          <input type="text" placeholder="Email" />
                          <i className="fas fa-envelope"></i>
                        </div>
                      </div>
                      <div className="sign__input-wrapper mb-10">
                        <h5>Senha</h5>
                        <div className="sign__input">
                          <input type="text" placeholder="Senha" />
                          <i className="fas fa-lock"></i>
                        </div>
                      </div>
                      <div className="sign__action d-sm-flex justify-content-between mb-30">
                        <div className="sign__agree d-flex align-items-center">
                          <input
                            className="m-check-input"
                            type="checkbox"
                            id="m-agree"
                          />
                          <label className="m-check-label" htmlFor="m-agree">
                            Me mantenha logado
                          </label>
                        </div>
                        <div className="sign__forgot">
                          <a href="#">Esqueceu sua senha?</a>
                        </div>
                      </div>
                      <button className="e-btn  w-100">
                        {" "}
                        <span></span> Entrar
                      </button>
                      <div className="sign__new text-center mt-20">
                        <p>
                          Novo na Ex School?{" "}
                          <Link href="/sign-up">
                            <a>Cadastre-se</a>
                          </Link>
                        </p>
                      </div>
                    </form>
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

export default SignInMain;
