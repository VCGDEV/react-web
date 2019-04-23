import React from "react";
import MetisMenu from "react-metismenu";
import { adminRole } from "../../roles-sec";
import hasPermission from "../../has-permission";
const menu = [
  {
    icon: "home",
    label: "Home",
    to: "#"
  },
  {
    icon: "user-cog",
    label: "Customers",
    to: "#customers",
    permission: "VIEW_CUSTOMERS"
  },
  {
    icon: "users",
    label: "Users",
    to: "#users",
    permission: "VIEW_USERS"
  },
  {
    icon: "file-invoice",
    label: "Invoices",
    to: "#invoices",
    permission: "VIEW_INVOICES"
  },
  {
    icon: "box",
    label: "Applications",
    to: "#applications",
    permission: "VIEW_APPS"
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
    this.state = { menu: menu, role: adminRole };
  }
  render() {
    let menu = this.state.menu;
    const role = this.state.role;
    menu = menu.filter(m => hasPermission(role.permissions, m.permission));
    return <MetisMenu content={menu} activeLinkFromLocation />;
  }
}

export default SideMenu;
