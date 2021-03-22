import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  state = {
    pizzas: []
  }

  fetchPizza = () => {
    fetch('http://localhost:3000/pizzas')
    .then(r => r.json())
    .then(pizzas => this.setState({pizzas: pizzas}))
  }
  renderPizzas = () => {
    this.fetchPizza()
    return this.state.pizzas.map(pizza => <Pizza passPizza={this.props.passPizza} pizza={pizza} />)
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.renderPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
