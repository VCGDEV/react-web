export const check = (roles, role, action, data) => {
  if (!role) return true; //no role required for view
  return roles.indexOf(role) !== -1;
};

const hasPermission = (roles, permission) => check(roles, permission);
export default hasPermission;
