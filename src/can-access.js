import roles from "./roles-sec";
import check from "./has-permission";
const Can = props =>
  check(roles, props.role, props.perform, props.data)
    ? props.yes()
    : props.no();

Can.defaultProps = {
  yes: () => null,
  no: () => null
};

export default Can;
