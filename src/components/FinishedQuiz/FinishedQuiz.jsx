import React from "react";
import './FinishedQuiz.css'
const FinishedQuiz=props=>{
    return(
        <div className="FinishedQuiz">
            <ul>
                {props.quiz.map((question,index)=>{
                    return (
                        <li 
                        key={index}
                        >
                            <strong>{index+1}</strong>.&nbsp;
                        </li>
                    )
                })}

                {/* <li>
                    <strong>1. </strong>
                    Calc Math:10+0=
                    <i id="error" className='fa fa-times'></i>
                </li>
                <li>
                    <strong>2. </strong>
                    Calc Math:10+0=
                    <i id="success" className='fa fa-check'></i>
                </li> */}
            </ul>
            <p>True Answers 4 in 10</p>

            <div>
                <button>Reload</button>
            </div>
        </div>
    )
}

export default FinishedQuiz