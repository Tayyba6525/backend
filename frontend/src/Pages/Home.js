import React from 'react'

const Home = () => {
  return (
    <div>
 <div id="carousel" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="/home" data-slide-to={0} className="active" />
    <li data-target="/home" data-slide-to={1}/>
    <li data-target="/home" data-slide-to={2}/>
    <li data-target="/home" data-slide-to={3}/>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active"> 
      <img className="d-block w-100" src="pics/ddd.png" alt="First slide" />
    </div>
    <div className="carousel-item ">
      <img className="d-block w-100" src="pics/bb.png" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" 
      
      
      src="pics/tt.png" alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="pics/ygrt.png" alt="Fourth slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

{/* welcome div start */}
<div className='wlcm container'>
   {/* <img src="pics/b11.png"/>  */}
  <div className="txt"><h1 class="mb-3">Welcome To Our Farm!</h1>
 <h4> Here you will find a wide range of healthy and fresh dairy products that were proudly produced at our farm.</h4>
 </div>
</div>

{/* nxt div start */}
<div className='boxs'>
  <div className='boxs1'><img src="pics/f1.jpg"/><h5 class="mt-2 text-primary">Our Dairy Farm</h5></div>
  <div className='boxs2'><img src="pics/cow1.jpg"/><h5 class="mt-2 text-primary">Meet Our Animals</h5></div>
  <div className='boxs3'><img src="pics/aa.jpg"/><h5 class="mt-2 text-primary">Our Organic Food</h5></div>
</div>






</div>





  )
}

export default Home