import React from "react";
import Header from "../components/Layout/Header/Header";
import FooterThree from "../components/Layout/Footer/FooterStyleThree";
import HomeMain from "../components/Home/HomeMain";

class Index extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <HomeMain />
        <br />
        <br />
        <FooterThree />
      </React.Fragment>
    );
  }
}

export default Index;
