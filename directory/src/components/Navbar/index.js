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
    background: 'linear-gradient(to right, rgba(255,0,0,1), rgba(255,0,0,0))',
    // backgroundImage: 'linear-gradient(rgba(26, 26, 131, 0.658), rgba(121, 16, 34, 0.616))',
    width: '122%',
    marginLeft: '-11%',
    opacity: '0.5'
  }
}

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar () {
  return (
    <nav style={styles.navbarStyle} className='navbar'>
      <a href='/'>Barcelona Management</a>
    </nav>
  )
}

export default Navbar
