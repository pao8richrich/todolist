import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    name: "",
    lastname: "",
    error: false,
    register: [],
    errorMessage: ""
  };

  validateInput = e => {
    const { value, name } = e.target;
    this.setState({
      error: !e.target.checkValidity(),
      errorMessage: `Ooops! asi no es...`
    });
    //console.log(e.target.checkValidity(true));
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const fullName = `${this.state.name} ${this.state.lastname}`;

    let itExists = this.state.register.find(x => x === fullName);

    if (!itExists) {
      this.setState({
        register: [...this.state.register, fullName],
        name: "",
        lastname: ""
      });
    } else {
      this.setState({ error: true, errorMessage: "Ouch! ese ya existe" });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Mis To do!</h1>
        {this.state.error && <span>{this.state.errorMessage}</span>}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="[a-zA-Z]+"
            placeholder="Ingresa tus checks"
            onChange={this.validateInput}
            minLength={2}
            value={this.state.name}
            required
          />


          <button disabled={this.state.error}>Do IT!</button>
        </form>
        <ul>
          {this.state.register.map(element => (
            <li key={element}>{element} </li>
          ))}
        </ul>
      </div>
    );
  }
}



