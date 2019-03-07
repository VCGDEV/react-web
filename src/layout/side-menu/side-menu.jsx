import React from "react";
import MetisMenu from "react-metismenu";
import { adminRole } from "../../roles-sec";
import hasPermission from "../../has-permission";
const menu = [
  {
    icon: "home",
    label: "Home",
    to: "#",
    permission: "VIEW_HOME"
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
    this.state = { menu: menu, role: adminRole };
  }
  render() {
    let menu = this.state.menu;
    let role = this.state.role;
    menu = menu.filter(m => {
      if (hasPermission(role.permissions, m.permission)) return m;
      else console.log(`Not authorized to: ${m.label}`);
    });

    console.log(menu);
    return <MetisMenu content={menu} activeLinkFromLocation />;
  }
}

export default SideMenu;
