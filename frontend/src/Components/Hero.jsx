import { useEffect } from "react"
import "./Hero.css"

const Hero = () => {
  // Add scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")
      elements.forEach((element) => {
        const position = element.getBoundingClientRect()
        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add("animate-fade-in")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="hero-container">
      <h1 className="hero-title animate-on-scroll">
        Welcome to the world of books. Here you can find your favorite books.
      </h1>
      <h1 className="rubik-vinyl-regular animate-on-scroll">BOOKIFIED</h1>

      <div className="book-container">
        <div className="book">
          <div className="book__pg-shadow"></div>
          <div className="book__pg"></div>
          <div className="book__pg book__pg--2"></div>
          <div className="book__pg book__pg--3"></div>
          <div className="book__pg book__pg--4"></div>
          <div className="book__pg book__pg--5"></div>
        </div>
      </div>

      <div className="animate-on-scroll">
        <p>
          This Web page is the home for all book lovers. Come explore and find your books which express your thoughts
          and feelings. Shape your mind with the best books.
        </p>
        <button
          className="explore-button"
          onClick={() => {
            window.location.href = "#home"
          }}
        >
          Explore
        </button>
      </div>
    </div>
  )
}

export default Hero

