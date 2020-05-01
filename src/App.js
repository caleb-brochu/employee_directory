import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Filter from "./components/Filter"
import Sort from "./components/Sort"
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFilterSubmit = event => {
    event.preventDefault();
    // this.state.search
     this.filterTeam(this.state.search);
  };
  handleFilterClear= event => {
    event.preventDefault();
    // this.state.search
    this.setState({ employees });
  };

  filterTeam = filter => {
    const employees = this.state.employees.filter(employee => employee.team === filter);
    this.setState({ employees });
  }
  handleSortName = event =>{
    event.preventDefault();
    const employees = this.state.employees.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({ employees });
  }

  handleSortTenure = event =>{
    event.preventDefault();
    const employees = this.state.employees.sort((a, b) => a.tenure-b.tenure)
    this.setState({ employees });
  }

  handleSortLocation= event =>{
    event.preventDefault();
    const employees = this.state.employees.sort((a, b) => a.location.localeCompare(b.location))
    this.setState({ employees });
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
        <div>
            <Title>Employee Directory</Title>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-6">
                        <Filter
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFilterSubmit={this.handleFilterSubmit}
                            handleFilterClear ={this.handleFilterClear}
                        />
                    </div>
                    <div className = "col-md-6">
                        <Sort
                            value={this.state.search}
                            handleSortName={this.handleSortName}
                            handleSortTenure={this.handleSortTenure}
                            handleSortLocation ={this.handleSortLocation}                            
                        />
                    </div>
                </div>
            </div>
            <Wrapper> {this.state.employees.map(employee => (
                <EmployeeCard

                    id={employee.id}
                    key={employee.id}
                    name={employee.name}
                    team={employee.team}
                    email={employee.email}
                    tenure={employee.tenure}
                    occupation={employee.occupation}
                    location={employee.location}
                />
                ))}
            </Wrapper>
        </div>
      
    );
  }
}

export default App;
