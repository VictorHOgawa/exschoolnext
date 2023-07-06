import React, { Component } from "react";
import dynamic from "next/dynamic";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
); // disable ssr
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CourseAccordion from "../Elements/Accordion/CourseAccordion";
const CourseSliderWithNoSSR = dynamic(
  () => import("../Elements/Slider/CourseSliderSection"),
  {
    ssr: false,
  }
);
import Link from "next/link";
import CourseSidebar from "./CourseSidebar";

class CourseDetailsMain extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          {/* course tab-start */}
          <section className="page__title-area pt-120 pb-90">
            <div className="page__title-shape">
              <img
                className="page-title-shape-5 d-none d-sm-block"
                src="assets/img/page-title/page-title-shape-1.png"
                alt="img not found"
              />
              <img
                className="page-title-shape-6"
                src="assets/img/page-title/page-title-shape-6.png"
                alt="img not found"
              />
              <img
                className="page-title-shape-7"
                src="assets/img/page-title/page-title-shape-4.png"
                alt="img not found"
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="course__wrapper">
                    <div className="page__title-content mb-25">
                      <div className="page__title-breadcrumb">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <Link href="/">
                                <a>Home</a>
                              </Link>
                            </li>
                            <li className="breadcrumb-item">
                              <Link href="/course-grid">
                                <a>Cursos</a>
                              </Link>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              O curso de análise de inteligência em negócios de
                              2022
                            </li>
                          </ol>
                        </nav>
                      </div>
                      <span className="page__title-pre">Desenvolvimento</span>
                      <h5 className="page__title-3">
                        O curso de análise de inteligência em negócios de 2022
                      </h5>
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
                        <h5>Última Atualização:</h5>
                        <p>24 jul, 2022</p>
                      </div>
                      <div className="course__rating-2 mb-30">
                        <h5>Review:</h5>
                        <div className="course__rating-inner d-flex align-items-center">
                          <ul>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fas fa-star"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fas fa-star"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fas fa-star"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fas fa-star"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fas fa-star"></i>{" "}
                              </a>
                            </li>
                          </ul>
                          <p>4.5</p>
                        </div>
                      </div>
                    </div>
                    <div className="course__img w-img mb-30">
                      <img
                        src="assets/img/course/details/course-details-1.jpg"
                        alt="img not found"
                      />
                    </div>
                    <Tabs>
                      <div className="course__tab-2 mb-45">
                        <ul
                          className="navs nav-tabss"
                          id="courseTab"
                          role="tablist"
                        >
                          <TabList>
                            <Tab>
                              <button
                                className="nav-link"
                                type="button"
                                role="tab"
                              >
                                <i className="fas fa-ribbon"></i>{" "}
                                <span>Descrição</span>{" "}
                              </button>
                            </Tab>
                            <Tab>
                              <button className="nav-link" type="button">
                                {" "}
                                <i className="fas fa-book"></i>{" "}
                                <span>Currículo</span>{" "}
                              </button>
                            </Tab>
                            <Tab>
                              <button className="nav-link" type="button">
                                {" "}
                                <i className="fas fa-star"></i>{" "}
                                <span>Reviews</span>{" "}
                              </button>
                            </Tab>
                            <Tab>
                              <button className="nav-link" type="button">
                                {" "}
                                <i className="fas fa-user"></i>{" "}
                                <span>Membros</span>{" "}
                              </button>
                            </Tab>
                          </TabList>
                        </ul>
                      </div>
                      <div className="course__tab-content mb-95">
                        <div className="tab-contents">
                          <TabPanel>
                            <div className="course__description">
                              <h3>Resumo do Curso</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>

                              <div className="course__tag-2 mb-35 mt-35">
                                <i className="fas fa-tags"></i>
                                <Link href="/course-details">
                                  <a>Big data,</a>
                                </Link>
                                <Link href="/course-details">
                                  <a> Análise de Data,</a>
                                </Link>
                                <Link href="/course-details">
                                  <a> Modelação de Data</a>
                                </Link>
                              </div>
                              <div className="course__description-list mb-45">
                                <h4>Qual é o Público Alvo?</h4>
                                <ul>
                                  <li>
                                    {" "}
                                    <i className="fas fa-check"></i> Gerentes de
                                    Negócios, Líderes
                                  </li>
                                  <li>
                                    {" "}
                                    <i className="fas fa-check"></i> Aulas,
                                    código e design disponíveis para Download
                                  </li>
                                  <li>
                                    {" "}
                                    <i className="fas fa-check"></i> Quem
                                    estiver buscando uma chance de se promover
                                  </li>
                                </ul>
                              </div>
                              <div className="course__instructor mb-45">
                                <h3>Outros Instrutores</h3>
                                <div className="course__instructor-wrapper d-md-flex align-items-center">
                                  <div className="course__instructor-item d-flex align-items-center mr-70">
                                    <div className="course__instructor-thumb mr-20">
                                      <img
                                        src="assets/img/course/teacher/teacher-3.jpg"
                                        alt="img not found"
                                      />
                                    </div>
                                    <div className="course__instructor-content">
                                      <h3>Eleanor Fant</h3>
                                      <p>Instrutor</p>
                                    </div>
                                  </div>
                                  <div className="course__instructor-item d-flex align-items-center mr-70">
                                    <div className="course__instructor-thumb mr-20">
                                      <img
                                        src="assets/img/course/teacher/teacher-2.jpg"
                                        alt="img not found"
                                      />
                                    </div>
                                    <div className="course__instructor-content">
                                      <h3>Lauren Stamps</h3>
                                      <p>Professor</p>
                                    </div>
                                  </div>
                                  <div className="course__instructor-item d-flex align-items-center mr-70">
                                    <div className="course__instructor-thumb mr-20">
                                      <img
                                        src="assets/img/course/teacher/teacher-1.jpg"
                                        alt="img not found"
                                      />
                                    </div>
                                    <div className="course__instructor-content">
                                      <h3>Jonquil Von</h3>
                                      <p>Associado</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <CourseAccordion />
                          </TabPanel>
                          <TabPanel>
                            <div className="course__review">
                              <h3>Reviews</h3>
                              <p>
                                Gosh william I'm telling crikey burke I don't
                                want no agro A bit of how's your father bugger
                                all mate off his nut that, what a plonker cuppa
                                owt to do
                              </p>

                              <div className="course__review-rating mb-50">
                                <div className="row g-0">
                                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                    <div className="course__review-rating-info grey-bg text-center">
                                      <h5>5</h5>
                                      <ul>
                                        <li>
                                          <a href="#">
                                            {" "}
                                            <i className="fas fa-star"></i>{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            {" "}
                                            <i className="fas fa-star"></i>{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            {" "}
                                            <i className="fas fa-star"></i>{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            {" "}
                                            <i className="fas fa-star"></i>{" "}
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            {" "}
                                            <i className="fas fa-star"></i>{" "}
                                          </a>
                                        </li>
                                      </ul>
                                      <p>4 Ratings</p>
                                    </div>
                                  </div>
                                  <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                    <div className="course__review-details grey-bg">
                                      <h5>Detailed Rating</h5>
                                      <div className="course__review-content mb-20">
                                        <div className="course__review-item d-flex align-items-center justify-content-between">
                                          <div className="course__review-text">
                                            <span>5 stars</span>
                                          </div>
                                          <div className="course__review-progress">
                                            <div
                                              className="single-progress w-100"
                                              data-width="100%"
                                            ></div>
                                          </div>
                                          <div className="course__review-percent">
                                            <h5>100%</h5>
                                          </div>
                                        </div>
                                        <div className="course__review-item d-flex align-items-center justify-content-between">
                                          <div className="course__review-text">
                                            <span>4 stars</span>
                                          </div>
                                          <div className="course__review-progress">
                                            <div
                                              className="single-progress w-30"
                                              data-width="30%"
                                            ></div>
                                          </div>
                                          <div className="course__review-percent">
                                            <h5>30%</h5>
                                          </div>
                                        </div>
                                        <div className="course__review-item d-flex align-items-center justify-content-between">
                                          <div className="course__review-text">
                                            <span>3 stars</span>
                                          </div>
                                          <div className="course__review-progress">
                                            <div
                                              className="single-progress w-none"
                                              data-width="0%"
                                            ></div>
                                          </div>
                                          <div className="course__review-percent">
                                            <h5>0%</h5>
                                          </div>
                                        </div>
                                        <div className="course__review-item d-flex align-items-center justify-content-between">
                                          <div className="course__review-text">
                                            <span>2 stars</span>
                                          </div>
                                          <div className="course__review-progress">
                                            <div
                                              className="single-progress w-none"
                                              data-width="0%"
                                            ></div>
                                          </div>
                                          <div className="course__review-percent">
                                            <h5>0%</h5>
                                          </div>
                                        </div>
                                        <div className="course__review-item d-flex align-items-center justify-content-between">
                                          <div className="course__review-text">
                                            <span>1 stars</span>
                                          </div>
                                          <div className="course__review-progress">
                                            <div
                                              className="single-progress w-none"
                                              data-width="0%"
                                            ></div>
                                          </div>
                                          <div className="course__review-percent">
                                            <h5>0%</h5>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="course__comment mb-75">
                                <h3>2 Comments</h3>

                                <ul>
                                  <li>
                                    <div className="course__comment-box ">
                                      <div className="course__comment-thumb float-start">
                                        <img
                                          src="assets/img/course/comment/course-comment-1.jpg"
                                          alt="img not found"
                                        />
                                      </div>
                                      <div className="course__comment-content">
                                        <div className="course__comment-wrapper ml-70 fix">
                                          <div className="course__comment-info float-start">
                                            <h4>Eleanor Fant</h4>
                                            <span>July 14, 2022</span>
                                          </div>
                                          <div className="course__comment-rating float-start float-sm-end">
                                            <ul>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="course__comment-text ml-70">
                                          <p>
                                            So I said lurgy dropped a clanger
                                            Jeffrey bugger cuppa gosh David
                                            blatant have it, standard A bit of
                                            how's your father my lady
                                            absolutely.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="course__comment-box ">
                                      <div className="course__comment-thumb float-start">
                                        <img
                                          src="assets/img/course/comment/course-comment-2.jpg"
                                          alt="img not found"
                                        />
                                      </div>
                                      <div className="course__comment-content">
                                        <div className="course__comment-wrapper ml-70 fix">
                                          <div className="course__comment-info float-start">
                                            <h4>Shahnewaz Sakil</h4>
                                            <span>July 17, 2022</span>
                                          </div>
                                          <div className="course__comment-rating float-start float-sm-end">
                                            <ul>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  href="#"
                                                  className="no-rating"
                                                >
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="course__comment-text ml-70">
                                          <p>
                                            David blatant have it, standard A
                                            bit of how's your father my lady
                                            absolutely.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="course__form">
                                <h3>Write a Review</h3>
                                <div className="course__form-inner">
                                  <form action="#">
                                    <div className="row">
                                      <div className="col-xxl-6">
                                        <div className="course__form-input">
                                          <input
                                            type="text"
                                            placeholder="Your Name"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-xxl-6">
                                        <div className="course__form-input">
                                          <input
                                            type="email"
                                            placeholder="Your Email"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-xxl-12">
                                        <div className="course__form-input">
                                          <input
                                            type="text"
                                            placeholder="Review Title"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-xxl-12">
                                        <div className="course__form-input">
                                          <div className="course__form-rating">
                                            <span>Rating : </span>
                                            <ul>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  href="#"
                                                  className="no-rating"
                                                >
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  href="#"
                                                  className="no-rating"
                                                >
                                                  {" "}
                                                  <i className="fas fa-star"></i>{" "}
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <textarea placeholder="Review Summary"></textarea>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-xxl-12">
                                        <div className="course__form-btn mt-10 mb-55">
                                          <button
                                            type="submit"
                                            className="e-btn"
                                          >
                                            Submit Review
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="course__member mb-45">
                              <div className="course__member-item">
                                <div className="row align-items-center">
                                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                                    <div className="course__member-thumb d-flex align-items-center">
                                      <img
                                        src="assets/img/course/instructor/course-instructor-1.jpg"
                                        alt="img not found"
                                      />
                                      <div className="course__member-name ml-20">
                                        <h5>Shahnewaz Sakil</h5>
                                        <span>Engineer</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                    <div className="course__member-info pl-45">
                                      <h5>07</h5>
                                      <span>Courses</span>
                                    </div>
                                  </div>
                                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                    <div className="course__member-info pl-70">
                                      <h5>05</h5>
                                      <span>Reviw</span>
                                    </div>
                                  </div>
                                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                    <div className="course__member-info pl-85">
                                      <h5>3.00</h5>
                                      <span>Rating</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="course__member-item">
                                <div className="row align-items-center">
                                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                                    <div className="course__member-thumb d-flex align-items-center">
                                      <img
                                        src="assets/img/course/instructor/course-instructor-2.jpg"
                                        alt="img not found"
                                      />
                                      <div className="course__member-name ml-20">
                                        <h5>Lauren Stamps</h5>
                                        <span>Teacher</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                    <div className="course__member-info pl-45">
                                      <h5>05</h5>
                                      <span>Courses</span>
                                    </div>
                                  </div>
                                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                    <div className="course__member-info pl-70">
                                      <h5>03</h5>
                                      <span>Reviw</span>
                                    </div>
                                  </div>
                                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                    <div className="course__member-info pl-85">
                                      <h5>3.00</h5>
                                      <span>Rating</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="course__member-item">
                                <div className="row align-items-center">
                                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 ">
                                    <div className="course__member-thumb d-flex align-items-center">
                                      <img
                                        src="assets/img/course/instructor/course-instructor-3.jpg"
                                        alt="img not found"
                                      />
                                      <div className="course__member-name ml-20">
                                        <h5>Jonquil Von</h5>
                                        <span>Associate</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                    <div className="course__member-info pl-45">
                                      <h5>09</h5>
                                      <span>Courses</span>
                                    </div>
                                  </div>
                                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                    <div className="course__member-info pl-70">
                                      <h5>07</h5>
                                      <span>Reviw</span>
                                    </div>
                                  </div>
                                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                    <div className="course__member-info pl-85">
                                      <h5>4.00</h5>
                                      <span>Rating</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                          <div className="course__share">
                            <h3>Compartilhe:</h3>
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
                    </Tabs>
                    <div className="course__related">
                      <div className="row">
                        <div className="col-xxl-12">
                          <div className="section__title-wrapper mb-40">
                            <h2 className="section__title">
                              Cursos{" "}
                              <span className="yellow-bg yellow-bg-big">
                                Relacionados
                                <img
                                  src="assets/img/shape/yellow-bg.png"
                                  alt="img not found"
                                />
                              </span>
                            </h2>
                            <p>
                              Você não precisa fazer tudo sozinho, você tem
                              nossa ajuda e assistência.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xxl-12">
                          <CourseSliderWithNoSSR />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <CourseSidebar />
                </div>
              </div>
            </div>
          </section>
          {/* course tab-end */}
        </main>
      </React.Fragment>
    );
  }
}

export default CourseDetailsMain;
