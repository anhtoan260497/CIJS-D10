import React, { Component, Fragment } from 'react';

class Ingredient extends Component {
    onLessButtonRender = () =>{
        if(this.props.quantity > 0) { return (<button onClick={()=>this.props.onLessButton(this.props.name)} style={{ backgroundColor: "brown" }}>Less</button>)} 
        else 
        { return (<button onClick={()=>this.props.onLessButton(this.props.name)} style={{ backgroundColor: "brown" }} disabled>Less</button>)}
    }

    onAddButtonRender = () =>{
        return (<button onClick ={()=>this.props.onAddButton(this.props.name)} style={{ backgroundColor: "orange" }}>More</button>)
    }

    render() {
            // console.log(this.props.unit)
            // console.log(this.props.quantity)
        return (
            <Fragment>
               <div className="ire mb-3">
                <h5 style={{ width: "20px", position: "relative", left: "-10px" }}>{this.props.name}</h5>
                <div className="button">
                    {/* <button onClick={()=>this.props.onLessButton(this.props.name)} style={{ backgroundColor: "brown" }}>Less</button> */}
                    {this.onLessButtonRender()}
                    {this.onAddButtonRender()}
                </div>
                <p style={{ position: "relative", right: "15px" }}>{this.props.unit}</p>
                <p style={{ position: "relative", left: "40px" }}>{this.props.unit*this.props.quantity}</p>
            </div>
            </Fragment>
        );
    }
}

export default Ingredient;