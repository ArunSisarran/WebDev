import './Header.css'

function Header({ currentPage, setCurrentPage, cartCount }) {
  const isHomePage = currentPage === 'home'

  const smoothScroll = (e, targetid) => {
    e.preventDefault();
    const element = document.getElementById(targetid);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const goToSection = (sectionid) => {
    if (isHomePage) {
      const element = document.getElementById(sectionid);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionid);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  const goToMenu = () => {
    setCurrentPage('menu');
  };

  const goHome = () => {
    setCurrentPage('home');
  };

  const goToCart = () => {
    setCurrentPage('cart');
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <button onClick={goHome} style={{background: 'none', border: 'none', padding: 0}}>
            <h2>Crust & Co.</h2>
          </button>
        </div>
        <ul className="nav-links">
          {isHomePage ? (
            <>
              <li><a href="#home" onClick={(e) => smoothScroll(e, 'home')}>Home</a></li>
              <li><button onClick={goToMenu} className="nav-button">Menu</button></li>
              <li><a href="#about" onClick={(e) => smoothScroll(e, 'about')}>About</a></li>
              <li><a href="#gallery" onClick={(e) => smoothScroll(e, 'gallery')}>Gallery</a></li>
              <li><a href="#contact" onClick={(e) => smoothScroll(e, 'contact')}>Contact</a></li>
              <li>
                <button onClick={goToCart} className="nav-button cart-btn">
                  Cart ({cartCount})
                </button>
              </li>
            </>
          ) : (
            <>
              <li><button onClick={goHome} className="nav-button">Home</button></li>
              <li><button onClick={goToMenu} className="nav-button">Menu</button></li>
              <li><button onClick={() => goToSection('about')} className="nav-button">About</button></li>
              <li><button onClick={() => goToSection('gallery')} className="nav-button">Gallery</button></li>
              <li><button onClick={() => goToSection('contact')} className="nav-button">Contact</button></li>
              <li>
                <button onClick={goToCart} className="nav-button cart-btn">
                  Cart ({cartCount})
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header