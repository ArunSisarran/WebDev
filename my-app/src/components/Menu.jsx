import { useEffect } from 'react'
import './Menu.css'

function Menu({ addToCart }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pizzaList = [
    {
      id: 1,
      name: "Margherita Classic",
      description: "Fresh mozzarella, San Marzano tomatoes, fresh basil, extra virgin olive oil",
      price: "$18",
      priceNum: 18,
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Pepperoni Supreme",
      description: "Premium pepperoni, mozzarella cheese, house-made tomato sauce",
      price: "$22",
      priceNum: 22,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Garden Fresh Veggie",
      description: "Bell peppers, mushrooms, red onions, olives, fresh tomatoes, mozzarella",
      price: "$21",
      priceNum: 21,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "Artisan Supreme",
      description: "Prosciutto, arugula, cherry tomatoes, fresh mozzarella, balsamic glaze",
      price: "$28",
      priceNum: 28,
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      name: "Mushroom & Herb",
      description: "Wild mushrooms, fresh herbs, fontina cheese, truffle oil drizzle",
      price: "$26",
      priceNum: 26,
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      name: "Classic Cheese",
      description: "Our signature cheese blend with house-made tomato sauce on wood-fired crust",
      price: "$16",
      priceNum: 16,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 7,
      name: "Mediterranean Delight",
      description: "Feta cheese, Kalamata olives, sun-dried tomatoes, fresh spinach, olive oil",
      price: "$23",
      priceNum: 23,
      image: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 8,
      name: "Spicy Pepperoni",
      description: "Double pepperoni, jalapeños, crushed red pepper, mozzarella, spicy sauce",
      price: "$24",
      priceNum: 24,
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 9,
      name: "White Sauce Gourmet",
      description: "Creamy white sauce, ricotta, mozzarella, fresh spinach, roasted garlic",
      price: "$25",
      priceNum: 25,
      image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
  };

  const pizzaItems = pizzaList.map(pizza => (
    <div key={pizza.id} className="menu-item">
      <div className="menu-item-image">
        <img src={pizza.image} alt={pizza.name} />
        <div className="price-badge">{pizza.price}</div>
      </div>
      <div className="menu-item-content">
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>
        <button className="add-to-cart-btn" onClick={() => handleAddToCart(pizza)}>
          Add to Cart
        </button>
      </div>
    </div>
  ));

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1>Our Menu</h1>
          <p>Handcrafted pizzas made with passion and the finest ingredients</p>
        </div>
      </section>

      <section className="menu-section">
        <div className="menu-container">
          <div className="menu-header">
            <h2>Wood-Fired Pizzas</h2>
            <p>All pizzas are 12" and made with our signature wood-fired crust</p>
          </div>
          
          <div className="menu-grid">
            {pizzaItems}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu