import React, {useEffect, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

const ShowProducts = () => {
    const navigate = useNavigate()
    
const [uData, setUData] = useState([]);
    
const userData = async() =>{
    let res = await fetch("http://localhost:8000/product")
    res = await res.json();    
    setUData(res)
}
 
console.log(uData)

    useEffect(() => {
        userData()
    }, [])

    const deleteUser = async(id) =>{
        console.log("id : ", id)
        let res = await fetch("http://localhost:8000/product/"+id,{
            method: "delete"
        })
        res = await res.json()
        if(res){
            userData()
        }

    }
    const back = ()=>{
        navigate("/admin-Dashboard")
    }
    const add = ()=>{
        navigate("/addproduct")
    }


  return (
    <div>
        <div className='w-25 px-3' style={{marginTop:100}}>

<button onClick={back} className='  btn btn-outline-primary ms-auto px-4 rounded-pill' style={{width:150}}>DashBoard</button>
<button onClick={add} className='  btn btn-outline-primary ms-auto px-4 rounded-pill'  style={{width:150}}>Add Product</button>
</div>
<h1 className='display-0 fw-bold my-4 text-primary text-center'>All Products</h1>
<hr />
    <table  class="table table-hover w-75 mx-auto">
    <thead>
    <tr className='bg-primary'>
      <th scope="col">Sr.No.</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Image</th>
      <th scope="col">price</th>
      <th scope="col"></th>
    </tr>
  </thead>
    <tbody>
        {
            uData.map((user, ind)=>{
                return(
                    <>
                        <tr key={user._id}>
                            <th scope="row">{ind+1}</th>
                            <td>{user.title}</td>
                            <td>{user.description}</td>
                            <td className='px-5 py-2 border border-black'> <img style={{height:"20px", width:"30px"}} src={`http://localhost:8000/uploads/${user.image}`} alt='img'/> </td>
                            
                            <td>{user.price}</td>
                            <td>
                                <Link to={`/editform/${user._id}`} className='btn btn-success btn-sm me-2'>Edit</Link>
                                <a onClick={()=>deleteUser(user._id)} className='btn btn-danger btn-sm'><i class="fa fa-trash" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                    </>
                )
            })
        }
        </tbody>
    </table>



    </div>
  )
}

export default ShowProducts
