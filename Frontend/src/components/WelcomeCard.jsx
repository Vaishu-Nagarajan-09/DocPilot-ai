import React, { useEffect, useRef } from "react";

const WelcomeCard = ({answers}) => {

    const answerBoxRef = useRef(null);

    useEffect(()=>{
        if(answerBoxRef.current){
        answerBoxRef.current.scrollTop = answerBoxRef.current.scrollHeight;
        }
    },[answers])


    return(
       <>
       <div className="card ai-cd mt-4">
        <div  
        ref={answerBoxRef}
        style={{
            height: "150px",
            overflow: "auto",
            padding: "15px",
            color: "white"
        }}
        >
            {answers.map((data, index) =>(
                <p key={index}>
                    {data}
                </p>
            ))}
        </div>
        
       </div>
       </> 
    )
}

export default WelcomeCard;