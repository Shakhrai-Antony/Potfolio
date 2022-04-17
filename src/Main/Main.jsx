import React from "react";
import s from './Main.module.css'
import camera from './../img/camera 1.png'
import video from './../img/video 1.png'
import image from './../img/image 1.png'
import mic from './../img/mic 1.png'
import portfolioImg from './../img/portfolio-img.png'
import portfolioImg1 from './../img/portfolio-img (1).png'
import portfolioImg2 from './../img/portfolio-img (2).png'
import portfolioImg3 from './../img/portfolio-img (3).png'
import portfolioImg4 from './../img/portfolio-img (4).png'
import portfolioImg5 from './../img/portfolio-img (5).png'
import {Video} from "./Video";

export const Main = () => {
    const porfolioImg = [portfolioImg,portfolioImg1,portfolioImg2,portfolioImg3,portfolioImg4,portfolioImg5]
    const portfolioPictures = porfolioImg.map((item) => <img src={item} alt=""/>)
    return (
        <main>
            <section className={s.containerHero}>
                <div className={s.alexaRise}>
                    <div>
                        <h3>
                            Alexa Rise
                        </h3>
                        <p>
                            Save sincere emotions, romantic feelings and happy moments of life together with
                            professional photographer Alexa Rise
                        </p>
                        <button>
                            Hire me
                        </button>
                    </div>
                </div>
            </section>
            <section className={s.containerSkills}>
                <div className={s.skills}>
                    <h3>Skills</h3>
                </div>
                <div className={s.skillsIcons}>
                    <div>
                        <img src={camera} alt=""/>
                        <p>Digital photography</p>
                        <p>High-quality photos in this studio and on the nature</p>
                    </div>
                    <div>
                        <img src={video} alt=""/>
                        <p>Video shooting</p>
                        <p>Capture your moments so that always stay with you </p>
                    </div>
                    <div>
                        <img src={image} alt=""/>
                        <p>Retouch</p>
                        <p>I strive to make photography surpass reality</p>
                    </div>
                    <div>
                        <img src={mic} alt=""/>
                        <p>Audio</p>
                        <p>Professional sounds recording for video, advertising, portfolio</p>
                    </div>
                </div>
            </section>
            <section className={s.containerPortfolio}>
                <div className={s.portfolio}>
                    <h3>Portfolio</h3>
                </div>
                <div className={s.portfolioBtns}>
                    <button>Winter</button>
                    <button>Spring</button>
                    <button>Summer</button>
                    <button>Autumn</button>
                </div>
                <div className={s.portfolioPictures}>
                    {portfolioPictures}
                </div>
            </section>
            <section className={s.containerVideo}>
                <div className={s.video}>
                    <h3>Video</h3>
                </div>
                <div className={s.videoContent}>
                    <Video/>
                </div>
            </section>
            <section className={s.containerPrice}>
                <div className={s.price}>
                    <h3>Price</h3>
                </div>
                <div className={s.priceCategories}>
                    <div>
                        <h4>Standard</h4>
                        <p>500 $</p>
                        <p>One location</p>
                        <p>120 photos in color</p>
                        <p>12 photos in retouch</p>
                        <p>Readiness 2-3 weeks</p>
                        <p>Make up, visage</p>
                        <button>Order shooting</button>
                    </div>
                    <div>
                        <h4>Premium</h4>
                        <p>700 $</p>
                        <p>One or two location</p>
                        <p>200 photos in color</p>
                        <p>20 photos in retouch</p>
                        <p>Readiness 1-2 weeks</p>
                        <p>Make up, visage</p>
                        <button>Order shooting</button>
                    </div>
                    <div>
                        <h4>Gold</h4>
                        <p>1000 $</p>
                        <p>Three locations or more</p>
                        <p>300 photos in color</p>
                        <p>50 photos in retouch</p>
                        <p>Readiness 1 week</p>
                        <p>Make up, visage, hairstyle</p>
                        <button>Order shooting</button>
                    </div>
                </div>
            </section>
            <section className={s.containerContacts}>
                <div className={s.contactsBack}>
                    <div>
                        <h3>Contact me</h3>
                        <form>
                            <input placeholder="E-mail"/>
                            <input placeholder="Phone"/>
                            <input placeholder="Message"/>
                        </form>
                        <button>Send message</button>
                    </div>
                </div>
            </section>
        </main>
    )
}