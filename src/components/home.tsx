import styles from "./home.module.css";
import { useEffect, useRef, useState } from "react";
import flag from '../images/home/flag.png'
import star from '../images/home/star.png'
//import telegram_icon from '../images/Section1/telegram.png'
//import twitter_icon from '../images/Section1/twitter.png'
//import dex_icon from '../images/Section1/dex.png'
//import coingecko_icon from '../images/Section1/coingecko.png'
// import sunswap_icon from '../images/Section1/sunswap.jpeg'
// import dextools_icon from '../images/Section1/dextools.png'
// import copy_icon from '../images/Section1/copy.png'
// import image from '../images/Section1/image.png'
// import banner from '../images/banner.gif'
// import insta_icon from '../images/Section1/instagram.png'
import Line from "./line";

const Home=()=>{

    const socialIcons= useRef([
        // { src: telegram_icon, link: "" },
        // { src: twitter_icon, link: "" },
        // { src:dex_icon, link: "" },
        // { src: dextools_icon, link: "" },
        // { src:coingecko_icon, link: "" },
        // { src:insta_icon, link: "" }
    ]).current
    const ca=useRef("").current

    return(
        <section className={styles.mainwrapper} id="home" data-scroll-to="home">
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    <div className={styles.date_wrapper}>
                        <img src={star} className={styles.star}/>
                        <p className={styles.date}>2024</p>
                        <img src={star} className={styles.star}/>
                    </div>
                    <Line width={"70%"} height={7.5}/>
                    <p className={styles.title}>Election Showdown</p>
                    <Line width={"70%"} height={7.5}/>
                    <p className={styles.subtitle}>“ Two Candidates, One Stage: May the Best Tweet Win! ”</p>
                </div>
                <img src={flag} className={styles.flag1}/>
                <img src={flag} className={styles.flag2}/>
            </div>
        </section>
    )
}

{/* <section className={styles.mainwrapper} id="home" data-scroll-to="home">
    <div className={styles.subwrapper}>
        <div className={styles.body}>
            <p className={styles.title}>$Blaze</p>
            <div className={styles.socialWrapper}>
            {
                socialIcons.map((icon) => (
                    <a key={icon.src} href={icon.link} target="_blank" rel="noopener noreferrer" >
                        <img
                            className={styles.socialicons}
                            loading="lazy"
                            alt=""
                            src={icon.src}
                        />
                    </a>
                ))}
            </div>
            <div className={styles.cawrapper}>
                <p className={styles.caHeading}>CA</p>
                <p className={styles.ca} >{ca}</p>
                <button className={styles.copyWrapper} onClick={()=>{alert("CA has been copied");navigator.clipboard.writeText(ca)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
            </div>
        </div>
        <img className={styles.penguin}/>
    </div>
</section> */}

export default Home