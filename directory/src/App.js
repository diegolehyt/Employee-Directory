import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import ListHead from "./components/ListHead";
import List from "./components/List";
import SortButton from "./components/SortButton";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import Navbar from "./components/Navbar";
import players from "./players.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    players,
    search: "",
    results: []
  };

  // Sort BY functions
  sortByName = () => {
    function compare (a, b) {
      const bandA = a.fullName.toUpperCase();
      const bandB = b.fullName.toUpperCase();
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.sort(compare)
    console.log(players.sort(compare));
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };

  sortByShirt = () => {
    function compare (a, b) {
      const bandA = a.shirtNumber;
      const bandB = b.shirtNumber;
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.sort(compare)
    console.log(players.sort(compare));
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };

  sortByAge = () => {
    function compare (a, b) {
      const bandA = a.age;
      const bandB = b.age;
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.sort(compare)
    console.log(players.sort(compare));
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };

  sortByCountry = () => {
    function compare (a, b) {
      const bandA = a.nationality.toUpperCase();
      const bandB = b.nationality.toUpperCase();
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.sort(compare)
    console.log(players.sort(compare));
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };

  sortByPosition = () => {
    function compare (a, b) {
      const bandA = a.position.toUpperCase();
      const bandB = b.position.toUpperCase();
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.sort(compare)
    console.log(players.sort(compare));
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };

  // --------------------------------------------- input ---------------------------------
  handleInputChange = event => {
    this.setState({ search: event.target.value, results: [] });
    // console.log(this.state.search)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const results = players.filter(friend => friend.fullName.toUpperCase() === this.state.search.toUpperCase() || friend.lastName.toUpperCase() === this.state.search.toUpperCase() || friend.name.toUpperCase() === this.state.search.toUpperCase() )
    this.setState({ results: results });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    // console.log(this.state.results)
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Title>Friends List</Title>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
          search={this.state.search}
        />
        <SortButton sortByName={this.sortByName}></SortButton>
      {
        this.state.results.length > 0
        ? <List>
            <ListHead 
              sortByName={this.sortByName}
              sortByShirt={this.sortByShirt}
              sortByAge={this.sortByAge}
              sortByCountry={this.sortByCountry}
              sortByPosition={this.sortByPosition}
            />
            {this.state.results.map(friend => (
              <FriendCard
                name={friend.fullName}
                image={friend.imageURL}
                position={friend.position}
                country={friend.nationality}
                age={friend.age}
                shirtNumber={friend.shirtNumber}
              />
            ))}

          </List> 
        : <List>
            <ListHead 
              sortByName={this.sortByName}
              sortByShirt={this.sortByShirt}
              sortByAge={this.sortByAge}
              sortByCountry={this.sortByCountry}
              sortByPosition={this.sortByPosition}
            />
            {this.state.players.map(friend => (
              <FriendCard
                name={friend.fullName}
                image={friend.imageURL}
                position={friend.position}
                country={friend.nationality}
                age={friend.age}
                shirtNumber={friend.shirtNumber}
              />
            ))}
          </List>
      }  
      </Wrapper>
    );
  }
}

export default App;
