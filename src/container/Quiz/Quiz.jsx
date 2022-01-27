import React,{Component} from 'react'
import  './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{

    state={
        quiz:[
            {   question:"Math Calculate: 3+3=",
                rightAnswerId:4,
                answers:[
                    {text:'Result: 2',id:1},
                    {text:'Result: 5',id:2},
                    {text:'Result: 8',id:3},
                    {text:'Result: 9',id:4},
                ]
            },
            {
                answers:[
                    {text:'Question1 1',full_text:'lorem lorem lorem lorem3'},
                    {text:'Question1 1',full_text:'lorem lorem lorem lorem3'},
                    {text:'Question1 1',full_text:'lorem lorem lorem lorem3'},
                    {text:'Question1 1',full_text:'lorem lorem lorem lorem3'},
                    
                ]
            },
        ]
    }

onAnswerClickHandler=(answerId)=>{
console.log("Answer:",answerId)
}

    render(){
        return(
<div className='Quiz'>



<div className='QuizWrapper'>
<h1>Answer all Question</h1>
<ActiveQuiz
    answers={this.state.quiz[0].answers} question={this.state.quiz[0].question}
    onAnswerClick={this.onAnswerClickHandler}
/>
</div>

</div>
        )
         
    }
}

export default Quiz