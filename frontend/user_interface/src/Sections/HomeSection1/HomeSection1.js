// import { HomeSection1Component } from "../../Components/index";
import { HomeSection1Component } from "../../Components/index";

import "./HomeSection1.css";

const HomeSection1 = () => {
  return (
    <>
      <div className="desktop">
        <HomeSection1Component />
      </div>
      <div className="smallScreen">
        <HomeSection1Component />
      </div>
    </>
  );
};

export default HomeSection1;
