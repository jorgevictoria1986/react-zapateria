import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';

import ItemListContainer from './components/ItemListContainer';

const onAdd =(param) => {console.log(`La cantidad comprada es ${param}`)}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
        <ItemListContainer greeting="Hola Mundo ItemListContainer!!!" />
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        {/* <ItemList items={productList} /> */}
      </header>
    </div>
  );
}

export default App;
