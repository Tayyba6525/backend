import React from 'react'
import { useNavigate } from "react-router-dom"

const AdminDashBoard = () => {
    const navigate = useNavigate()
    const addProduct = ()=>{
      navigate("/addproduct")
    }
    const showProduct = ()=>{
      navigate("/allproducts")
    }
    const showUsers = ()=>{
      navigate("/allusers")
    }

  return (
   <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="d-flex justify-content-around text-center">
    <button onClick={addProduct} type='button' className='btn btn-primary'>Add Product</button>
    <button onClick={showProduct} type='button' className='btn btn-primary'>All Products</button>
    <button onClick={showUsers} type='button' className='btn btn-primary'>Show All Users</button>
</div>

<br/>
    <br/>
    <br/>
<br/>
<br/>
    </>
  )
}

export default AdminDashBoard
