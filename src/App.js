import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart'
// import ItemCount from './components/ItemCount';
import ItemDetailCointainer from './components/ItemDetailCointainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import CartContextProvider from './components/CartContext';



// const onAdd =(param) => {console.log(`La cantidad comprada es ${param}`)}

function App() { 
  return (
    <div className="App">
      <header className="App-header">
        
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer />}></Route>
              <Route path='/category/:id' element={<ItemListContainer />}></Route>
              <Route path='/item/:id' element={<ItemDetailCointainer />}></Route> 
              <Route path='/cart' element={<Cart />}></Route>      
        {/* <ItemListContainer/> */}
        {/* <ItemDetailCointainer/> */}
        </Routes>
        {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
        </BrowserRouter>
        </CartContextProvider>


      </header>
    </div>
  );
}

export default App;