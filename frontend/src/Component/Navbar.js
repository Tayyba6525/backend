import React from 'react';
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate()
  let adminemail = sessionStorage.getItem("userEmail")
  const sesionExpire = ()=>{
    sessionStorage.clear()
    navigate("/login")
  }

  return (
    // fixed navbar
    <>
    <div>
            <ul className="nav">
      <li>MilkProducts@gmail.com</li>  
      <li>+92 130 589 7456</li>  
      <li>Mon - Fri 09:00 - 18:00</li>
      </ul>
  </div>
   {/* 2nd main navbar */}

<div className='nav2'>
<div className='box1'>
  <img src="pics/milk.png"/>
</div>
{/* pages links */}
 <div className='box2'>

<nav class="navbar navbar-expand-lg">
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/home">Home</Link>
      <Link  class="nav-item nav-link active" to="/product">Our Products</Link>
      <Link class="nav-item nav-link active" to="/contact">Contact Us</Link>
      <Link class="nav-item nav-link active" to="/about">About Us</Link>
    </div>
  </div>
</nav>
</div>
{/* div ends */}

{/* button starts */}
{(adminemail)?
<button onClick={sesionExpire} className='btn btn-primary mt-4'>Logout</button>:
<div className='btn'>
<Link to={'/signup'}><button className='btn btn-primary'>Sign Up</button></Link>
<Link to={'/login'}><button className='btn btn-primary'>Log In</button></Link>
</div>
}
{/* cart div start */}
<div className='cart'>
<button className="btn btn-warning w-100 h-100" type="submit">
<i class="fa-solid fa-cart-shopping"></i>
</button>
</div>
{/* div ends */}
</div>

</>
  
  )
}

export default Navbar