import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={(e) => props.updatePizza(e)} name='Topping' type="text" className="form-control" placeholder="Pizza Topping" value={
                props.pizza ? props.pizza.Topping : null
              }/>
        </div>
        <div className="col">
          <select onChange={(e) => props.updatePizza(e)} value={props.pizza ? props.pizza.Size : null} name='Size'className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={(e) => props.updatePizza(e)} className="form-check-input" type="radio" name="Vegetarian" value="true" checked={props.pizza ? props.pizza.Vegetarian : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={(e) => props.updatePizza(e)} className="form-check-input" type="radio" value="false" name="Vegetarian" checked={props.pizza.Vegetarian === null ? false : !props.pizza.Vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) => props.handleSubmit(e)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
