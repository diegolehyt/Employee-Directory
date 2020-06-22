import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
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
    // const friends = this.state.friends.filter(friend => friend.id !== id);
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
    const results = players.filter(friend => friend.fullName === this.state.search)
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
        ? <table className='col-12'>
            <tr>
              <th>Img</th>
              <th>Name</th>
              <th>Occupation</th>
              <th>Location</th>
            </tr>
            {this.state.results.map(friend => (
              <FriendCard
                name={friend.fullName}
                image={friend.imageURL}
                occupation={friend.position}
                location={friend.nationality}
              />
            ))}

          </table> 
        : <table className='col-12'>
            <tr>
              <th>Img</th>
              <th>Name</th>
              <th>Occupation</th>
              <th>Location</th>
            </tr>
            {this.state.players.map(friend => (
              <FriendCard
                name={friend.fullName}
                image={friend.imageURL}
                occupation={friend.position}
                location={friend.nationality}
              />
            ))}
          </table>
      }  
      </Wrapper>
    );
  }
}

export default App;
