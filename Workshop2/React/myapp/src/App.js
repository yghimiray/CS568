// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'

import ProductsAll from './ProductsAll'


class App extends React.Component {

  state = {
    isUserLoggedIn: true
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <ol>
            {this.state.isUserLoggedIn ? <li>
              <Link to='/all-products'> All Products </Link>
            </li> : null}

            {this.state.isUserLoggedIn ? <li>
              <Link to='/create-products'> Create Products </Link>
            </li> : null}

            <li>
              <Link to='/login'> Login </Link>
            </li>

            <li>
              <Link to='/register'> Register </Link>
            </li>

          </ol>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
