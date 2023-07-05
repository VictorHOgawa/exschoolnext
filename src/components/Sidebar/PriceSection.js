import React, { Component } from "react";

class Price extends Component {
  render() {
    return (
      <div className="course__sidebar-widget grey-bg">
        <div className="course__sidebar-info">
          <h3 className="course__sidebar-title">Preço</h3>
          <ul>
            <li>
              <div className="course__sidebar-check mb-10 d-flex align-items-center">
                <input
                  className="m-check-input"
                  type="checkbox"
                  id="m-all-course"
                />
                <label className="m-check-label" htmlFor="m-all-course">
                  Todos (204)
                </label>
              </div>
            </li>
            <li>
              <div className="course__sidebar-check mb-10 d-flex align-items-center">
                <input className="m-check-input" type="checkbox" id="m-free" />
                <label className="m-check-label" htmlFor="m-free">
                  Cursos Grátis(36)
                </label>
              </div>
            </li>
            <li>
              <div className="course__sidebar-check mb-10 d-flex align-items-center">
                <input
                  className="m-check-input"
                  type="checkbox"
                  id="m-premium"
                />
                <label className="m-check-label" htmlFor="m-premium">
                  Cursos Premium (184)
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Price;
