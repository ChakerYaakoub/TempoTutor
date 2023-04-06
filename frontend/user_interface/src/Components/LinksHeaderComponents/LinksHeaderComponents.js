import "./LinksHeaderComponents.css";
import { Link } from "react-router-dom";
const LinksHeaderComponents = (props) => {
  return (
    <>
      <li>
        <Link to={props.link}> {props.myLink}</Link>
      </li>
    </>
  );
};

export default LinksHeaderComponents;
