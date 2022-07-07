import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
        <ItemListContainer greeting="Hola Mundo ItemListContainer!!!" />
      </header>
    </div>
  );
}

export default App;
