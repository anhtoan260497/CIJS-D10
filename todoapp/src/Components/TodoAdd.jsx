import React, { Component } from 'react';

class TodoAdd extends Component {
    render() {
        return (
            <div className="add-filter">
                <form className="form-add" onSubmit={e => this.props.onAddJob(e)}>
                    <input onChange={e => this.props.onChangeTodoJob(e)} value={this.props.add} placeholder="Add Job" name ="add" className="add" type="text"/>
                    <button type="submit" style={{ width: "60px", height: "40px", backgroundColor: "white", border: "1px solid blue", borderRadius: "10px" }}>Add</button>
                </form>
            </div>
        );
    }
}

export default TodoAdd; 