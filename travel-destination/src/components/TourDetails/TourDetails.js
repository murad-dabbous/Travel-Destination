import { useParams } from "react-router-dom";
import { useState, Fragment } from "react";
const TourDetails = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const param = useParams();
  console.log(param);
  const showContentHandler = (param) => {};
  return (
    <Fragment>
      {props.data.map((dataItem) => {
        return (
          <div key={dataItem.id}>
            <p>{dataItem.name}</p>
            <p>{dataItem.info}</p>
            <img src={dataItem.image} alt={dataItem.name} />
            <p>{dataItem.price}</p>
            <button onClick={showContentHandler}>
              {!showMore && "show more" && "show less"}
            </button>
            <hr />
          </div>
        );
      })}
    </Fragment>
  );
};
export default TourDetails;
