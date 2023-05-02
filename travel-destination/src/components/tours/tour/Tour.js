import { Fragment } from "react";
import { Link } from "react-router-dom";
const Tour = (props) => {
  return (
    <Fragment>
      {props.data.map((dataItem) => {
        return (
          <Link to="/TourDetails/:id" key={dataItem.id}>
            <div>
              <p>{dataItem.name}</p>
              <img src={dataItem.image} alt={dataItem.name} />
              <hr />
            </div>
          </Link>
        );
      })}
    </Fragment>
  );
};
export default Tour;
