import data from "../../data/db.json";
import Tour from "./tour/Tour";
const Tours = () => {
  return <Tour data={data} />;
};
export default Tours;
