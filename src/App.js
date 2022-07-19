import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
// import ItemCount from './components/ItemCount';
import ItemDetailCointainer from './components/ItemDetailCointainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';



// const onAdd =(param) => {console.log(`La cantidad comprada es ${param}`)}

function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer />}></Route>
              <Route path='/category/:id' element={<ItemListContainer />}></Route>
              <Route path='/item/:id' element={<ItemDetailCointainer />}></Route>       
        {/* <ItemListContainer/> */}
        {/* <ItemDetailCointainer/> */}
        </Routes>
        {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;