import "./UserProfileInfoComponent.css";
import { FaCartPlus } from "react-icons/fa";
import { FaUserCircle, FaCertificate } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { Link } from "react-router-dom";
const UserProfileInfoComponent = (props) => {
  return (
    <>
      <div className="eachUserInfo">
        <Link to={props.link} className="userInfoLink">
          <span className="iconUserInfo">{props.icon}</span>
          <p className="myParagInfo">{props.parag}</p>
        </Link>
      </div>
    </>
  );
};

export default UserProfileInfoComponent;
