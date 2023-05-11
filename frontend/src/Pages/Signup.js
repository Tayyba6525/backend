import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  // const [errorMsg, setErrorMsg] = useState(false);
  const navigage = useNavigate();

  const saveData = async(e) =>{
    // if(!name || !email || !password){
    //   setErrorMsg(true)
    //   return false
    // }
    e.preventDefault();
    let abcd = await fetch("http://localhost:8000/user",{
      method: 'POST',
      body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    abcd = await abcd.json();
    setData(abcd);
    navigage('/login')
  }

  return (
 

<section className="vh-100">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius:30, marginTop:40,marginBottom:40}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-4 text-primary">Create an account</h2>
              <form>
                <div className="form-outline mb-4 text-primary">
                  <input type="text" 
                  required
                  onChange={(e)=>setName(e.target.value)}
                  id="form3Example1cg" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                </div>
                <div className="form-outline mb-4 text-primary">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={(e)=>setEmail(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                </div>
                <div className="form-outline mb-4 text-primary">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg"  onChange={(e)=>setPassword(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>
                {/* <div className="form-outline mb-4 text-primary">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                </div> */}
               <div className="rot">
                  <button onClick={saveData} type="submit" className="btn btn-block btn-lg gradient-custom-4 text-body w-100 text-primary">Register</button>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>










   
  )
}

export default Signup