import React, { Component } from 'react';

class InputArea extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : "",
            name : "",
            phone:"",
            email:"",
            math:"",
            physic:"",
            chemical:"",
        }
    }

    onChangeHandler = e => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    checkingCoditionPhone = (e) => {
        if(e.target.value.length !== 10) {alert("sai số điện thoại")}
    }

    checkingCoditionMarks = e =>{
        if(parseInt(e.target.value) > 10 || parseInt(e.target.value) < 0 ) {alert('Sai số điểm')}
    }

    render() {
        return (
            <div>
                <header style={{backgroundColor:"rgba(0,0,0,40%)",textAlign:"center"}}>
                    <h1>Thông tin sinh viên </h1>
                </header>
                <section style={{margin:"0 2vw"}} className="input-form">
                    <form style={{height:"300px",display:"flex",flexWrap:"wrap"}} onSubmit={(e) => this.props.onSubmitStudent(e,this.state)}>
                        <div style={{width:"45vw"}}>
                            <label htmlFor="id">Mã SV</label><br />
                            <input type="number" autoComplete="off" style={{width:"40vw",height:"30px"}} onChange={this.onChangeHandler} name="id" value={this.state.id} />
                        </div>
                        <div style={{width:"45vw"}}>
                            <label htmlFor="name">Họ Tên</label><br />
                            <input type="text"style={{width:"40vw",height:"30px"}} autoComplete="off" onChange={this.onChangeHandler} name="name" value={this.state.name} />
                        </div>
                        <div style={{width:"45vw"}}>
                            <label htmlFor="phone">Số Điện Thoại</label><br />
                            <input type="number" style={{width:"40vw",height:"30px"}} autoComplete="off" onChange={this.onChangeHandler} onBlur={this.checkingCoditionPhone} name="phone" value={this.state.phone} />
                        </div>
                        <div style={{width:"45vw"}}>
                            <label htmlFor="email">Email</label><br />
                            <input type="email" style={{width:"40vw",height:"30px"}} onChange={this.onChangeHandler} name="email" value={this.state.email} />
                        </div>
                        <div style={{width:"45vw"}}>
                            <label htmlFor="math">Điểm Toán</label><br />
                            <input type="number" style={{width:"40vw",height:"30px"}} autoComplete="off" onChange={this.onChangeHandler} onBlur={this.checkingCoditionMarks} name="math" value={this.state.math} />
                        </div>
                        <div style={{width:"45vw"}}>
                            <label htmlFor="physic">Điểm Lý</label><br />
                            <input type="number" style={{width:"40vw",height:"30px"}} autoComplete="off" onChange={this.onChangeHandler} onBlur={this.checkingCoditionMarks} name="physic" value={this.state.physic} />
                        </div>
                        <div style={{width:"100vw"}}>
                            <label htmlFor="chemical">Điểm Hoá</label><br />
                            <input type="number" style={{width:"40vw",height:"30px"}} autoComplete="off" onChange={this.onChangeHandler} onBlur={this.checkingCoditionMarks} name="chemical" value={this.state.chemical} />
                        </div>
                        <button className="btn btn-success mt-2" type="submit">Thêm Sinh Viên</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default InputArea;