import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='foter'>
      <div className='logo'><img src="pics/milk.png" style={{width:150,height:100}}/></div>
      <h4 class="text-center mt-3 p-4">We Provide Natural Dairy Products For You!</h4>
     {/* column div starts */}
     <div class="container">
  <div class="row">
    <div class="col text-center">
<p><span>Emai</span>l-Us</p>
<p>MilkProducts@gmail.com</p>
    </div>
    <div class="vl"></div>
    <div class="col  text-center">
    <p><span>Addr</span>ess</p>
    <p>Bahawalpur,Street#4,093746</p>
    </div>
    <div class="vl"></div>
    <div class="col  text-center">
    <p><span>Pho</span>ne</p>
    <p>+92 130 589 7456</p>
    </div>
  </div>
  </div>
      

      {/* social media icons div start */}
      <div className='icons'>
      <img src="pics/soccc.png" style={{height:110}}/>
      </div>
     {/* div ends */}
</div>  
      </>
  )
}

export default Footer


















