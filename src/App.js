// import { AirlineSeatLegroomExtraOutlined } from '@material-ui/icons';
import React, { useState,useEffect } from 'react'
import { Navbar } from './components';
import Home from './pages/Home';
// import CheckoutForm from './components/CheckForm/server';
// import { commerce } from './lib/commerce';
import { Routes,Route} from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';
import Footer from './components/Footer';
import Products from './pages/Products';
import Carts from './pages/Carts';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SingleProduct from './pages/SingleProduct';

// import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// "@chec/commerce.jsx": "^2.8.0",
//     "@material-ui/core": "^4.12.4",
//     "@material-ui/icons": "^4.11.3",
//     "@stripe/react-stripe-js": "^1.9.0",
//     "@stripe/stripe-js": "^1.32.0",


const App = () => {
  const [products, setProducts] = useState();
  const [productsPanelData, setProductsPanelData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
    // const [stripe, setStripe] = useState(stripePromise);
  
    const [clientSecret, setClientSecret] = useState("");
    const [paymentIntentId, setPaymentIntentId] = useState("");
    // const location

    useEffect(() => {
     (async function () {
          
        //  const paymentIntent = await Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY).paymentIntents.create({
        //      amount: 1440,
        //      currency: "usd",
        //      payment_method_types: ['card'],
        //      receipt_email: 'ovuobachidera18@gmail.com',
        //      description: '3% of your purchase goes toward our ocean cleanup effort!',
             
        //     });
        //  setClientSecret(paymentIntent.client_secret)
        //  setPaymentIntentId(paymentIntent.id);
        //  console.log(paymentIntentId)

      //   const prices = await Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY).prices.list({
      //     active: true,
      //     limit:20,
      //     expand:['data.product']
      //  });
       
       const products = await Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY).products.list({
       limit: 20,
       });
      //  console.log(prices,products)
        
       const productsData = products.data.reduce((total,item) => {
         return [...total,{image:item.images[0], text:Object.keys(item.metadata).find((item)=>item !== 'front'),name:item.name,price_id:item.default_price,desc:item.description,metadata:item.metadata,id:item.id}]
       },[])
          setProductsPanelData(productsData.filter((item) => item.metadata.front === 'yes'))
          setProductsData(productsData)
        })()
        return async () => {
            // const paymentIntent = await Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY).paymentIntents.cancel(paymentIntentId)
        }

    }, [])

        const appearance = {
        theme: 'flat',
        };
         const options = {
           clientSecret,
           appearance,
         };
  




  
    
    // const fetchProducts = async () => {
    //     const { data } = await commerce.products.list({
    //         limit:113
    //     });
    //     setProducts(data);
    //     console.log(data);
    // }
    // const fetchCart = async () => setCart(await commerce.cart.retrieve());
    // useEffect(() => {
    //     fetchProducts();
    //     fetchCart();
    //     console.log(cart);
    // }, [])
    // const handleAddCart = async (productId,quantity) => {
    //     const item = await commerce.cart.add(productId, quantity)
    //     setCart(item);
    // }
    

    // const handleUpdateQty = async (productId,quantity) => {
    //     const cart = await commerce.cart.update(productId, { quantity })
    //     setCart(cart);
       
    // }
    // const removeItem = async (productId) => {
    //     const cart = await commerce.cart.remove(productId);
    //     setCart(cart);
    // }

    
    // // const refreshCart = async () => {
    // //     const newCart = await commerce.cart.refresh();
    // //     setCart(newCart);
    // // }
    
    // const clearCart = async () => {
    //     const cart = await commerce.cart.empty();
    //     setCart(cart);
    // }
    // const handleCaptureCheckOut = async (checkoutTokenId,newOrder) => {
    //      try {
    //          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    //          console.log(incomingOrder)
    //          setOrder(incomingOrder)
    //          clearCart()
    //      } catch (error) {
    //          setErrorMessage(error.data.error.message);
    //          console.log(error)
    //      }
    //  }
 
    
  return (
      <div>
      <Navbar/>
      <div className='bg-yellow-300'>
      <Routes>
            <Route exact path='/' element={<Home productsPanelData={productsPanelData} products={productsData} />} />
            <Route path='/products' element={<Products products={productsData} />}></Route>
          <Route  path='/signin' element={<SignIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
          <Route  path='/singleproduct/:id' element={<SingleProduct />}></Route>
          <Route  path='/carts' element={<Carts />}></Route>
      </Routes>    
      </div>
        <Footer/>
      </div>
      )
}

export default App
// <Checkout cart={cart}
//    order={order}
//       onCaptureCheckout={handleCaptureCheckOut}
//           error={errorMessage}
//           setOrder={setOrder}
//       />
        //   <Navbar total={cart.total_items} />
        //       <Route exact path='/' element={<Products products={products} handleAddCart={handleAddCart} />}/>
        //       <Route path='/cart' element={<Cart cart={cart}
        //           handleUpdateQty={handleUpdateQty}
        //           removeItem={removeItem}
        //           clearCart={clearCart}
              
        //       />} />  
      //   <Route
      //   path='/checkout'
      //   element={
      //        clientSecret && (
      //     <Elements options={options} stripe={stripePromise}> 
      //     <CheckoutForm clientSecret={clientSecret} paymentIntentId={paymentIntentId} />        
      //     </Elements>)
      // } />