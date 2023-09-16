import React from 'react';
import './Home.css';

export function Home() {
    return (  <div  className='container'>
        <header>
          <h1>Ласкаво просимо до CarLease!</h1>
          <p>Ми надаємо послуги з оренди автомобілів у всіх регіонах України.</p>
        </header>
        <main>
          <section>
            <h2>Наші послуги</h2>
            <p>Ми пропонуємо великий вибір автомобілів різних марок та класів для оренди на будь-який термін.</p>
          </section>
        </main>
      </div>)
  }