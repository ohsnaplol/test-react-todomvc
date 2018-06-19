import React, { Component } from 'react';
import Input from './components/input/input.js'
import List from './components/list/list.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem(text) {
    let input = text.trim()
    if(input) {
      let newItems = this.state.items
      newItems.push(input)
      this.setState({
        items: newItems
      })
    }
  }

  deleteItem(index) {
    let newItems = this.state.items
    newItems.splice(index, 1)
    this.setState({
      items: newItems
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>To-do List</h1>
        </header>
        <div className='container mt-4'>
          <Input add={this.addItem}/>
          <List items={this.state.items} deleteItem={this.deleteItem}/>
        </div>
      </div>
    );
  }
}

export default App;
