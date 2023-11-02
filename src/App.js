import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

//import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
          }
        )
      );
  }

  onSearchChange = (e) => {
    this.setState(() => {
      return {
        searchField: e.target.value.toLowerCase(),
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filtred_monsters = searchField
      ? monsters.filter((monster) =>
          monster.name.toLowerCase().includes(searchField)
        )
      : monsters;
    return (
      <div className="App">
      <h1 className="app-title">Monsters rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monster-search-box'/>
        <CardList monsters={filtred_monsters} />
      </div>
    );
  }
}

export default App;
