import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
// import ItemCount from './components/ItemCount';
import ItemDetailCointainer from './components/ItemDetailCointainer'
// import ItemListContainer from './components/ItemListContainer';


// const onAdd =(param) => {console.log(`La cantidad comprada es ${param}`)}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
        {/* <ItemListContainer/> */}
        <ItemDetailCointainer/>
        
        {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
        
      </header>
    </div>
  );
}

export default App;