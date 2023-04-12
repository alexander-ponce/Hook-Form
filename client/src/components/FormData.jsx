import React, { useState } from 'react' 
import Form from 'react-bootstrap/Form';
// import {Form} from 'react-bootstrap';

const FormData = () => {
  //getter is the first one and setter is the 2nd one in the [].
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfPassword, setConfPassword] = useState("");

    //Commented info below because we are not submitting the form, therefor we are not creating a user. We are displaying the data inputed into the form live as it is happening.
    // const createUser = (e) => {
        
    //   e.preventDefault();

    //   const newUser = {  firstName, lastName, Email,Password, ConfPassword };
    //     console.log("Welcome", newUser);
    // 	setFirstName("");
    // 	setLastName("");
    // 	setEmail("");
    // 	setPassword("");
    // 	setConfPassword("");


    // };
  
    return (
    <>


    
      <Form onSubmit={() => {}} className= "mt-5 container">

        <Form.Group class="form-sub" className="mb-3 row g-3" controlId="firstName">
         <div className="col-4" >
          <Form.Label>First Name: </Form.Label>
          </div> 
          <div className="col-5">
          <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={ (e) => setFirstName(e.target.value) }/>
          </div>
          {firstName.length < 3 && firstName.length > 0 ? (
            <p>First Name must be at least 3 characters</p>
          ) : null}
        </Form.Group>

        <Form.Group class="form-sub" className="mb-3 row g-3" controlId="lastName">
        <div className="col-4" >
          <Form.Label>Last Name: </Form.Label>
          </div> 
          <div className="col-5">
          <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={ (e) => setLastName(e.target.value) }/>
          </div> 
          {lastName.length < 3 && lastName.length > 0 ? (
            <p>Last Name must be at least 3 characters</p>
          ) : null}
        </Form.Group>

        <Form.Group class="form-sub" className="mb-3 row g-3" controlId="Email">
        <div className="col-4" >
          <Form.Label>Email address: </Form.Label>
          </div> 
          <div className="col-5">
          <Form.Control type="email" placeholder="Enter email" value={Email} onChange={ (e) => setEmail(e.target.value) }/>
          </div>
          {Email.length < 5 && Email.length > 0 ? (
            <p>Email must be at least 5 characters</p>
          ) : null}
          {/* {Email.length < 5 ? <p>Email must be at least 5 characters</p> : null} */}

        </Form.Group>
  
        <Form.Group class="form-sub" className="mb-3 row g-3" controlId="Password">
        <div className="col-4" >
          <Form.Label>Password: </Form.Label>
          </div> 
          <div className="col-5">
          <Form.Control type="password" placeholder="Password" value={Password} onChange={ (e) => setPassword(e.target.value) }/>
          </div>
          {Password.length < 8 && Password.length > 0 ? (
            <p>Password must be at least 8 characters</p>
          ) : null}
          {/* {Password.length < 8 ? (
            <p>Password must be at least 8 characters</p>
          ) : null} */}
        </Form.Group>

        <Form.Group class="form-sub" className="mb-3 row g-3" controlId="ConfPassword">
        <div className="col-4" >
          <Form.Label>Confirm Password: </Form.Label>
          </div> 
          <div className="col-5">
          <Form.Control type="password" placeholder="Confirm Password" value={ConfPassword} onChange={ (e) => setConfPassword(e.target.value) } />
          </div> 
          {ConfPassword !== Password ? <p>Passwords must match</p> : null}
        </Form.Group>

        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
      
      <div>
      <h4>Your Form Data</h4>
      <p>First Name: {firstName} </p>
      <p>Last Name: {lastName} </p>
      <p>Email: {Email} </p>
      <p>Password: {Password} </p>
      <p>Confirm Password: {ConfPassword} </p>
      </div>
    </>
    );
  };


export default FormData