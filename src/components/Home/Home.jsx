import React from 'react';
import './Home.css';

export function Home() {
    return (  <div  className='container'>
        <header>
          <h1>Ласкаво просимо до нашої компанії!</h1>
          <p>Ми надаємо послуги з оренди автомобілів у всіх регіонах України.</p>
        </header>
        <main>
          <section>
            <h2>Наші послуги</h2>
            <p>Ми пропонуємо великий вибір автомобілів різних марок та класів для оренди на будь-який термін.</p>
          </section>
          {/* Додайте інші розділи та інформацію про ваші послуги */}
        </main>
        <footer>
          <p>&copy; 2023 AutoLeasing.</p>
        </footer>
      </div>)
  }