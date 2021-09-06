import React, { Component } from 'react';
import Quizz from './Quizz';
import Result from './Result';

class QuizzApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizData: [{
                question: "Which language runs in a web browser?",
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript",
                correct: "d",
            },
            {
                question: "What does CSS stand for?",
                a: "Central Style Sheets",
                b: "Cascading Style Sheets",
                c: "Cascading Simple Sheets",
                d: "Cars SUVs Sailboats",
                correct: "b",
            },
            {
                question: "What does HTML stand for?",
                a: "Hypertext Markup Language",
                b: "Hypertext Markdown Language",
                c: "Hyperloop Machine Language",
                d: "Helicopters Terminals Motorboats Lamborginis",
                correct: "a",
            },
            {
                question: "What year was JavaScript launched?",
                a: "1996",
                b: "1995",
                c: "1994",
                d: "none of the above",
                correct: "b",
            }
            ],
            currentQuizz: 0,
            rightAnswer:0
        }

    }

    renderQuizz = () =>{
        return <Quizz loadQuizz={this.state.quizData[this.state.currentQuizz]} onAnswer={this.onAnswer} />
    }

    renderResult = () =>{
        return <Result totalQuestion={this.state.quizData.length} rightAnswer={this.state.rightAnswer} onReload={this.onReload} />
    }

    renderAll = () =>{
        if(this.state.currentQuizz > 3){ return this.renderResult()} else { return this.renderQuizz()}
    }

    onReload = () => {
        this.setState({currentQuizz:0 , rightAnswer:0})
    }

    onAnswer = (e,answer) => {
        e.preventDefault()
        if(this.state.currentQuizz <= 3) {this.setState({currentQuizz: this.state.currentQuizz+1})} else 
        {this.setState({currentQuizz: 0})}
        if(answer === this.state.quizData[this.state.currentQuizz].correct) 
        {this.setState({rightAnswer:this.state.rightAnswer+1})} 
    }

    render() {
        return (
            <div>
                {this.renderAll()}
            </div>
        );
    }
}

export default QuizzApp;