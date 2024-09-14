// App.js
import React from 'react';
import './App.css';  // Import the CSS file for App styling
import SearchBar from './components/SearchBar'; // Import the SearchBar component

function App() {
  return (
    <div className="App">
      <h1>Fast Finder Search Bar</h1>
      <SearchBar /> {/* Render the SearchBar component */}
    </div>
  );
}

export default App;