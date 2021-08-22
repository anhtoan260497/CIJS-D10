import React, { Component, Fragment } from 'react';
import StudentInformation from './StudentInformation';

class OutputArea extends Component {


    renderStudentInformation = () => {
        return this.props.studentInfo.students.map((el, idx) => {
            return <StudentInformation onDeleteStudent={this.props.onDeleteStudent} studentInfo={el} key={idx} />
        })
    }



    render() {
        return (
            <Fragment>
                <div style={{position:"relative",left:"80vw"}}>
                    <select value={this.props.sort} onChange={ e =>this.props.onSort(e,this.props.studentInfo.students)} >
                        <option value="sort" disabled>Sort By</option>
                        <option value="gpa-up">GPA tăng dần</option>
                        <option value="gpa-down">GPA giảm dần</option>
                        <option value="name">Họ Tên</option>
                
                    </select>
                </div>
                <div>
                    <table style={{ width: "95vw", marginTop: "40px" }}>
                        <thead style={{ backgroundColor: "black", color: "white", height: "40px" }}>
                            <tr>
                                <th style={{ width: "10vw", textAlign: "center" }}>Mã sinh viên</th>
                                <th style={{ width: "30vw", textAlign: "center" }}>Họ Tên</th>
                                <th style={{ width: "15vw", textAlign: "center" }}>Số điện thoại</th>
                                <th style={{ width: "25vw", textAlign: "center" }}>Email</th>
                                <th style={{ width: "10vw", textAlign: "center" }}>Điểm tb</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderStudentInformation()}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}

export default OutputArea;