import React, { Component } from 'react'

export default class ProductDetails extends Component {
state ={
    product:{
        name:'',
        price:0,
        brand:'',
        model:''
    }
}

componentDidMount(){

}


    render() {
        return (
            <div>
                <h3>Product Detail</h3>
                <p>{this.state.product.name}</p>
                <p>{this.state.product.price}</p>
                <p>{this.state.product.brand}</p>
                <p>{this.state.product.model}</p>
            </div>
        )
    }
}
