import { Fragment } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      {/* <h1>Header</h1> */}
      <Link to="/">Home</Link>
      {/* <Link to="/city/:id">Show more details</Link> */}
    </Fragment>
  );
};
export default Header;
