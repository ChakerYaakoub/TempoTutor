import React from 'react'
import './About.css'
import videoAbout from "../../assets/images/videoPiano.mp4"
import souzanPicutre from '../../assets/souzan.jpg'
import rwanPicutre from '../../assets/rwan.jpg'
import chakerPicutre from '../../assets/chaker.jpg'
const About = () => {
  return (
    <div className="mymyContainer">
            <div className="mymyFlex">
                <div className="mymyDivAndParaghraphe">
                    <h1 className="myTxt">About Us</h1>
                    <p className="myBigTxt">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="MyBigImg ">
                    {/*<img className="mymyImg" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />*/}
                      <video className="mymyImg" autoPlay controls loop><source  src={videoAbout} type="video/mp4" ></source></video>
                </div>
            </div>

            <div className="mymySecondDiv">
                <div className="mymysecondTxt">
                    <h1 className="mySecondtxt">Our Story</h1>
                    <p className="mysecondBigText">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="mymyDivWithBoxShdow">
                    <div className="myContent">
                        <div className="mysecondBigText">
                            <img className="myFirstImg" src={souzanPicutre} alt="souzan featured Img" />
                            <img className="mySecondImg" src={souzanPicutre} alt="souzan featured Img" />
                            <p className="myName">Souzan</p>
                        </div>
                        <div className="mysecondBigText">
                            <img className="myFirstImg" src={rwanPicutre} alt="rawan featured Img" />
                            <img className="mySecondImg" src={rwanPicutre} alt="rwan featured Img" />
                            <p className="myName">Rawan</p>
                        </div>
                        <div className="mysecondBigText">
                            <img className="myFirstImg" src={chakerPicutre} alt="chaker featued Img" />
                            <img className="mySecondImg" src={chakerPicutre} alt="chaker featued Img" />
                            <p className="myName">Chaker</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About