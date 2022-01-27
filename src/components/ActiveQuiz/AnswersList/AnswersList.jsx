import React from "react";
import AnswersItem from "./AnswersItem/AnswersItem";
import './AnswersList.css'

const AnswersList=props=>(
            <ul className="AnswersList">
                {props.answers.map((answer,index)=>{
                    
return( <AnswersItem 
        key={index}
        answer={answer}
        onAnswerClick={props.onAnswerClick}
        />)
                })}
            </ul>
)

export default AnswersList


