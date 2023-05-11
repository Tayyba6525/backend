import React from 'react'

function Cart(props) {
    const {CartItem}= props
    const Price= CartItem.reduce((a,c)=>a+(c.qty*c.price),0)
    const Shipment_Charges= 0;
    const mydata= Price>=5000?0:Shipment_Charges;
    const total= mydata+Price;
  return (
    <div className='container'>
    <br/>
    <br/>
    <br/><br/>
        <table  className='table table-bordered'>
<tr>
    <th>Name</th>
    <th>Price</th>
    <th>Add</th>
    <th>Qty</th>
    <th>Remove</th>
    <th>Image</th>
   </tr>
{
    CartItem.map((item)=>(
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><button className='btn btn-primary'>+</button></td>
            <td>{item.qty}</td>
            <td><button className='btn btn-danger'>-</button></td>
            <td><img style={{height:"75px",width:"200px"}} src={item.image}/></td>
                 </tr>
    ))
}

        </table>
        <br/>
        <br/>
        <br/>
       <p> Price is {Price}</p>
        <p>Shipment charges= {mydata}</p>
        <p>Total charges are ={total}</p>
    </div>
  )
}

export default Cart
