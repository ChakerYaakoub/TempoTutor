import React from 'react'
import "./CoursPrincipale.css"
import { AddFav, AddToCartIcon } from "../../Components/index";



const CoursPrincipale = ({ data }) => {

    const imageCover = `http://localhost:3000/${data.mainCover}`
    const encodedUrl1 = imageCover.replace(/\\/g, '/');
    const encodedUrl = encodeURI(imageCover); // Encodes the URL

    return (


        <>
            <div className='background' style={{
                backgroundImage: `url(${encodedUrl1})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>

                <div className='header'>
                    <h2>PREMIUM COURSE</h2>
                    <h1>{data.courseName}</h1>
                    <p>{data.briefDescription}</p>
                    <button className='subscribe'>{data.price}$</button>
                    <div className='bar'>
                        <div className='flex'>
                            <div className='minute'><i className="fa-solid fa-clock"></i><span> {data.duration}</span></div>
                            <div className='section'><i className="fa-solid fa-bars"></i><span> {data.sectionNb} Section</span></div>
                        </div>
                        <div className='flex'>
                            <div className='minute felxFavoritesCart'>
                                <span className='felxFavoritesCart1'>  <AddFav id={data._id} />  </span>
                                <span className='felxFavoritesCart2'>Add To Favorites</span>
                            </div>
                            <div className='section felxFavoritesCart'>
                            <span className='felxFavoritesCart1'> <AddToCartIcon iconId={data._id} /> </span>
                                <span className='felxFavoritesCart2'>Add To Cart</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='about'>
                <div className='paragrapheContent'>
                    <h2> Description : </h2>
                    <p> {data.description}</p>
                </div>
                <div className='gitarImg'>
                    <img src={`http://localhost:3000/${data.secondCover}`} alt='' ></img>
                </div>
            </div>


            <div className='video'>
                <video className='videoPlay' controls>
                    <source src={`http://localhost:3000/${data.courseIntroVideos}`} type="video/mp4" />
                </video>
            </div>


            <hr></hr>
            <div className='teach'>
                <div className='picP'>
                    <img src={`http://localhost:3000/${data.courseInstructor.profilePicture}`} alt={data.instructorName} width='200px' height='200px'></img>
                </div>
                <div className='news'>
                    <h3>{data.instructorName}</h3>
                    <h4>{data.courseInstructor.instruments.map((instrument) => (
                        <span key={instrument}>
                            <i className='fa-solid fa-play' style={{ paddingLeft: "10px",paddingRight:'4px'}}></i>  
                            {instrument}
                        </span>
                    ))}</h4>
                    <p>{data.courseInstructor.about}</p>
                </div>
            </div>







        </>

    )
}

export default CoursPrincipale