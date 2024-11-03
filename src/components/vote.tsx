import styles from "./vote.module.css";
import { useEffect, useRef, useState } from "react";
import flag from '../images/home/flag.png'
import star from '../images/home/star.png'
import trump from '../images/vote/trump.png'
import kamala from '../images/vote/kamal.png'
import vs from '../images/vote/vs.png'
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
import Transitionview from "./transitionview";
import { google } from "googleapis";
import { db, collection, addDoc } from '../firebaseconfig';

const Vote=()=>{

    const socialIcons= useRef([
        // { src: telegram_icon, link: "" },
        // { src: twitter_icon, link: "" },
        // { src:dex_icon, link: "" },
        // { src: dextools_icon, link: "" },
        // { src:coingecko_icon, link: "" },
        // { src:insta_icon, link: "" }
    ]).current
    const ca=useRef("").current
    const [showPopup,setShowPopup]=useState(false);
    const [data,setData]=useState<{vote?:"Kamala Harris"|"Donald Trump"|undefined,comment?:string}>()
    const [voted,setVoted]=useState(false);

    const submitVote=async ()=>{
        await appendData()
        setShowPopup(false)
        setData(undefined)
        setVoted(true)
    }

    const appendData = async () => {
        console.log("dasta being sent",{
            vote:data?.vote,
            comment:data?.comment?data.comment:""
        })
        try {
            const docRef = await addDoc(collection(db, "Votes"), {
                Vote:data?.vote,
                Comment:data?.comment?data.comment:""
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return(
        <section className={styles.mainwrapper} id="vote" data-scroll-to="vote">
            <div className={styles.subwrapper}>
                {
                    showPopup
                    ?

                    <Transitionview effect="zoom">
                        <div className={styles.popup_wrapper}>
                            <div style={{flexDirection:"column",gap:10}}>
                                <div className={styles.face_options_wrapper}>
                                    <button onClick={()=>setData({...data,vote:"Donald Trump"})} style={{border:"none",backgroundColor:"transparent"}}><img src={trump} style={{opacity:(data?.vote && data.vote=="Donald Trump")?1:0.5}} className={styles.face_option}/></button>
                                    <button onClick={()=>setData({...data,vote:"Kamala Harris"})} style={{border:"none",backgroundColor:"transparent"}}><img src={kamala} style={{opacity:(data?.vote && data.vote=="Kamala Harris")?1:0.5}} className={styles.face_option}/></button>
                                </div>
                            </div>
                            <input onChange={(e)=>setData({...data,comment:e.target.value})} className={styles.comment} style={{flex:1,padding:"10px"}} placeholder="Comments...."/>
                            {
                                data && data.vote
                                ?
                                <Transitionview effect="zoom">
                                    <div className={styles.submit_wrapper}>
                                        <button onClick={submitVote} style={{border:"none",backgroundColor:"transparent"}}><p className={styles.submit}>Submit</p></button>
                                    </div>
                                </Transitionview>
                                :
                                null
                            }
                        </div>
                    </Transitionview>
                    :
                    null
                }
                <div className={styles.body}>
                    <div className={styles.title_wrapper}>
                        <Line width={"130%"} height={7.5}/>
                        <p className={styles.title}>Vote</p>
                        <Line width={"130%"} height={7.5}/>
                    </div>
                    <p className={styles.subtitle}>“ Your Voice, Your Vote, Your Future! ”</p>
                    <div className={styles.faces_wrapper}>
                        <Transitionview effect="zoom" idleEffect="rotate"><img src={trump} className={styles.face}/></Transitionview>
                        <img src={vs} className={styles.vs}/>
                        <Transitionview effect="zoom" idleEffect="rotate"><img src={kamala} className={styles.face}/></Transitionview>
                    </div>
                    <div className={styles.cast_vote_wrapper}>
                        <button onClick={()=>!voted?setShowPopup(true):false} style={{border:"none",backgroundColor:"transparent"}}><p className={styles.cast_vote}>{voted?"Vote Registered":"Cast Vote"}</p></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Face=()=>{

}

export default Vote