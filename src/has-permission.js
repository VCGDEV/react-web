export const check = (roles, role, action, data) => {
  if (!role) return false;
  const permissions = roles.indexOf(role);
  return permissions | false;
};

const hasPermission = (roles, permission) => check(roles, permission);
export default hasPermission;
