import { useState, useEffect } from 'react'
import './Gallery.css'

function Gallery() {
  const [current, setCurrent] = useState(0)

  const pizzaImagesList = [
    {
      url: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&h=600&fit=crop&crop=center",
      name: "Margherita Classic"
    },
    {
      url: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop&crop=center",
      name: "Pepperoni Supreme"
    },
    {
      url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop&crop=center",
      name: "Garden Fresh Veggie"
    },
    {
      url: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&h=600&fit=crop&crop=center",
      name: "Artisan Supreme"
    },
    {
      url: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&h=600&fit=crop&crop=center",
      name: "Mushroom & Herb"
    },
    {
      url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop&crop=center",
      name: "Classic Cheese"
    },
    {
      url: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=800&h=600&fit=crop&crop=center",
      name: "Mediterranean Delight"
    },
    {
      url: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&h=600&fit=crop&crop=center",
      name: "Spicy Pepperoni"
    },
    {
      url: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=800&h=600&fit=crop&crop=center",
      name: "White Sauce Gourmet"
    }
  ]

  const totalImages = pizzaImagesList.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev === totalImages - 1) {
          return 0
        } else {
          return prev + 1
        }
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [totalImages])

  const gotoSlide = (idx) => {
    setCurrent(idx)
  }

  const goPrev = () => {
    setCurrent((prev) => {
      if (prev === 0) {
        return totalImages - 1
      } else {
        return prev - 1
      }
    })
  }

  const goNext = () => {
    setCurrent((prev) => {
      if (prev === totalImages - 1) {
        return 0
      } else {
        return prev + 1
      }
    })
  }

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Our Delicious Creations</h2>
        </div>

        <div className="gallery-slider">
          <div className="gallery-main">
            <button className="gallery-nav prev" onClick={goPrev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            <div className="gallery-image-container">
              <img 
                src={pizzaImagesList[current].url} 
                alt={pizzaImagesList[current].name}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3>{pizzaImagesList[current].name}</h3>
              </div>
            </div>

            <button className="gallery-nav next" onClick={goNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          </div>

          <div className="gallery-controls">
            <div className="gallery-dots">
              {pizzaImagesList.map((item, idx) => (
                <button
                  key={idx}
                  className={`gallery-dot ${idx === current ? 'active' : ''}`}
                  onClick={() => gotoSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery