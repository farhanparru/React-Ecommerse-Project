import React, { useContext, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput,  } from 'mdb-react-ui-kit';
// import { DataProduct } from '../../App';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  // User Data to signup 

 
  
  

  const Navigate = useNavigate()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      return;
    }

   
    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.'
      );
      return;
    }
   

    // If both email and password are valid, you can proceed with the login logic.
    // For now, just clear the error message.
    setError('');
    toast.success('Login SuccessFully');

    Navigate('/')
   
  };
  const handleNavigation = (path)=>{
    Navigate(path)
  }


  return (
    <MDBContainer className="my-5">
      {error && (
        <div role="alert" className="alert alert-danger">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <MDBRow className="justify-content-center">
        <MDBCol md="4">
          <MDBCard>
           <img src='https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg' alt='lapd'/>
            <MDBCardBody>
              <MDBInput
                wrapperClass='mb-4'
                label='Email address'
                id='formControlLg'
                type='email'
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <MDBInput
                wrapperClass='mb-4'
                label='Password'
                id='formControlLg'
                type='password'
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <div className="text-danger mb-3">{error}</div>}

              <div className='text-center text-md-start mt-4 pt-2'>
                <Button className="mb-4 px-5" onClick={handleLogin}>Login</Button>

                <p className="small fw-bold mt-2 pt-1 mb-2">
                  Don't have an account? <a href="#!" className="link-danger" onClick={()=> handleNavigation('/signup')}>Register</a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
