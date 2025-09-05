import './App.css';
import Header from './Header';
import Favorites from './Favorites';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Favorites />
      </main>
      <Footer />
    </div>
  );
}

export default App;


