import "./HomePageParagraph.css";
const HomePageParagraph = (props) => {
  return (
    <>
      <div className="iconPara">
        <span className="musicIcon">{props.icon}</span>
        <p>{props.paragraph}</p>
      </div>
    </>
  );
};

export default HomePageParagraph;
