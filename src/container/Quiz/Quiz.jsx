import React,{Component} from 'react'
import  './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{

    state={
        activeQuestion:0,
        answerState:null, 
        quiz:[
            {   question:"Math Calculate: 3+3=",
                rightAnswerId:4,
                id:1,
                answers:[
                    {text:'Result: 2',id:1},
                    {text:'Result: 5',id:2},
                    {text:'Result: 8',id:3},
                    {text:'Result: 6',id:4},
                ]
            },
            {   question:"Math Calculate: 6*2=",
                rightAnswerId:2,
                id:2,
                answers:[
                    {text:'Result: 2',id:1},
                    {text:'Result: 12',id:2},
                    {text:'Result: 8',id:3},
                    {text:'Result: 9',id:4},
                    
                ]
            },
            {   question:"Math Calculate: 2+2=",
                rightAnswerId:1,
                id:3,
                answers:[
                    {text:'Result: 4',id:1},
                    {text:'Result: 5',id:2},
                    {text:'Result: 8',id:3},
                    {text:'Result: 9',id:4},
                    
                ]
            },
            {   question:"Math Calculate: 3:9=",
                rightAnswerId:3,
                id:4,
                answers:[
                    {text:'Result: 2',id:1},
                    {text:'Result: 5',id:2},
                    {text:'Result: 1/3',id:3},
                    {text:'Result: 9',id:4},
                    
                ]
            },
        ]
    }

onAnswerClickHandler=(answerId)=>{
// console.log("Answer:",answerId)



const question=this.state.quiz[this.state.activeQuestion] 

if(question.rightAnswerId===answerId){
    this.setState({
        answerState:{[answerId]:'success'}
    })
    const timeout=window.setTimeout(()=>{
        if(this.isQuizFinished() ){
            console.log("Finished");
        }
        else {
            this.setState({
                activeQuestion:this.state.activeQuestion+1,
                answerState:null
            })  
        }
        window.clearTimeout(timeout)
    },1000)

    
}
else{
    this.setState({
        answerState:{[answerId]:'error'}
    })
}

}
isQuizFinished(){
    return this.state.activeQuestion+1===this.state.quiz.length
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
    state={this.state.answerState}
/>
</div>
    
</div>
        )
         
    }
}

export default Quiz