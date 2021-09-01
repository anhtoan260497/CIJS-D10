import React, { Component } from 'react';
import "../Components/Quizz.scss"

class Result extends Component {
    render() {
        return (
            <div className="result">
                <div>
                    <h3 style={{marginTop:"50px"}}>Your answered {this.props.rightAnswer}/{this.props.totalQuestion} question correctly </h3>
                </div>
                <button className="reload" onClick={this.props.onReload}>Reload</button>
            </div>
        );
    }
}

export default Result;