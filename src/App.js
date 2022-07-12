import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';

import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
        <ItemListContainer greeting="Hola Mundo ItemListContainer!!!" />
        <ItemCount stock={5} initial={1} />

      </header>
    </div>
  );
}

export default App;
