import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {

    renderProductItem = () =>{
        return this.props.productInfo.map((productItem, index)=>{
            return (<ProductItem productClicked={this.props.productClicked} productInfo={productItem} key={index}/>)
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">{this.renderProductItem()}</div>
            </div>
        );
    }
}

export default ProductList;