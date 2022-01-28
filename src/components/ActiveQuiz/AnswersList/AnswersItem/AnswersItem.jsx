import React from 'react'
import './AnswersItem.css'

const AnswersItem=(props)=>{
    const cls=['AnswerItem']
    if(props.state){
        cls.push(props.state)
    }
    console.log(props)
    return(

    <li 
    className={cls.join('AnswerItem')}
    onClick={()=>props.onAnswerClick(props.answer.id)}> 
        {props.answer.text}
      
     
    </li>

    )
}

export default AnswersItem 