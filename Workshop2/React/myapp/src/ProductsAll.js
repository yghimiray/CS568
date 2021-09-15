import React, { Component } from 'react'
import axios from  'axios'


export default class ProductsAll extends Component {

    state ={
        products:[]
    }

    componentDidMount(){
        axios.get('/products')
        .then((response)=>{
            let copy = {...this.state}

        })
    }

    showDetails=(id)=>{

}


    render() {
        return (
            <div>
                NAme: {this.props.name}
                {this.props.price}
            </div>
        )
    }
}
