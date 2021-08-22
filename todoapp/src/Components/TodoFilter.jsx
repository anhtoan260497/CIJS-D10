import React, { Component } from 'react';

class TodoFilter extends Component {




    render() {
        return (
            <div className="todo-filter">
                <form className="form-filter" onSubmit={e => this.props.onClearFilter(e)}>
                    <input placeholder="Enter Filter" name ="filter"className="filter" type="text" value={this.props.filter} onChange={(e)=>this.props.onFilter(e)} />
                    <button type="submit" style={{ width: "60px", height: "40px", backgroundColor: "white", border: "1px solid blue", borderRadius: "10px" }} >Clear</button>
                </form>
            </div>
        );
    }
}

export default TodoFilter;