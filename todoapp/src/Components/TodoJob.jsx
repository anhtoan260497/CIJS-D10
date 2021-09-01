import React, { Component } from 'react';
class TodoJob extends Component {
    renderTodoJob = () => {
        return this.props.todoJob.map((el, idx) => {
            return (<div key={idx}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p onClick={(e) => this.props.onDoneJob(e,el.id)} style={{ cursor: "pointer",fontSize:"18px" }}>{el.title}</p>
                    <button onClick={() => this.props.onDeleteJob(el.id)} style={{ width: "60px", height: "30px", backgroundColor: "white", border: "1px solid blue", borderRadius: "10px" }}>Delete</button>
                </div>
                <div style={{ border: "1px solid rgba(171,165,164,20%)" }}>
                </div>
            </div>
            )
        })
    } // render cho Job không filter

    renderFilterJob = () => {
        return this.props.filterTodoJob.map((el, idx) => {
            return (<div key={idx}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p onClick={(e) => this.props.onDoneJob(e,el.id)} style={{ cursor: "pointer",fontSize:"18px" }}>{el.title}</p>
                    <button onClick={() => this.props.onDeleteJob(el.id)} style={{ width: "60px", height: "30px", backgroundColor: "white", border: "1px solid blue", borderRadius: "10px" }}>Delete</button>
                </div>
                <div style={{ border: "1px solid rgba(171,165,164,20%)" }}>
                </div>
            </div>
            )
        })
    } // render cho Filter 

    renderJob = () => {
        if(this.props.filter === "") {return this.renderTodoJob()} else {return this.renderFilterJob()}
    } // nếu filter bên components cha có kí tự thì render hàm cho filter, còn nếu là chuỗi rỗng thì render Job bình thường

    render() {
        return (
            <div>
                {this.renderJob()}
            </div>
        );
    }
}

export default TodoJob;