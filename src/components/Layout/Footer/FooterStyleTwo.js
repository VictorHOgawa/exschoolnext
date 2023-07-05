import React from "react";
import Link from "next/link";

const FooterStyleTwo = () => {
  return (
    <footer>
      <div className="footer__area grey-bg-2">
        <div className="footer__top pt-190 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <div className="footer__logo">
                      <Link href="/">
                        <a>
                          <img
                            src="assets/img/logo/logo.png"
                            alt="img not found"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="footer__widget-body footer__widget-body-2">
                    <p>
                      Ótimas ideias e planos de lições para professores.
                      Educadores podem alterar os planos.
                    </p>

                    <div className="footer__social">
                      <ul>
                        <li>
                          <a href="#">
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
              <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title footer__widget-title-2">
                      Empresa
                    </h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <li>
                          <Link href="/about">
                            <a>Sobre Nós</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/course-grid">
                            <a>Cursos</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/event-details">
                            <a>Eventos</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/instructor">
                            <a>Instrutores</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/instructor">
                            <a>Carreira</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/instructor">
                            <a>Se torne um Professor</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <a>Fale Conosco</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title footer__widget-title-2">
                      Platforma
                    </h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <li>
                          <Link href="/instructor">
                            <a>Pesquise</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/instructor">
                            <a>Biblioteca</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/instructor">
                            <a>Parceiros</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <a>Notícias e Blogs</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <a>Perguntas Frequentes</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/course-grid">
                            <a>Tutoriais</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <div className="footer__widget footer__pl-70 mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title footer__widget-title-2">
                      Se Inscreva
                    </h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__subscribe footer__subscribe-2">
                      <form action="#">
                        <div className="footer__subscribe-input mb-15">
                          <input type="email" placeholder="Seu Email" />
                          <button type="submit">
                            <i className="fas fa-arrow-right"></i>
                            <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </form>
                      <p>
                        Receba as últimas notícias e atualizações direto na sua
                        caixa de entrada.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom footer__bottom-2">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="footer__copyright footer__copyright-2 text-center">
                  <p>
                    © 2022 Educal, All Rights Reserved. Design By{" "}
                    <Link href="/">
                      <a>Theme Pure</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterStyleTwo;
