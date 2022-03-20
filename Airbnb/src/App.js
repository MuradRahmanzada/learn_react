import "./App.css";
import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import Data from "./component/data";

function App() {

  const cards = Data.map(item => {
    return (
      <Card
       key={item.id}
       {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
