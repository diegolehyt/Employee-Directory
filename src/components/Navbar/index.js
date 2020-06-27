import React from 'react'
import "./style.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    // background: 'gold',
    background: 'linear-gradient(to right, rgba(121, 16, 34, 1), rgba(255,0,0,0))'
    
  },
  titleS: {
    fontFamily: "'Abel', sans-serif",
    fontWeight: 'bold',
    color: 'gold',
    fontSize: '25px',
    marginTop: '-15px',
    display: 'inline'
  },
  imagen: {
    display: 'inline'
  }
}

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar () {
  return (
    <nav style={styles.navbarStyle} className='navbar'>
      <a style={styles.titleS} href='/'><img style={styles.imagen} src="https://iconarchive.com/icons/giannis-zographos/spanish-football-club/32/FC-Barcelona-icon.png" alt="Italian Trulli"/> FC BARCELONA - Management</a>
    </nav>
  )
}

export default Navbar
