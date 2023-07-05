import React, { Component } from "react";

class SkillLevel extends Component {
  render() {
    return (
      <div className="course__sidebar-widget grey-bg">
        <div className="course__sidebar-info">
          <h3 className="course__sidebar-title">Dificuldade</h3>
          <ul>
            <li>
              <div className="course__sidebar-check mb-10 d-flex align-items-center">
                <input className="m-check-input" type="checkbox" id="m-level" />
                <label className="m-check-label" htmlFor="m-level">
                  Todos (50)
                </label>
              </div>
            </li>
            <li>
              <div className="course__sidebar-check mb-10 d-flex align-items-center">
                <input
                  className="m-check-input"
                  type="checkbox"
                  id="m-beginner"
                />
                <label className="m-check-label" htmlFor="m-beginner">
                  Iniciante (32)
                </label>
              </div>
            </li>
            <li>
              <div className="course__sidebar-check mb-10 d-flex align-items-center">
                <input
                  className="m-check-input"
                  type="checkbox"
                  id="m-intermediate"
                />
                <label className="m-check-label" htmlFor="m-intermediate">
                  Intermediário (17)
                </label>
              </div>
            </li>
            <li>
              <div className="course__sidebar-check mb-10 d-flex align-items-center">
                <input
                  className="m-check-input"
                  type="checkbox"
                  id="m-expert"
                />
                <label className="m-check-label" htmlFor="m-expert">
                  Expert (2)
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SkillLevel;
