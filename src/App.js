import { AirlineSeatLegroomExtraOutlined } from '@material-ui/icons';
import React, { useState,useEffect } from 'react'
import { Navbar, Products,Cart } from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
const App = () => {
    const [products, setProducts] = useState();
    const [cart, setCart] = useState({});
    

    const fetchProducts = async() => {
        const {data} = await commerce.products.list();
        setProducts(data);
        console.log(data);
    }
    const fetchCart = async () => setCart(await commerce.cart.retrieve());
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])
    const handleAddCart = async (productId,quantity) => {
        const item = await commerce.cart.add(productId, quantity)
        setCart(item);
        console.log(item);
    }
    
  return (
      <div>
          <Router>
              <Navbar total={cart.total_items} />
              <Routes>
                  <Route exact path='/' element={<Products products={products} handleAddCart={handleAddCart} />}/>
                  <Route path='/cart'element={<Cart cart={cart} />} />  
          </Routes>    
          </Router>
      </div>
  )
}

export default App