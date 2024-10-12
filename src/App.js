import React from 'react';
import './App.css'; // Assuming you still want to use some global styles
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Favorites />
      <Footer />
    </div>
  );
}

export default App;



