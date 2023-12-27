import React from 'react'

export default function Contact(props) {
    const handleSubmission = ()=>{
        props.sendAlert("Details Submitted Successfully!!!","success");
    }
  return (
    <div className='container'>
      <form action='#'>
            <div className="form-grp">
                <label className='my-2 fs-4' htmlFor="Name">Name : </label>
                <br/>
                <input className='form-control' name='name' type="text" id="name" placeholder="Enter Your Name"/>
            </div>
            <div className="form-grp">
                <label className='my-2 fs-4' htmlFor="email">Email : </label>
                <br/>
                <input className='form-control' name='email' type="text" id="email" placeholder="Enter Your Email"/>
            </div>
            <div className="form-grp">
                <label className='my-2 fs-4' htmlFor="phone">Phone No. : </label>
                <br/>
                <input className='form-control' name='phone' type="number" id="phone" placeholder="Enter Your phone No."/>
            </div>
            <div className="form-grp">
                <label className='my-2 fs-4' htmlFor="message">Message : </label>
                <br/>
                <textarea className='form-control' name="messege" id="messege" cols="30" rows="10"></textarea>
            </div>
            <div className="form-grp">
                <button className="btn btn-primary my-2" onClick={handleSubmission}>Submit</button>
            </div>
        </form>
    </div>
  );
}
 