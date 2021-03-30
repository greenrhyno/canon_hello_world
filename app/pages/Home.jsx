import React, {Component} from "react";
import {Link} from "react-router";
import "./Home.css";

class Home extends Component {

  render() {
    return (
      <div id="Home">
        <h1>Ryan's Hello World CMS Thingy</h1>
        <Link to="/cms">CMS LINK</Link>
      </div>
    );
  }

}

export default Home;
