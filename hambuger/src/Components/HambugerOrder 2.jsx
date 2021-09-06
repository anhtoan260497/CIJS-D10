import React, { Component } from 'react';
import Salad from './Salad';
import './Hamburger.css'
import Cheese from './Cheese';
import Meat from './Meat';
import Bacon from './Bacon';
import Ingredient from './Ingredient';



class HambugerOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: [{
                name: "salad",
                quantityArr: [],
                quantity : 0,
                unit: 10
            },
            {
                name: "cheese",
                quantityArr: [],
                quantity: 0,
                unit: 20
            }, {
                name: "meat",
                quantityArr: [],
                quantity : 0,
                unit: 25
            },
            {
                name: "bacon",
                quantityArr:[],
                quantity : 0,
                unit: 28
            }
            ]
    }
    }

    totalPrice = () =>{
        let result = this.state.ingredients.reduce((result,current) =>{
            return result + current.unit*current.quantity
        },0)
        return result
    }

    renderIngredient = () => {
       return  this.state.ingredients.map((ire,index) => {
            return <Ingredient key={index} onAddButton={this.onAddButton} onLessButton={this.onLessButton} name={ire.name} quantity={ire.quantity} unit={ire.unit} />
            
        })
    }
    renderSalad = () => {
        const saladIre = this.state.ingredients.filter(ire => ire.name === "salad")
       return  saladIre[0].quantityArr.map( (salad,index) =>  <Salad quantity={salad.quantity} key={index}/> )
        
    }
    renderCheese = () => {
        const cheeseIre = this.state.ingredients.filter(ire => ire.name === "cheese")
       return  cheeseIre[0].quantityArr.map( (cheese,index) =>  <Cheese quantity={cheese.quantity} key={index} /> )
        
    }
    renderMeat = () => {
        const meatIre = this.state.ingredients.filter(ire => ire.name === "meat")
       return  meatIre[0].quantityArr.map( (meat,index) =>  <Meat quantity={meat.quantity} key={index} /> )
        
    }
    renderBacon = () => {
        const baconIre = this.state.ingredients.filter(ire => ire.name === "bacon")
       return  baconIre[0].quantityArr.map( (bacon,index) =>  <Bacon quantity={bacon.quantity} key={index} /> )
        
    }

    onLessButton = id =>{
        let idx = this.state.ingredients.findIndex(el=>el.name === id)
        let newIngredients = [...this.state.ingredients]
        newIngredients[idx].quantityArr.splice(0,1)
        let quantity = newIngredients[idx].quantity
        if(quantity>0) {
            newIngredients[idx].quantity -= 1
        } else {newIngredients[idx].quantity = 0}
        this.setState({ingredients:newIngredients})
    }

    onAddButton = id =>{
        let idx = this.state.ingredients.findIndex(el=>el.name === id)
        let newIngredients = [...this.state.ingredients]
        newIngredients[idx].quantityArr.push(1)
        newIngredients[idx].quantity += 1
        this.setState({ingredients:newIngredients})
    }

    onOrderNow = () =>{
      this.setState({
        ingredients: [{
            name: "salad",
            quantityArr: [],
            quantity : 0,
            unit: 10
        },
        {
            name: "cheese",
            quantityArr: [],
            quantity: 0,
            unit: 20
        }, {
            name: "meat",
            quantityArr: [],
            quantity : 0,
            unit: 25
        },
        {
            name: "bacon",
            quantityArr:[],
            quantity : 0,
            unit: 28
        }
        ]
})
        alert("Thanh Toán Thành Công")
    }

    onReset = () =>{
        this.setState({
            ingredients: [{
                name: "salad",
                quantityArr: [],
                quantity : 0,
                unit: 10
            },
            {
                name: "cheese",
                quantityArr: [],
                quantity: 0,
                unit: 20
            }, {
                name: "meat",
                quantityArr: [],
                quantity : 0,
                unit: 25
            },
            {
                name: "bacon",
                quantityArr:[],
                quantity : 0,
                unit: 28
            }
            ]
    })
        console.log(this.state)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="hambuger-image col-md-6 col-6">
                        <h3 className="text-center mb-4 mt-2">Your tatse burger</h3>
                        <div className="box">
                            <div className="bread-top">
                                <div className="seeds" />
                                <div className="seeds2" />
                            </div>
                            {this.renderSalad()}
                            {this.renderCheese()}
                            {this.renderMeat()}
                            {this.renderBacon()}
                            <div className="bread-bottom" />
                        </div>
                    </div>
                    <div className="custom-burger col-md-6 col-6">
                        <div>
                            <h3 className="text-center mt-2 mb-2">Custom Your Burger</h3>
                            <div className="white-line mb-3" />
                            <div className="title">
                                <h5>TOPPING</h5>
                                <h5>OPTION</h5>
                                <h5>UNIT PRICE</h5>
                                <h5>PRICE</h5>
                            </div>
                        </div>
                        {this.renderIngredient()}
                        <div className="white-line mb-3" />
                        <div className="total">
                            <h3>Total</h3>
                            <h3>{this.totalPrice()}</h3>
                        </div>
                        <button className="btn btn-danger mx-4" onClick={this.onOrderNow}>Order Now</button>
                        <button className="btn btn-primary" onClick={this.onReset}>Reset</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default HambugerOrder;