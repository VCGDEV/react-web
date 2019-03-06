import React from "react";
import MetisMenu from "react-metismenu";

const menu = [
  {
    icon: "home",
    label: "Home",
    to: "#home"
  },
  {
    icon: "user-cog",
    label: "Customers",
    to: "#customers"
  },
  {
    icon: "users",
    label: "Users",
    to: "#users"
  },
  {
    icon: "file-invoice",
    label: "Invoices",
    to: "#invoices"
  },
  {
    icon: "box",
    label: "Applications",
    to: "#applications"
  },
  {
    icon: "gifts",
    label: "Products",
    to: "#products"
  },
  {
    icon: "cog",
    label: "Configurations",
    content: [
      {
        icon: "cubes",
        label: "Modules",
        to: "#modules"
      },
      {
        icon: "bezier-curve",
        label: "Profiles",
        to: "#profiles"
      },
      {
        icon: "key",
        label: "Authorizations",
        to: "#authorizations"
      },
      {
        icon: "folder-plus",
        label: "Catalogs",
        content: [
          {
            icon: "user",
            label: "User Extra Data",
            to: "#catalogs/users_data"
          }
        ]
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
