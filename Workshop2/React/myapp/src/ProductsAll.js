import React, { Component } from 'react'
import axios from 'axios'
import ProductOne from './ProductOne'


export default class ProductsAll extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        axios.get('/products')
            .then((response) => {
                let copy = { ...this.state }
                copy.products = response.data
                this.setState(copy)
            })
    }

    showDetails = (PID) => {
        this.props.history.push('/product-details/'+PID)
    }

    // updateProduct = (PID) => {
    //     this.props.history.push("/product-update/" + PID)
    // }

    // deleteProduct = (PID) => {
    //     this.props.history.push("/product-delete/" + PID)
    // }



    render() {
        return (
            this.state.products.map((item)=>{
                return(
                    <ProductOne
                    name={item.name}
                    price={item.price}
                    showDetails={() => { this.showDetails(item.PID) }}
                    // updateProduct={() => { this.updateProduct(item.PID) }}
                    // deleteProduct={() => { this.deleteProduct(item.PID) }}
                    ></ProductOne>
                )
            })
        )
    }
}
