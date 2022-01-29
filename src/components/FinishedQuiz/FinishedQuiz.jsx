import React from "react";
import './FinishedQuiz.css'
const FinishedQuiz=props=>{
    const successCount=Object.keys(props.results).reduce((total,key)=>{
        if(props.results[key]==='success'){
            total++
        }
        return total
    },0)
    return(
        <div className="FinishedQuiz">
            <ul>
                {props.quiz.map((quizItem,index)=>{
                    const cls=[
                        'fa',
                        props.results[quizItem.id]==='error' ? 'fa-times':'fa-check',
                        [props.results[quizItem.id]]
                    ]
                    return (
                        <li 
                        key={index}
                        >
                            <strong>{index+1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}></i>
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
            <p>True Answers {successCount} in {props.quiz.length}</p>

            <div>
                <button onClick={props.onRetry}>ReLoad</button>
            </div>
        </div>
    )
}

export default FinishedQuiz