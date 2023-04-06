import "./HomeSection2.css";
import PlayingPiano from "../../assets//piano.webp";
const HomeSection2 = () => {
  return (
    <>
      <div className="AppInfo">
        <p>
          Welcome to Tempotutor, the personalized music learning app for all
          instruments and genres. We understand that every musician has their
          own learning style, which is why we offer a range of learning tools to
          help you master your instrument and perfect your timing. Our platform
          features video tutorials, interactive sheet music, and metronome
          exercises that are tailored to your needs and preferences. Whether
          you're a beginner or an experienced musician, our app lets you start
          learning at any skill level and progress at your own pace. Plus, you
          can play on a real instrument without any additional accessories –
          just your instrument and your passion for music. With Tempotutor, you
          can improve your skills, achieve your goals, and play your way. So why
          wait? Join the millions of musicians who have already discovered the
          power of Tempotutor. Start your free trial today and experience the
          best way to learn and play music your way.
        </p>
        <div className="imgPianoDiv">
          <img className="imgPiano" src={PlayingPiano} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default HomeSection2;
