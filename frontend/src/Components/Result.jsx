import React from 'react';
import './Result.css';

const Result = ({ books = [], searchCategory }) => {
  return (
    <div className="result-container">
      {books.length > 0 && (
        <>
          <h2>Results for "{searchCategory.charAt(0).toUpperCase() + searchCategory.slice(1)}":</h2>
          {books.map((book) => (
            <div className="result-item" key={book.id}>
              <h3>{book.volumeInfo.title}</h3>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
              <p>{book.volumeInfo.authors?.join(', ')}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Result;

