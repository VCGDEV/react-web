import React from "react";
import "style.css";
import SideMenu from "../side-menu/side-menu";
import AppHeader from "../header/app-header";
class Container extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="menu">
          <SideMenu />
        </div>
        <div className="header">
          <AppHeader />
        </div>
        <div className="content" />
      </div>
    );
  }
}

export default Container;
