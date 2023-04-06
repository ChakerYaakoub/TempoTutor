import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalVariales } from "../../UseContext";
// import PlayingPiano from "../../assets//piano.webp";
import appIcon from "../../assets/images/icons8-radio-waves-30.png";
import "./HomeSection1Component.css";
import videoHome from "../../assets/images/homePageVideo.mp4";
import { IsAuthenticated } from "../../isAuthenticatedFunction";

const HomeSection1Component = () => {
  const {
    openSignUpForm,
    setOpenSignUpForm,
    openForm,
    setOpenform,
    userFirstName,
    setUserFirstName,
    userLastName,
    setUserLastName,
  } = useContext(GlobalVariales);
  const navigate = useNavigate();
  const openingForm = () => {
    IsAuthenticated((data) => {
      if (data !== "Not authenticated") {
        navigate("/searchCours");
        setOpenform(false);
      } else {
        setOpenform(true);
        setOpenSignUpForm(true);
      }
    });
  };
  return (
    <>
      <div className="video-container">
        <video src={videoHome} type="video/mp4" autoPlay loop muted />
        <div className="titleApp">
          <p className="TempoTutorMusicLessonsParagraph">
            Unleash Your Inner Musician with TempoTutor. Master the rhythm and
            tempo with engaging online music lessons.
          </p>
          <p className="attractUserParag">
            Our interactive online courses will guide you through the
            fundamentals of art, helping you to unlock your creative potential
            and express yourself through your art.
          </p>
          <button className="startBtn" onClick={openingForm}>
            Let's Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeSection1Component;
