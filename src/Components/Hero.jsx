import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <h3 className='hero-title'>
          Welcome to the world of books. Here you can find your favorite books.
        </h3>
        <h1 className='rubik-vinyl-regular'>BOOKIFIED</h1>
        <div>
          <p>This Web page is the home for all book lovers. Come explore and find your books which express your thoughts and feelings. Shape your mind with the best books.</p>
          <button className='explore-button'>
            Explore
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero
