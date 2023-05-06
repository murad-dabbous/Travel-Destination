// import data from "../../data/db.json";
import Tour from "./tour/Tour";
import { Fragment } from "react";
// import { Link } from "react-router-dom";
const Tours = (props) => {
  return (
    <Fragment>
      {props.data.map((dataItem) => {
        return (
          <div key={dataItem.id}>
            <Tour
              image={dataItem.image}
              id={dataItem.id}
              name={dataItem.name}
            />
          </div>
        );
      })}
    </Fragment>
  );
};
export default Tours;
