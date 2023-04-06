import "./HomeSection3.css";
import { HomePageParagraph } from "../../Components/index";
import { FaMusic, FaGuitar } from "react-icons/fa";
import { GiMusicalNotes, GiGrandPiano } from "react-icons/gi";

const HomeSection3 = () => {
  return (
    <>
      <div className="advice">
        <HomePageParagraph
          icon={<GiMusicalNotes />}
          paragraph="Master your instrument and achieve your musical goals with ease
            using Tempotutor. Learn all the skills you need with our
            comprehensive lessons, including basic techniques and advanced
            theory."
        />
        <HomePageParagraph
          icon={<GiGrandPiano />}
          paragraph="Get real-time feedback and improve your skills as you play your
          favorite songs and exercises. Our advanced technology provides
          personalized guidance on timing, accuracy, and other essential
          elements, helping you become the musician you've always wanted to
          be."
        />
        <HomePageParagraph
          icon={<FaGuitar />}
          paragraph="Discover new songs and lessons with our constantly growing library.
          No matter your skill level, No matter your skill level, start your
          journey today and discover the power of Tempotutor."
        />
      </div>
    </>
  );
};

export default HomeSection3;
