import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import SortButton from "./components/SortButton";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    search: "",
    results: []
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  sortByName = () => {
    function compare (a, b) {
      const bandA = a.name.toUpperCase();
      const bandB = b.name.toUpperCase();
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.sort(compare)
    console.log(friends.sort(compare));
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // const handleSearchChange = event => {
  //   const filter = event.target.value;
  //   const filteredList = developerState.users.filter(item => {
  //     let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
  //     console.log(filter, values)
  //   if(values.indexOf(filter.toLowerCase()) !== -1){
  //     return item
  //   };
  //   });

  //   setDeveloperState({ ...developerState, filteredUsers: filteredList });
  // };
  // --------------------------------------------- input ---------------------------------
  handleInputChange = event => {
    this.setState({ search: event.target.value, results: [] });
    // console.log(this.state.search)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const results = friends.filter(friend => friend.name === this.state.search)
    this.setState({ results: results });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
            search={this.state.search}
        />
        <SortButton sortByName={this.sortByName}></SortButton>
      {
        this.state.search 
        ? <table>
            <tr>
              <th>Name</th>
              <th>Occupation</th>
              <th>Location</th>
            </tr>
            {this.state.results.map(friend => (
              <tr>
                <td>{friend.name}</td>
                <td>{friend.occupation}</td>
                <td>{friend.location}</td>
              </tr>  
            ))}

          </table> 
        : <table>
            <tr>
              <th>Name</th>
              <th>Occupation</th>
              <th>Location</th>
            </tr>
            {this.state.friends.map(friend => (
              <tr>
                <td>{friend.name}</td>
                <td>{friend.occupation}</td>
                <td>{friend.location}</td>
              </tr>  
            ))}
          </table>
      }  
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
