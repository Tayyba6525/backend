import React from 'react'

const Contact = () => {
  return (
  <div>
<div className='contact'>
<img src="pics/ddd.png"/>
{/* <div class="centered pr-5 display-5 text-danger">Contact Us</div> */}
</div>  
{/* img div ends */}
{/* form div starts */}
<div className='form1 container'>
<form className="container">
  <p className="h2 mb-4  text-center text-primary">Contact Us</p>
  {/* Name */}
  <input type="text" id="defaultContactFormName" className="form-control mb-4 border-primary" placeholder="Name" />
  {/* Email */}
  <input type="email" id="defaultContactFormEmail" className="form-control mb-4 border-primary" placeholder="E-mail" />
 
  
  {/* Message */}
  <div className="form-group">
    <textarea className="form-control mb-4 border-primary" id="exampleFormControlTextarea2" placeholder="Message" defaultValue={""} />
  </div>
  {/* Send button */}
  <button className="btn btn-primary mb-4" type="submit">Submit</button>
</form>
</div>
{/* Default form contact */}

{/* last div ends */}
    </div>
  )
}

export default Contact