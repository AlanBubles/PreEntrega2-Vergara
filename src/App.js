
import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';
import CarProvaider from './Context/CarProvaiden';


function App() {
  return (

    <CarProvaider>
    <BrowserRouter>
       <Navbar/>
       <Routes>
                <Route
                    path="/"
                    element={
                        <ItemListContainer  />
                    }
                />
                <Route
                    path="/categoria/:categoryName"
                    element={
                        <ItemListContainer  />
                    }
                />
                <Route path="/detail/:id" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart />} />
                
            </Routes>
    </BrowserRouter >
    </CarProvaider>

  );
}

export default App;
