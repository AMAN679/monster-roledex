import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

      monsters: [],
      searchField: ''
    };
  }



  handleOnChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  componentDidMount() {

    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters: monsters })
      )


  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))


    return (
      <div className="App">
        <h1>Monster Rolledox</h1>

        <SearchBox placeholder='Enter Monster' handleOnChange={this.handleOnChange} />
        <CardList monsters={filteredMonsters} />


      </div>
    );
  }
}

export default App;
