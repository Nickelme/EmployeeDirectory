import logo from './logo.svg';
import './App.css';
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Search from './components/Search/search';
import { Component } from 'react';
import Sort from './components/Sort/sort';


class App extends Component {

  state = {
    search: "",
    sort: "",
  }

  searchChanged = event => {
    this.setState({search: event.target.value});
  }

  sortChanged = event => {
    this.setState({ sort: event.target.value });
  }

  render() {
    return (
      <div className="table-div">
        <h1>Employee Directory</h1>
        <Search SearchChanged={this.searchChanged}/>
        <Sort sortChanged={this.sortChanged}/>
        <EmployeeList searchTerm={this.state.search} sortBy={this.state.sort}/>
      </div>
    );
  }
}

export default App;
