import pizzas from '../data/pizzas'
import PizzaCard from './PizzaCard'

function MenuSection() {
  return (
    <section
      className="menu-section"
      id="menu"
    >
      <h2>Cardápio</h2>

      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
          />
        ))}
      </div>
    </section>
  )
}

export default MenuSection
