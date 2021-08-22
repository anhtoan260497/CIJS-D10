import React, { Component } from 'react';

class StudentInformation extends Component {
    render() {
        let {id,name,phone,email,math,chemical,physic} = this.props.studentInfo
        return (
                <tr className="student">
                    <td style={{width:"10vw",textAlign:"center"}} >{id}</td>
                    <td style={{width:"10vw",textAlign:"center"}} >{name}</td>
                    <td style={{width:"10vw",textAlign:"center"}} >{phone}</td>
                    <td style={{width:"10vw",textAlign:"center"}} >{email}</td>
                    <td style={{width:"10vw",textAlign:"center"}} >{((parseInt(math)+parseInt(chemical)+parseInt(physic))/3).toFixed(2)}</td>
                    <td><button className="btn btn-danger ml-3" onClick={()=>this.props.onDeleteStudent(id)}>Delete</button></td>
                </tr>
        );
    }
}

export default StudentInformation;