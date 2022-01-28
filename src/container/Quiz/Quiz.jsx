import React,{Component} from 'react'
import  './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{

    state={
        activeQuestion:0,
        quiz:[
            {   question:"Math Calculate: 3+3=",
                rightAnswerId:4,
                id:1,
                answers:[
                    {text:'Result: 2',id:1},
                    {text:'Result: 5',id:2},
                    {text:'Result: 8',id:3},
                    {text:'Result: 9',id:4},
                ]
            },
            {   question:"Math Calculate: 8*2=",
                rightAnswerId:2,
                id:2,
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

this.setState({
    activeQuestion:this.state.activeQuestion+1
})
}

    render(){
        return(
<div className='Quiz'>



<div className='QuizWrapper'>
<h1>Answer all Question</h1>
<ActiveQuiz
    answers={this.state.quiz[this.state.activeQuestion].answers} 
    question={this.state.quiz[this.state.activeQuestion].question}
    onAnswerClick={this.onAnswerClickHandler}
    quizLength={this.state.quiz.length}
    answerNumber={this.state.activeQuestion+1}
/>
</div>
    
</div>
        )
         
    }
}

export default Quiz