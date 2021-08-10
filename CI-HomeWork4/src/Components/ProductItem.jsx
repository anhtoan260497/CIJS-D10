import React, { Component } from 'react';

class ProductItem extends Component {

    render() {
       const {productClicked} = this.props
       const {img,name,id} = this.props.productInfo
        return (
            <div className="col-6 col-md-4 border col-lg-4 p-3 mt-3 ">
            <img className=" img-fluid" src={img} alt=""/>
            <h5 className="mt-2 mb-2">{name}</h5>
            <button onClick={()=> productClicked(id)} className="btn btn-success">Xem Chi Tiết</button>
            </div>
        )
        }
    }


export default ProductItem;