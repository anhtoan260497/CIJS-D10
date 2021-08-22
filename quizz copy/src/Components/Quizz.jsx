import React, { Component } from 'react';
import "../Components/Quizz.scss"

class Quizz extends Component {
    state = {
        answer: "a"
    }

    onChangeAnswer = e => {
        this.setState({ answer: e.target.value })
    }

    render() {
        let { question, a, b, c, d } = this.props.loadQuizz
        return (
            <div>
                <div className="quizz-container" onSubmit={(e) => this.props.onAnswer(e, this.state.answer)}>
                    <h2 style={{ marginTop: "20px", height: "20%", textAlign: "center" }}>{question}</h2>
                    <form className="form-container" >
                        <div className="answer">
                            <input onChange={e => this.onChangeAnswer(e)} type="radio" name="ans" value="a" />
                            <label htmlFor="a">{a}</label>
                        </div>
                        <div className="answer">
                            <input onChange={e => this.onChangeAnswer(e)} type="radio" name="ans" value="b" />
                            <label htmlFor="a">{b}</label>
                        </div>
                        <div className="answer">
                            <input onChange={e => this.onChangeAnswer(e)} type="radio" name="ans" value="c" />
                            <label htmlFor="a">{c}</label>
                        </div>
                        <div className="answer">
                            <input onChange={e => this.onChangeAnswer(e)} type="radio" name="ans" value="d" />
                            <label htmlFor="a">{d}</label>
                        </div>
                        <button className="submit" onClick={this.onChoose} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Quizz;