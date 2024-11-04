import { getAllResponses } from "../firebaseconfig";
import { useEffect, useState } from "react";
import styles from "./responses.module.css";
import trump from '../images/vote/trump.png'
import kamala from '../images/vote/kamal.png'

export interface Request{
    requestStatus:"not_initiated" | "initiated",
    responseStatus:"recieved" | "not_recieved",
    haveAnIssue:boolean,
    issue:string,
    data:any
}

const Responses=()=>{

    const [data,setData]=useState<Request>({
        requestStatus:"initiated",
        responseStatus:"not_recieved",
        haveAnIssue:false,
        issue:"",
        data:undefined
    })

    useEffect(()=>{
        getAllResponses().then((data)=>setData({
            requestStatus:"initiated",
            responseStatus:"recieved",
            haveAnIssue:data==undefined?true:false,
            issue:"",
            data:data
        }))
    },[])

    return(
        <section className={styles.mainwrapper} id="home" data-scroll-to="home">
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    <p className={styles.title}>Responses</p>
                    <div className={styles.table_wrapper}>
                    {
                        data.responseStatus=="recieved"
                        ?
                            data.haveAnIssue
                            ?
                            <div>
                                <p style={{fontFamily:"var(--font-purejoy)"}} className={styles.subtitle}>Oops!</p>
                                <p className={styles.subtitle}>Something went wrong</p>
                            </div>
                            :
                                data.data.length==0
                                ?
                                <div>
                                    <p style={{fontFamily:"var(--font-purejoy)"}} className={styles.subtitle}>Oops!</p>
                                    <p className={styles.subtitle}>No responses found</p>
                                </div>
                                :
                                <div>
                                    <div className={styles.row_wrapper}>
                                        <p className={styles.subtitle}></p>
                                        <div  style={{flex:1,display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}>
                                            <p style={{fontFamily:"var(--font-purejoy)"}} className={styles.subtitle}>Vote</p>
                                        </div>
                                        <div  style={{flex:1,display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}>
                                            <p style={{fontFamily:"var(--font-purejoy)"}} className={styles.subtitle}>Comment</p>
                                        </div>
                                    </div>
                                {
                                    data.data.map((item:{id:string,data:{Vote:string,Comment:string}},i:number)=>
                                    <div  className={styles.row_wrapper}>
                                        <p className={styles.subtitle}>{i+1}</p>
                                        <div  style={{flex:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"10px"}}>
                                            {/* <p className={styles.subtitle}>{item.data.Vote}</p> */}
                                            <img src={item.data.Vote=="Kamala Harris"?kamala:trump} className={styles.face_option}/>
                                        </div>
                                        <div  style={{flex:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"10px"}}>
                                            <p className={styles.subtitle}>{item.data.Comment}</p>
                                        </div>
                                    </div>
                                    )
                                }
                                </div>
                        :
                        <p>Fetching data...</p>
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Responses