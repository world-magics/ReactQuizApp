import React,{Component} from 'react'
import  './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component{

    state={
        results:{}, // {[id]:success error}
        isFinished:true,
        activeQuestion:0,
        answerState:null, //{[id]:'success','error'}
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

if(this.this.state.answerState){
    const key=Object.keys(this.state.answerState)[0]
    if(this.state.answerState[key]==='success'){
        return 
    }
}


const question=this.state.quiz[this.state.activeQuestion] 
const results=this.state.results

if(question.rightAnswerId===answerId){
    if(!results[answerId]){
        results[answerId]='success'
    } 
    this.setState({
        answerState:{[answerId]:'success'},
        results
    })
    const timeout=window.setTimeout(()=>{
        if(this.isQuizFinished() ){
            this.setState({
                isFinished:true
            })
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
    results[answerId]='error'
    this.setState({
        answerState:{[answerId]:'error'},
        results:results
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
{
    this.state.isFinished
    ?<FinishedQuiz
     results={this.state.results}
     quiz={this.state.quiz}
    /> 
    :<ActiveQuiz
    answers={this.state.quiz[this.state.activeQuestion].answers} 
    question={this.state.quiz[this.state.activeQuestion].question}
    onAnswerClick={this.onAnswerClickHandler}
    quizLength={this.state.quiz.length}
    answerNumber={this.state.activeQuestion+1}
    state={this.state.answerState}
/>
}

</div>
    
</div>
        )
         
    }
}

export default Quiz