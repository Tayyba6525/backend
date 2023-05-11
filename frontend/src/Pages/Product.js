import React, {useEffect, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'


const Product = () => {
  // const { product ,onAdd} = props;
  const navigate = useNavigate()
    
const [uData, setUData] = useState([]);
    
const userData = async() =>{
    let res = await fetch("http://localhost:8000/product")
    res = await res.json();    
    setUData(res)
}
    useEffect(() => {
        userData()
    }, [])

  return (
<div>
{/* overall div */}
<div className='prod'> <img src="pics/bb.png"/>
<div class="centered1">Our Products</div>
</div>
{/* product div starts */}

<div className='productss'>
  <h3 className='text-center pt-4 text-primary'>Select Your Milk Product!</h3>
  <br/>
  {
    uData.map((items)=>{
return(
  <>
  <div className='prod1'>
  <img src={`http://localhost:8000/uploads/${items.image}`}/>
<h3>{items.title}</h3>
{/* <h3>{items.description}</h3> */}
<h5>Price:{items.price}</h5>
<div className='butn'><Link to={"/cart"}><button  
// onClick={()=>onAdd(item)}
 href="#" class="btn">Add to Cart</button></Link></div>
</div>
  

  </>
)
    })
  }
{/* <div className='prod1'>
 <button onClick={()=>onAdd(item)} href="#" class="btn btn-primary">
               Add To Cart
                </button>
  <img src="pics/images2.jpg"/>
<h3>Milk</h3>
<h5>Price:150/Litre</h5>
<div className='butn'><button class="btn">Add to Cart</button></div>
</div> */}

{/* nxt 2nd div */}
{/* <div className='prod2'><img src="pics/yogrt.jpg"/>
<h3>Yoghurt</h3>
<h5>Price:180/Kg</h5>
<div className='butn'><button class="btn">Add to Cart</button>
</div>
</div> */}

{/* 3rd div start */}
{/* <div className='prod3'><img src="pics/raita.jpg"/>
<h3>Raita</h3>
<h5>Price:50/Small</h5>
<div className='butn'><button class="btn">Add to Cart</button>
</div>
</div> */}

{/* 4th div start */}
{/* <div className='prod4'><img src="pics/ches.jpg"/>
<h3>Cheese</h3>
<h5>Price: Starting from 100 </h5>
<div className='butn'><button class="btn">Add to Cart</button>
</div>
</div> */}
{/* 5th div start */}
{/* <div className='prod5'><img src="pics/ice.jpg"/>
<h3>Ice Cream</h3>
<h5>Price:Starting From 50</h5>
<div className='butn'><button class="btn">Add to Cart</button>
</div>
</div> */}
{/* 6th div start */}
{/* <div className='prod6'><img src="pics/btr.jpg"/>
<h3>Butter Milk</h3>
<h5>Price:50/Glass</h5>

<div className='butn'><button class="btn">Add to Cart</button>
</div>
</div> */}

  {/* div productss ends */}
</div>


{/* whole div ends */}
    </div>
  )
}

export default Product