import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/Userslice';
import { useDispatch, useSelector } from 'react-redux';
import cookie from 'cookie'
const Login = () => {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    updateFormData(e.target.id, e.target.value);
  };

  const updateFormData = (fieldId, value) => {
    setFormData({ ...formData, [fieldId]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())

      const response = await axios.post('http://localhost:3000/auth/login', formData);
      console.log('API response:', response);

      if (response.data.message === 'Login successful') {
        dispatch(signInSuccess(response.data.rest));
        navigate('/');
      } else {
        dispatch(signInFailure(response.data.rest))
      }

    } catch (error) {
      dispatch(signInFailure(error))
      console.error('Login error:', error);

      // Check if the error is related to the API request
      if (error.response) {
        // The request was made and the server responded with a status code
        // outside the range of 2xx
        console.log('API response status:', error.response.status);
        console.log('API response data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('No response received from the API');
      } else {
        // Something happened in setting up the request that triggered an error
        console.log('Error setting up the API request:', error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="cover">
        <div className="front">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2e2bc7195651643.661150bcb0404.gif"
            alt=""
          />
          <div className="text">
            <span className="text-1">Every new friend is a <br /> new adventure</span>
            <span className="text-2">Let's get connected</span>
          </div>
        </div>
        <div className="back">
          <div className="text">
            <span className="text-1">Complete miles of journey <br /> with one step</span>
            <span className="text-2">Let's get started</span>
          </div>
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form onSubmit={handleSubmit}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    id="email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text">
                  <a href="#">Forgot password?</a>
                </div>
                {error && <div className="error-message"> Something went wrong. Please try again later.</div>}

                <div className="button input-box">
                  <input type="submit" value={loading ? 'Loading...' : 'Submit'} disabled={loading} />
                </div>
                <div className="text sign-up-text">
                  Don't have an account?{' '}
                  <span className="signup-link" onClick={() => navigate('/signup')}>
                    Signup now
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
