import { Component } from 'react';

import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';

import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monstersobjlist: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monstersobjlist: users }
          }
        ))
  }

  onSearchChange = (event) => {
    // console.log({startingArray: this.state.monsters});
    const searchField = event.target.value.toLocaleLowerCase();      
    this.setState(() => {
      return { searchField };
    })
  }

  render() {

    console.log('render from app.js');

    const {monstersobjlist, searchField} = this.state;
    const {onSearchChange} = this;
    
    const filteredMonsterslist = monstersobjlist.filter((monsterobj) => {
      return monsterobj.name.toLocaleLowerCase().includes(searchField);
    })     

    return (
      <div className="App">

        <h1 className='app-title'>Monsterr Rolodex</h1>
        <SearchBox 
        className="monster-search-box"
        onChangeHandler={onSearchChange} 
        placeholder="search monsters" 
        />
        <CardList monstersobjlistPr={filteredMonsterslist}  />
      </div>
    );
  }

}

export default App;
