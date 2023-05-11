import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const empty = {
    email: "",
    password: ""
  }
  // state for handle the login inputs

  const [handle, setHandle] = useState(empty)

  const loginHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value })
    console.log(handle)
  }



  //function for login
  const loginApi = async () => {
    if (handle.email == "" || handle.password == "") {
      alert("Please Enter the Fields First")
    } else {
      let record = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(handle)
      })
      record = await record.json()
      if (record.message == "Login Successfully") {
        // store id in SessionStorage
        sessionStorage.setItem("userId", record.LoginUser._id)
        sessionStorage.setItem("userEmail", record.LoginUser.email)
        // sessionStorage.setItem("userPassword",record.LoginUser.email)
        let adminemail = sessionStorage.getItem("userEmail")
        // let adminPassword = sessionStorage.getItem("userPassword")
        if (adminemail == "admin@gmail.com") {

          alert("Admin Login Successfully")
          navigate("/admin-Dashboard")
        } else {
          alert("Login Successfully")
          navigate("/product")
        }


      } else {
        alert("Username and Password is invalid")
      }
    }
  }



  return (
    <section className="vh-100">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 30, marginTop: 40, marginBottom: 40 }}>
                <div className="card-body p-5">
                  <form onSubmit={(e) => { e.preventDefault() }}>
                    {/* <div className="form-outline mb-4 text-primary">
                    <input type="text" id="form1" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form1">Enter Your Name</label>
                  </div> */}
                    <div className="form-outline mb-4 text-primary">
                      <input name='email' onChange={loginHandler} type="email" id="form1" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example3cg">Enter Your Email</label>
                    </div>
                    <div className="form-outline mb-4 text-primary">
                      <input name='password' onChange={loginHandler} type="password" id="form1" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form1">Password</label>
                    </div>
                    <div className="rot">
                      <button onClick={loginApi} className="btn btn-block btn-lg gradient-custom-4 text-body w-100 text-primary">Log In</button>
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

export default Login