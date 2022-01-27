import React from 'react'
import './AnswersItem.css'

const AnswersItem=(props)=>{
    console.log(props)
    return(

    <li 
    className='AnswerItem'
    onClick={()=>props.onAnswerClick(props.answer.id)}> 
        {props.answer.text}
      
     
    </li>

    )
}

export default AnswersItem 