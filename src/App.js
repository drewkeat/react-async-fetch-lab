// create your App component here
import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
  
    this.state = {
       people: [],
    }
  }
  
  getPeople = () => {
    fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(data => {
      this.setState({
        people: data.people,
      })
    })
  }

  generateList = () => {
    return this.state.people.map((person, index) => <li key={`item-${index}`}>{person.name}</li>)
  }

  render() {
    return (
      <div>
        <h1>These people are currently in space!</h1>
        <ul>
          {this.generateList()}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.getPeople()
  }
}

export default App
