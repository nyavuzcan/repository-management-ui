import React, { Component } from 'react';
import {getProducts} from "../../api/ProductService";
class About extends Component {

    handleC = e => {
        getProducts().then(response =>
            console.log(response)
        )
    }

render() {
    return(
      <div>
        <div>About Page</div>
        <button onClick={this.handleC}>All Products</button>
</div>
    )
}

}

export default About;