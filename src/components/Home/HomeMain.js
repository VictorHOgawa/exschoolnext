import React, { Component } from "react";
import Hero from "./HeroSection";
import Service from "./ServiceSection";
import About from "./AboutSection";
import dynamic from "next/dynamic";
import Course from "./CourseSection";
import Teacher from "./TeacherSection";
import CtaThree from "./CtaSectionThree";
import Skilline from "./SkillineSection";
import TestimonialThree from "./TestimonialSectionThree";
import WhyChoose from "./WhyChooseSection";

const BrandWithNoSSR = dynamic(() => import("../Elements/Brand/BrandSection"), {
  ssr: false,
});

class HomeMain extends Component {
  render() {
    return (
      <main>
        {/* hero-start */}
        <Hero />
        {/* hero-end */}

        {/* category-start */}
        <Service />
        {/* category-end */}

        {/* banner-start */}
        <About />
        {/* banner-end */}

        <BrandWithNoSSR />

        {/* course-start */}
        <Course />
        {/* course-end */}

        {/* event-start */}
        <Teacher />
        {/* event-end */}

        {/* tab-start */}
        <CtaThree />
        {/* tab-end */}

        <Skilline />

        <TestimonialThree />

        {/* cta-start */}
        <WhyChoose />
        {/* cta-end */}
      </main>
    );
  }
}

export default HomeMain;
