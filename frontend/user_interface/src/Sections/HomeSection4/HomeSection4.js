import "./HomeSection4.css";
import userPfoto from "../../assets/images/user.png";
import { UserTestimonials } from "../../Components/index";
import Carousel from "react-elastic-carousel";
const HomeSection4 = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <div className="userTestiomnialsDivContent">
        <p className="userTestimonialsTitle">User testimonials </p>

        <Carousel breakPoints={breakPoints}>
          <UserTestimonials
            reviewTitle="A great, fresh and modern way to learn!"
            review="I have been playing musical instruments for over 45 years. I am
              interested in improving my guitar playing and purchased Yousician.
              This is a very novel approach to learning an instrument. The app,
              interface and methodology for following and learning is fresh."
            src={userPfoto}
            username="David K"
          />
          <UserTestimonials
            reviewTitle="A great, fresh and modern way to learn!"
            review="I have been playing musical instruments for over 45 years. I am
              interested in improving my guitar playing and purchased Yousician.
              This is a very novel approach to learning an instrument. The app,
              interface and methodology for following and learning is fresh."
            src={userPfoto}
            username="David K"
          />
          <UserTestimonials
            reviewTitle="A great, fresh and modern way to learn!"
            review="I have been playing musical instruments for over 45 years. I am
              interested in improving my guitar playing and purchased Yousician.
              This is a very novel approach to learning an instrument. The app,
              interface and methodology for following and learning is fresh."
            src={userPfoto}
            username="David K"
          />
          <UserTestimonials
            reviewTitle="A great, fresh and modern way to learn!"
            review="I have been playing musical instruments for over 45 years. I am
              interested in improving my guitar playing and purchased Yousician.
              This is a very novel approach to learning an instrument. The app,
              interface and methodology for following and learning is fresh."
            src={userPfoto}
            username="David K"
          />
          <UserTestimonials
            reviewTitle="A great, fresh and modern way to learn!"
            review="I have been playing musical instruments for over 45 years. I am
              interested in improving my guitar playing and purchased Yousician.
              This is a very novel approach to learning an instrument. The app,
              interface and methodology for following and learning is fresh."
            src={userPfoto}
            username="David K"
          />
          <UserTestimonials
            reviewTitle="A great, fresh and modern way to learn!"
            review="I have been playing musical instruments for over 45 years. I am
              interested in improving my guitar playing and purchased Yousician.
              This is a very novel approach to learning an instrument. The app,
              interface and methodology for following and learning is fresh."
            src={userPfoto}
            username="David K"
          />
        </Carousel>
      </div>
    </>
  );
};

export default HomeSection4;
