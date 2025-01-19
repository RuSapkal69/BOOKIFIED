import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <h1 className='hero-title'>
          Welcome to the world of books. Here you can find your favorite books.
        </h1>
        <h1 className='rubik-vinyl-regular'>BOOKIFIED</h1>
        <div class="book">
	        <div class="book__pg-shadow"></div>
	        <div class="book__pg"></div>
	        <div class="book__pg book__pg--2"></div>
	        <div class="book__pg book__pg--3"></div>
	        <div class="book__pg book__pg--4"></div>
          <div class="book__pg book__pg--5"></div>
        </div>
        <div>
          <p>This Web page is the home for all book lovers. Come explore and find your books which express your thoughts and feelings. Shape your mind with the best books.</p>
          <button className='explore-button'
          onClick={() => {
            window.location.href = "#home";
          }}>
            Explore
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero
