import React from "react";
import MetisMenu from "react-metismenu";

const menu = [
  {
    icon: "icon-class-name",
    label: "Home",
    to: "#a-link"
  },
  {
    icon: "icon-class-name",
    label: "Configurations",
    content: [
      {
        icon: "icon-class-name",
        label: "Modules",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Profiles",
        to: "#another-link"
      }
    ]
  }
];
class SideMenu extends React.Component {
  constructor() {
    super();
    this.state = { menu: menu };
  }
  render() {
    return <MetisMenu content={this.state.menu} activeLinkFromLocation />;
  }
}

export default SideMenu;
