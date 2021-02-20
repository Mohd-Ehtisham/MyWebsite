import React from 'react'
import Common from "./Common";

const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <div class="mb-3">
                         <label for="Fullname" class="form-label">Fullname</label>
                        <input type="text" class="form-control" id="Fullname" placeholder="Enter your name"/>
                    </div>
                    <div class="mb-3">
                         <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                         <label for="pno" class="form-label">Phone number</label>
                        <input type="number" class="form-control" id="pno"/>
                    </div>
                    <div class="mb-3">
                         <label for="exampleFormControlTextarea1" class="form-label">Enter Text</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default Contact
