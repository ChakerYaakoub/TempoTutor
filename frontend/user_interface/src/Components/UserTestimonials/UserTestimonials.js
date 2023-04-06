import "./UserTestimonials.css";

const UserTestimonials = (props) => {
  return (
    <>
      <div className="userTestiomnials">
        <div>
          <p className="reviewTitle">{props.reviewTitle}</p>
          <p>{props.review}</p>
        </div>
        <div className="userDivImg">
          <div className="userDiv">
            <img className="userImg" src={props.src} alt="logo" />
          </div>
          <p>{props.username}</p>
        </div>
      </div>
    </>
  );
};

export default UserTestimonials;
