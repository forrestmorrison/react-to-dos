import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: []
    };
  }

  inputUpdate = (event) => {
    this.setState({input: event.target.value})
  }

  formSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.input],
      input: ''
    })
  }

  // handleClick = {index => this.deleteItem(index)}

  delete = (index) => {
    let objectCopy = [...this.state.items];
    objectCopy.splice(index, 1);
    this.setState({items: [...objectCopy]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List</h1>
          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.inputUpdate}/>
            <button >Submit</button>
          </form>
          <ul>{this.state.items.map((item, index)=>{
            return <li key={index} onClick={() => this.delete(index)}>{this.state.items[index]}</li>
          })}</ul>
        </header>
      </div>
    );
  }

}
export default App;
