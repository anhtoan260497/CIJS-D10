import React, { Component } from 'react';
import TodoFilter from './TodoFilter';
import TodoJob from './TodoJob';
import TodooAdd from './TodoAdd';
import "./style.scss"

class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoJob: [
                { id: 1, title: "Đi cafe với gấu", isCompleted: false },
                { id: 6, title: "Học ReactJS", isCompleted: false },
                { id: 3, title: "Học cách thổi nến", isCompleted: false },
                { id: 4, title: "Dắt gấu đi dạo", isCompleted: false },
                { id: 5, title: "Trade coin", isCompleted: false },
            ],
            filterTodoJob: [],
            filter: "",
            add: ""
        }
    }

    onFilter = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            let getTitle = this.state.todoJob.map(el => {
                return el.title
            }) // lấy title của từng phần tử trong mảng state.todoJob
            let a = getTitle.map(el => {
                let newA = el.split(' ')
                return newA.filter(el => el === this.state.filter)
            }) // mảng nào có keyword bằng với filter thì sẽ trả về giá trị là 1 cái mảng có keyword đó, còn lại đều là mảng rỗng ra được [[],[],[keyword]]
            let b = a.map(el => el.join()) // join lại để mảng bên trong để ra như sau ["",keyword,""]
            let indices = []; // khởi tạo mảng chứa vị trí các index 
            let idx = b.indexOf(this.state.filter);
            while (idx !== -1) {
                indices.push(idx);
                idx = b.indexOf(this.state.filter, idx + 1); // chỗ nào tìm được filter thì add vào mảng indices
            }
            let toDoFilter = [] // tạo 1 mảng rỗng
            for(let i=0;i<indices.length;i++){
                toDoFilter.push(this.state.todoJob[indices[i]]) // push phần tử vào mảng  rỗng
            }
            this.setState({filterTodoJob:toDoFilter}) // setState lại mãng vừa tạo để render
        })
    }

    onClearFilter = e => {
        e.preventDefault()
        this.setState({ filter: "" })
    }

    onDeleteJob = id => {
        let idx = this.state.todoJob.findIndex(el => el.id === id)
        let newTodoJob = [...this.state.todoJob]
        newTodoJob.splice(idx, 1)
        this.setState({ todoJob: newTodoJob })
    }

    onDoneJob = (e, id) => {
        let idx = this.state.todoJob.findIndex(el => el.id === id)
        let newTodoJob = [...this.state.todoJob]
        let currentJob = newTodoJob[idx]
        if (currentJob.isCompleted === false) {
            currentJob.isCompleted = true
            e.target.style.textDecoration = "line-through"
        }
        this.setState({ todoJob: newTodoJob }, () => { console.log(this.state) })
    }

    onChangeTodoJob = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
        })
    }

    onAddJob = e => {
        e.preventDefault()
        let id = 0
        for (let i = 1; i <= this.state.todoJob.length; i++) {
            if (this.state.todoJob[i - 1].id !== i) { id = i }
        }
        let newJob = {
            id: id,
            title: this.state.add,
            isCompleted: false
        }
        let newTodoJob = [...this.state.todoJob, newJob]
        this.setState({ todoJob: newTodoJob, add: "" })
    
    }
  
    render() {
        return (
            <div>
                <TodoFilter onFilter={this.onFilter} filter={this.state.filter} onClearFilter={this.onClearFilter} />
                <h1 style={{ marginTop: "20px" }}>TODO</h1>
                <hr />
                <TodoJob todoJob={this.state.todoJob} filterTodoJob={this.state.filterTodoJob} onDeleteJob={this.onDeleteJob} onDoneJob={this.onDoneJob} filter={this.state.filter}/>
                <h1 style={{ marginTop: "20px" }}>ADD</h1>
                <hr />
                <TodooAdd onChangeTodoJob={this.onChangeTodoJob} add={this.state.add} onAddJob={this.onAddJob} />
            </div>
        );
    }
}

export default TodoApp;