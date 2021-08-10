import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

class SmartphoneStore extends Component {
    constructor(props){
        super(props)
        this.state ={
            products :
            [
                  {
                    id: 1,
                    name: "Samsung Galaxy A10",
                    price: "40906000",
                    img: "assets/img/samsung-galaxy.jpg",
                    info: {
                      screen: "AMOLED Full HD 9.0",
                      os: "Android 9.0",
                      frontCamera: "20MP",
                      backCamera: "Chính 48MB, phụ 30MP",
                    },
                    ram: "4 GB",
                    rom: "64 GB",
                  },
                  {
                    id: 2,
                    name: "iPhone12",
                    price: "200306000",
                    img: "assets/img/iphone-12.jpg",
                    info: {
                      screen: "Full HD 12.0",
                      os: "IOS 14",
                      frontCamera: "20MP",
                      backCamera: "Chính 100MB, phụ 30MP",
                    },
                    ram: "16 GB",
                    rom: "32 GB",
                  },
                  {
                    id: 3,
                    name: "Xiaomi Note 10",
                    price: "10005000",
                    img: "assets/img/xiaomi-redmi-note-10-5g.jpg",
                    info: {
                      screen: "OLED 10.0",
                      os: "Android 8.0",
                      frontCamera: "69MP",
                      backCamera: "Chính 96MB, phụ 30MP",
                    },
                    ram: "10 GB",
                    rom: "64 GB",
                  },
                ],
            productClicked : {}
        }
    }

    productClicked = (id) =>{
        const product = this.state.products
        const idx = this.state.products.findIndex(product => product.id === id)
        if(idx !== -1) this.setState({productClicked: product[idx]}, ()=>{ console.log(this.state)}) 
    }
    render() {
        return (
            <div>
                <ProductList productInfo={this.state.products} productClicked={this.productClicked}/>
                <ProductDetail productDetail={this.state.productClicked}/>
            </div>
        );
    }
}

export default SmartphoneStore;