import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Footer from './Component/Footer';
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import About from './Pages/About'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Cart from './Pages/Car';
import AdminDashBoard from './Admin/AdminDashBoard';
import AllUsers from './Admin/AllUsers';
import AddProduct from './Admin/AddProduct';
import ShowProducts from './Admin/ShowProducts';
import UpdateProduct from './Admin/UpdateProduct';
import PrivateRoutes from './Component/PrivateRoutes';

const App = () => {


  // const {product}=data;
  // // state for handling the products
  // const [CartItem, setCartItem]=useState([])
  // const onAdd=(product)=>{
  //   //assuming there are some items already in cart
  //   const exist = CartItem.find((x)=>x.id==product.id)
  
  //   if(exist){
  //     setCartItem(CartItem.map((x)=>x.id==product.id 
  //     ? {...exist,qty:exist.qty+1}:x))
  //     console.log(CartItem)
  
  //   }
  //    else{
  //     //adding new items
  //     setCartItem([...CartItem,{...product,qty:1}])
  //     console.log(CartItem)
  
  //   }
  // }






  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/product' element={<Product 
      // product={product} onAdd={onAdd}
      /> }/>
      <Route path='/cart' element={<Cart  
      // CartItem={CartItem}
      />}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      

      <Route element={<PrivateRoutes/>}>
      <Route path='/admin-Dashboard' element={<AdminDashBoard/>}/>
      <Route path="/allusers" element={<AllUsers/>} />
      <Route path="/addproduct" element={<AddProduct/>} />
      <Route path="/allproducts" element={<ShowProducts/>} />
      <Route path="/editform/:id" element={<UpdateProduct/>} />
      </Route>

      
     {/* <Signup/>  */}
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
  )
}

export default App