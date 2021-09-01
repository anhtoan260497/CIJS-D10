import React, { Component } from 'react';
import InputArea from './InputArea';
import OutputArea from './OutputArea';

class StudentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            sort: "sort"
        }
    }


    onSubmitStudent = (e, studentInfo) => {
        e.preventDefault()
        let checking = 0
        if (studentInfo.id === "" || studentInfo.name === "" || studentInfo.phone === "" || studentInfo.email === "" || studentInfo.math === "" || studentInfo.physic === "" || studentInfo.chemical === "") {
            alert("chưa đủ thông tin")
            checking = 0
        } else { checking = 1 }
        let checkingSameId = this.state.students.findIndex(el => el.id === studentInfo.id)
        if (checkingSameId === -1 && checking === 1) {
            this.setState({ students: [...this.state.students, studentInfo] }) // checking xem đã có thông tin ID của sinh viên chưa, nếu chưa có giá trị là -1 thì set lại State
        }
    }

    onDeleteStudent = id => {
        let idx = this.state.students.findIndex(el => {
            return el.id === id
        })
        let newStudentArr = this.state.students.filter(el => el.id !== this.state.students[idx].id)
        this.setState({ students: newStudentArr }, () => {
        })
    }

    onSort = (e, arr) => {
        switch (e.target.value) {
            case "gpa-down":
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr.length - i - 1; j++) {
                        if (((parseInt(arr[j].math) + parseInt(arr[j].chemical) + parseInt(arr[j].physic)) / 3).toFixed(2) < ((parseInt(arr[j + 1].math) + parseInt(arr[j + 1].chemical) + parseInt(arr[j + 1].physic)) / 3).toFixed(2)) {
                            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                        }
                    }
                }
                this.setState({ students:arr , sort : "gpa-down"})
                break;
            case "gpa-up":
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr.length - i - 1; j++) {
                        if (((parseInt(arr[j + 1].math) + parseInt(arr[j + 1].chemical) + parseInt(arr[j + 1].physic)) / 3).toFixed(2) < ((parseInt(arr[j].math) + parseInt(arr[j].chemical) + parseInt(arr[j].physic)) / 3).toFixed(2)) {
                            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                        }
                    }
                }
                this.setState({ students:arr , sort : "gpa-up"})
                break;
            case "name":
                arr.sort((student1,student2)=>{
                    let charName1Arr = [student1.name.split(' ')]
                    let realName1 = charName1Arr[0][charName1Arr[0].length-1] // lấy chữ cái đầu mỗi tên
                    let charName2Arr = [student2.name.split(' ')]
                    let realName2 = charName2Arr[0][charName2Arr[0].length-1] // lấy chữ cái đầu mỗi tên
                    return realName1.charCodeAt(0) - realName2.charCodeAt(0) // chữ cái đầu tên 1 đổi sang ASCII mà trừ chữ cái đầu tên 2 bị âm thì xếp 1 đăng trước và 2 đăng sau
                })
                this.setState({students:arr,sort:"name"})
            break

            
            default: console.log("sort")
        }
    }

    render() {

        return (
            <div>
                <InputArea onSubmitStudent={this.onSubmitStudent} />
                <OutputArea onDeleteStudent={this.onDeleteStudent} onSort={this.onSort} sort={this.state.sort} studentInfo={this.state} />
            </div>
        );
    }
}

export default StudentForm;