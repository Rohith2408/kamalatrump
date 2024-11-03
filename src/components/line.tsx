const Line=(props:{width:number|string,height:number|string})=>{
    return(
        <div style={{width:props.width,height:props.height,borderRadius:10,backgroundColor:"white"}}/>
    )
}

export default Line