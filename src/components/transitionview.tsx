import { ReactNode, useEffect, useState } from "react"
import styles from "./transitionview.module.css";
import { keyframes, styled } from "styled-components";

const Transitionview=(props:{children:ReactNode,idleEffect?:"rotate"|"zoom"|"movement",effect:"fade"|"zoom"|"slide"|"blink"})=>{

    const [scale,setScale]=useState(props.effect=="zoom"?0:1)
    const [opacity,setOpacity]=useState(props.effect=="fade"?0:1)

    const AnimatedBox =styled.div`
        animation: ${props.idleEffect=="rotate"?rotate:props.idleEffect=="movement"?movement:zoom} 3s infinite alternate;
    `;

    useEffect(()=>{
        setScale(1)
        setOpacity(1)
    },[])

    return(
      props.idleEffect
      ?
      <AnimatedBox style={{zIndex:5}}>{props.children}</AnimatedBox>
      :
      <div style={{opacity:opacity,transform:"scale("+scale+")",transition:"transform 0.5s",zIndex:10}}>{props.children}</div>
    )
}

const rotate = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(360deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

const zoom = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const movement=keyframes`
0% {
  transform: translateY(0);
}
50% {
    transform: translateY(10);
  }
100% {
    transform: translateY(0);
}
`;

export default Transitionview