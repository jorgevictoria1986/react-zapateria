import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CartWidget />
        <ItemListContainer greeting="Hola Mundo ItemListContainer!!!" />
      </header>
    </div>
  );
}

export default App;
