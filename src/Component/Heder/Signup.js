import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataProduct } from '../../App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const { userData, setUserData } = useContext(DataProduct);

  const userNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confiromRef =useRef(null)

  const Navigate = useNavigate('')
 


  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [erorr, setErorr] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    const userName = userNameRef.current.value;
    const emailId = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirom = confiromRef.current.value
 

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      setErorr('Invalid email address');
      toast.error('Invalid email address'); // Show error notification
      return;
    }

    // password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(Password)) {
      setErorr(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.'
      );
      toast.error('Invalid password'); // Show error notification
      return;
    }

    // confirm password validation
    if (Password !== confirmPassword) {
      setErorr('Passwords do not match');
      toast.error('Passwords do not match'); // Show error notification
      return;
    }

    // If all validations pass, you can proceed with further actions, such as submitting the form or making an API call.
    // For now, you can log a success message.
    setErorr('');
    Navigate('/Login')
    toast.success('Signup successful!'); // Show success notification
   
    const newUser = { userName: userName, emailId: emailId, password: password,confirom ,cart:[] };
    setUserData([...userData, newUser]);
    console.log(userData);
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col ">
      <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full sm:w-96">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            ref={userNameRef}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />

          {erorr && (
            <div role="alert" className="text-red-500 text-xs">
              {erorr}
            </div>
          )}

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            ref={confiromRef}
          />

        
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
              onClick={handleSignup}
            >
              Create Account
            </button>
         

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Terms of Service
            </a>{' '}
            and
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link to="/Login">
            <a className="no-underline border-b border-blue text-blue" href="../login/">
              Log in
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
