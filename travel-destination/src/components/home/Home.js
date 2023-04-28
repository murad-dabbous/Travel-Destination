import { Fragment } from "react";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import data from "../../data/db.json";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Tours data={data} />
      <Footer />
    </Fragment>
  );
};
export default Home;
