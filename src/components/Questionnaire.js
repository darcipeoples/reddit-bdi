import React, { Component } from 'react';
import '../App.css';
import { BDI } from '../data/BDI.js';

class Questionnaire extends Component {
    constructor(props) {
        super(props)
    }

    calculateScore = () => {
        let num_selected = this.props.selections.filter(value => value !== undefined).length;
        let score = this.props.selections.map((choice) => { 
            return choice === undefined ? 0 : parseInt(choice.charAt(0))
        }).reduce((a,v) => a=a+v, 0);
        return num_selected === 0 ? undefined : score
    }

    calculatePercent = () => {
        let num_selected = this.props.selections.filter(value => value !== undefined).length;
        return Math.round(num_selected/21.0*100)
    }

    render () {
        if (this.props.currPage !== "Questionnaire") {
            return <></>
        }

        let score = this.calculateScore()
        let percent = this.calculatePercent()

        return (
            <>
            <h1>Beck's Depression Inventory (BDI)</h1>
            <h2>Instructions:</h2>
            <p>{BDI.instructions}</p>
            <div className="row row-cols-3">
                {BDI.questions.map((item, i) => {
                    let qid = ''+i
                    let choices = item.choices.map((choice, j) => {
                        let cid = choice.variant === undefined ? ''+choice.value : choice.value+choice.variant
                        let uid = qid+"_"+cid
                        return (
                            <div className="form-check" key={uid}>
                                <input className="form-check-input" type="radio" id={uid} name={qid} value={cid} checked={this.props.selections[i]===cid} onChange={this.props.handleChange}></input>
                                <label className="form-check-label" htmlFor={uid}>{cid+". "+choice.text}</label>
                            </div>
                        )
                    });
                    return (
                            <div className="col" key={qid}>
                                <div className="col-sm">
                                    <h4>{(i+1)+". "+item.topic}</h4>
                                    {choices}
                                    <br />
                                </div>
                            </div>
                        )
                })}
            </div>
                <div className="progress fixed-top" style={{marginTop: "55px"}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: (+percent+'%')}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">{percent}%</div>
                </div>
                <div className="input-group">
                    <button className="btn btn-outline-danger ml-2" onClick={this.props.clearSelections}>Clear</button>
                    <button className="btn btn-outline-dark ml-2" onClick={this.props.quickFill}>Quick Fill</button>
                </div>
                <br /> <br /> <h4>BDI Score: {score === undefined ? "-" : score}/63</h4>
                <ul className="list-group">
                    <li className={`list-group-item ${score >= 0 && score <= 9 ? "font-weight-bold list-group-item" : "text"}-primary`}>Minimal depression (0-9)</li>
                    <li className={`list-group-item ${score >= 10 && score <= 18 ? "font-weight-bold list-group-item" : "text"}-info`}>Mild depression (10-18)</li>
                    <li className={`list-group-item ${score >= 19 && score <= 29 ? "font-weight-bold list-group-item" : "text"}-warning`}>Moderate depression (19-29)</li>
                    <li className={`list-group-item ${score >= 30 && score <= 63 ? "font-weight-bold list-group-item" : "text"}-danger`}>Severe depression (30-63)</li>
                </ul>
            </>
            
        )
    }
}

export default Questionnaire;