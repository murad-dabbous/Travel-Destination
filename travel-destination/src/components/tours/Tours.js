// import data from "../../data/db.json";
import { Fragment } from "react";
const Tours = (props) => {
  return (
    <Fragment>
      {props.data.map((dataItem) => {
        return (
          <div key={dataItem.id}>
            <p>{dataItem.name}</p>
            <img src={dataItem.image} alt={dataItem.name} />
            <hr />
          </div>
        );
      })}
    </Fragment>
  );
};
export default Tours;
