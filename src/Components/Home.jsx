import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Home.css';
import Result from './Result';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('');
  const resultRef = useRef(null); // Reference for the Result component

  // Scroll to Result component whenever books update
  useEffect(() => {
    if (books.length > 0 && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [books]);

  // Function to fetch books
  const handleSearch = async (query, type = '') => {
    const url = `http://localhost:5001/api/books?query=${query}&type=${type}`;

    try {
      const response = await axios.get(url);
      setBooks(response.data.items || []);
      setSearchCategory(query);

      // Scroll to the Result component after fetching data
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchByType = (type) => {
    if (searchQuery.trim() !== '') {
      handleSearch(searchQuery, type);
    }
  };

  return (
    <div>
      <h1 className='title'>Welcome to the Exploration of the Cosmos</h1>
      <p>Here you can find your favorite books and add them to your shelf</p>

      <nav className="navbar">
        <div className="search-container">
        <DropdownButton
            id="dropdown-basic-button"
            title={searchType || 'Search by'}
            variant="secondary"
            className="dropdown-button"
          >
            <Dropdown.Item onClick={() => {handleSearchByType('name'); setSearchType('Book Name')}}>
              Book Name
            </Dropdown.Item>
            <Dropdown.Item onClick={() => {handleSearchByType('author'); setSearchType('Author')}}>
              Author
            </Dropdown.Item>
          </DropdownButton>
          <input
            type="text"
            className="search-input"
            placeholder="Search books..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button
            className="search-button"
            onClick={() => handleSearchByType('name')}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </nav>

      <div className='genre-container'>
        <h2>Choose the books from the following genres:</h2>
        <button className="genre-button" onClick={() => handleSearch('adventure', 'genre')}>Adventure</button>
        <button className="genre-button" onClick={() => handleSearch('fantasy', 'genre')}>Fantasy</button>
        <button className="genre-button" onClick={() => handleSearch('mystery', 'genre')}>Mystery</button>
        <button className="genre-button" onClick={() => handleSearch('romance', 'genre')}>Romance</button>
        <button className="genre-button" onClick={() => handleSearch('science fiction', 'genre')}>Science Fiction</button>
        <button className="genre-button" onClick={() => handleSearch('thriller', 'genre')}>Thriller</button>
      </div>

      <div className='emotion-container'>
        <h2>Choose the books based on the emotions you feel today:</h2>
        <button className="emotion-button happy" onClick={() => handleSearch('happy', 'emotion')}>Happy</button>
        <button className="emotion-button sad" onClick={() => handleSearch('sad', 'emotion')}>Sad</button>
        <button className="emotion-button anxiety" onClick={() => handleSearch('anxiety', 'emotion')}>Anxiety</button>
        <button className="emotion-button motivated" onClick={() => handleSearch('motivated', 'emotion')}>Motivated</button>
        <button className="emotion-button inspire" onClick={() => handleSearch('inspirational', 'emotion')}>Inspirational</button>
      </div>

       {/* Reference the Result component */}
       <div ref={resultRef}>
        <Result books={books} searchCategory={searchCategory} />
       </div>
    </div>
  );
};

export default Home;


