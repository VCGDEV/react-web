import React from "react";
import "style.css";
import SideMenu from "../side-menu/side-menu";
import AppHeader from "../header/app-header";
import CustomerList from "../../pages/customers/customer-list";
import Home from "../../pages/home/home";
import { HashRouter, Route } from "react-router-dom";

class Container extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="main-container">
          <div className="menu">
            <SideMenu />
          </div>
          <div className="header">
            <AppHeader />
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/customers" component={CustomerList} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Container;
