import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    form: false, 
    pizza: {
      Id: null,
      Topping: null, 
      Size: null, 
      Vegetarian: null
    }
  }
  subForm = () => {
    this.setState({form: !this.state.form})
  }
  passPizza = (pizza) => {
    this.setState({
      pizza: {
        Id: pizza.id,
        Topping: pizza.topping, 
        Size: pizza.size, 
        Vegetarian: pizza.vegetarian
      }
    })
  }
  updatePizza = (e) => {
    if (e.target.name === 'Vegetarian'){
      let newVal = true
      if (e.target.value === 'false'){
        newVal = false
      }
      this.setState({
        pizza: {
          ...this.state.pizza, 
          [e.target.name]: newVal
        }
      })
    }
    else {
      this.setState({
        pizza: {
          ...this.state.pizza, 
          [e.target.name]: e.target.value
        }
      })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()   
    let newPizza = {
      "topping": this.state.pizza.Topping,
      "size": this.state.pizza.Size,
      "vegetarian": this.state.pizza.Vegetarian
    }
    if (this.state.pizza.Id) {
      this.patchPizza(newPizza)
    }
    else {
      this.postPizza(newPizza)
    }
  }
  patchPizza = (newPizza) => {
    let reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify(newPizza)
    }
    fetch('http://localhost:3000/pizzas/' + this.state.pizza.Id, reqObj)
    .then(this.subForm())
  }
  postPizza = (newPizza) => {
    let reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newPizza)
    }
    fetch('http://localhost:3000/pizzas/', reqObj)
    .then(this.subForm())
    
  }

  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} updatePizza={this.updatePizza} pizza={this.state.pizza} subForm={this.subForm} />
        <PizzaList passPizza={this.passPizza}/>
      </Fragment>
    );
  }
}

export default App;
