import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import countryList from '../data/countries.json'; 
import './SearchBar.css'; 

const FastFinderSearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (searchInput === '') {
      setFilteredCountries([]);
    } else {
      const matches = countryList.filter((country) =>
        country.country.toLowerCase().startsWith(searchInput.toLowerCase())
      );
      setFilteredCountries(matches);
    }
  }, [searchInput]);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    setSelectedCountry(null); 
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setSearchInput(country.country);
    setFilteredCountries([]); 
  };

  return (
    <div className="search-bar-container">
      {/* Dynamically change the webpage title based on input */}
      <Helmet>
        <title>{searchInput ? `Searching for ${searchInput}` : 'Fast Finder - Search for Countries'}</title>
      </Helmet>

      {/* Add Heading and Subheading */}
      <h1 className="search-bar-heading">Fast Finder</h1>
      <p className="search-bar-subheading">Quickly find information on countries around the world!</p>

      <label htmlFor="fast-finder" className="search-bar-label">Search for a country:</label>
      <input
        className="search-bar-input"
        type="text"
        id="fast-finder"
        value={searchInput}
        onChange={handleSearchInput}
        placeholder="Start typing a country..."
      />

      {filteredCountries.length > 0 && (
        <ul className="suggestions-list">
          {filteredCountries.map((country, idx) => (
            <li
              key={idx}
              className="suggestions-list-item"
              onClick={() => handleCountrySelection(country)}
            >
              {country.country}
            </li>
          ))}
        </ul>
      )}

      {selectedCountry && (
        <div className="country-info">
          <h3>Capital: {selectedCountry.capital}</h3>
        </div>
      )}
    </div>
  );
};

export default FastFinderSearchBar;
