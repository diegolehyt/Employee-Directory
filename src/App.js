import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import ListHead from "./components/ListHead";
import List from "./components/List";
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
  // Name Ascending
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
  // Name Descending
  sortByNameD = () => {
    function compare (a, b) {
      const bandA = a.fullName.toUpperCase();
      const bandB = b.fullName.toUpperCase();
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison * -1;
    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.sort(compare)
    console.log(players.sort(compare));
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };

  // Shirt Number Ascending
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

  // Shirt Number Descending
  sortByShirtD = () => {
    function compare (a, b) {
      const bandA = a.shirtNumber;
      const bandB = b.shirtNumber;
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison * -1;
    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.sort(compare)
    console.log(players.sort(compare));
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };

  // Age Ascending
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

  // Age Descending
  sortByAgeD = () => {
    function compare (a, b) {
      const bandA = a.age;
      const bandB = b.age;
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison * -1;
    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.sort(compare)
    console.log(players.sort(compare));
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };

  // Country Ascending
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

  // Country Descending
  sortByCountryD = () => {
    function compare (a, b) {
      const bandA = a.nationality.toUpperCase();
      const bandB = b.nationality.toUpperCase();
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison * -1;
    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.sort(compare)
    console.log(players.sort(compare));
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };

  // Position Ascending
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

  // Position Descending
  sortByPositionD = () => {
    function compare (a, b) {
      const bandA = a.position.toUpperCase();
      const bandB = b.position.toUpperCase();
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison * -1;
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
      <div>
        <Navbar></Navbar>
        <Wrapper>
          <Title>FC Barcelona - Players List</Title>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
            search={this.state.search}
          />
          <br/>
          <br/>
        {
          this.state.results.length > 0
          ? <List>
              <ListHead 
                sortByName={this.sortByName}
                sortByNameD={this.sortByNameD}
                sortByShirt={this.sortByShirt}
                sortByShirtD={this.sortByShirtD}
                sortByAge={this.sortByAge}
                sortByAgeD={this.sortByAgeD}
                sortByCountry={this.sortByCountry}
                sortByCountryD={this.sortByCountryD}
                sortByPosition={this.sortByPosition}
                sortByPositionD={this.sortByPositionD}
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
                sortByNameD={this.sortByNameD}
                sortByShirt={this.sortByShirt}
                sortByShirtD={this.sortByShirtD}
                sortByAge={this.sortByAge}
                sortByAgeD={this.sortByAgeD}
                sortByCountry={this.sortByCountry}
                sortByCountryD={this.sortByCountryD}
                sortByPosition={this.sortByPosition}
                sortByPositionD={this.sortByPositionD}
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
      </div>
    );
  }
}

export default App;
