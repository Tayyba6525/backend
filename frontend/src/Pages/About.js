import React from 'react'

const About = () => {
  return (
    <div>
<div className='about'>
    <img src="pics/dairyy.png"/>
    <div class="centered">About Us</div>
  </div>  
{/* img div ends */}

<div class="container">

<div className="box11">
  <h3>Mission</h3>
  <p>Milk Products is in the business of fulfilling customer needs related to healthy
     well-being by offering quality food products by efficiently utilizing state of the 
     art technology &amp; human resource in a way that creates value for stakeholders &amp; for the farming 
     community of Pakistan.</p>  
 </div>
  
{/* 2nd div */}
 <div className="box22">
  <h3>Vision</h3>
  <p>To be the largest fresh foods brand in the region. </p>
  </div>
  </div>

  {/* members div start */}
  
 <div className='profil'>
    <h2 class="pt-2">Meet Our Farmers</h2>
<p>It's at the farm, in the store and on your table. Dairy is feeding people today for whatever comes tomorrow.</p>
<div className='pic'>
<img src="pics/images.jpg" alt="Avatar" class="avatar"/>
<img src="pics/f1.jpg" alt="Avatar" class="avatar"/>
<img src="pics/f2.jpg" alt="Avatar" class="avatar"/>
<img src="pics/f4.jpg" alt="Avatar" class="avatar"/>
<img src="pics/f5.jpg" alt="Avatar" class="avatar"/>
</div>

</div> 




{/* last closing div ends */}
    </div>
  )
}

export default About