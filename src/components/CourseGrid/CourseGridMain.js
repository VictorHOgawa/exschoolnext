import React, { Component } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import CourseGridTab from "../Elements/Tab/CourseGridTab";

class CourseGridMain extends Component {
  render() {
    return (
      <main>
        {/* breadcrumb-start */}
        <Breadcrumb />
        {/* breadcrumb-end */}

        {/* course tab-start */}
        <CourseGridTab />
        {/* course tab-end */}
      </main>
    );
  }
}

export default CourseGridMain;
