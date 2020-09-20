import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Country from './components/Country';


function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
      const newCart = [...cart, country];
      setCart(newCart);
  };

  return (
    <div className='App'>
     <h1>Country Loaded: {countries.length}</h1>
     <h3>Country Added: {cart.length}</h3>
     <Cart cart={cart}></Cart>
       {
         countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.numericCode}></Country>)
       }
    </div>
  );
}

export default App;
