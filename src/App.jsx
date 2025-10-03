import { useState } from 'react';
import { useEffect} from 'react';
import './App.css';
import CoffeeCard from './components/CoffeeCard.jsx';
import FilterTabs from './components/FilterTabs.jsx';
const URL = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';
function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const filteredItems = filter === "all" ? items : items.filter((p) => p.available);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
      .then((res) => res.json())       
      .then((data) => setItems(data))
      .catch((err) => setError(err.message));
  }, []); 

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <main className="page">
      <section className="hero"></section>
      <section className="collection">
        <div className="container">
          <div className="panel">
            <h2 className="panel-title">Our Collection</h2>
            <p className="panel-subtitle">
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
            <FilterTabs value={filter} onChange={setFilter}/>
            <div className="panel-cards">
            {filteredItems.map(item => (
              <CoffeeCard
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
                votes={item.votes}
                popular={item.popular}
                available={item.available}
              />
            ))}
            </div>
          </div>
        </div>
      </section>
      </main>
    )
}

export default App;
