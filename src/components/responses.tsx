import { getAllResponses } from "../firebaseconfig";
import { useEffect } from "react";

const Responses=()=>{

    useEffect(()=>{
        getAllResponses()
    },[])

    return(
        <div><p>Responses</p></div>
    )
}

export default Responses