import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    updateFormData(e.target.id, e.target.value);
  };

  const updateFormData = (fieldId, value) => {
    setFormData({ ...formData, [fieldId]: value });
  };

  const handleDropdownChange = (e) => {
    updateFormData('accounttype', e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      const response = await axios.post('http://localhost:3000/auth/signup', formData);

      if (response.data.message === 'User created successfully') {
        // Redirect to the login page
        navigate('/login');
      } else {
        console.log(response.data);
        setError(true);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error('Sign-up error:', error);
    }
  };

  const handleLoginNavigation = () => {
    navigate('/login');
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
          <div className="signup-form">
            <div className="title">Signup</div>
            <form onSubmit={handleSubmit}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    id="username"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
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
                <div className="dropdown">
                  <i className="fas fa-chevron-down"></i>
                  <select onChange={handleDropdownChange} required>
                    <option value=""> user type</option>
                    <option value="client">Client</option>
                    <option value="designer">Designer</option>
                  </select>
                </div>
                <div className="button input-box">
                  <input type="submit" value={loading ? 'Loading...' : 'Submit'} disabled={loading} />
                </div>
                {error && <div className="error-message">Something went wrong. Please try again later.</div>}
   
                <div className="text sign-up-text">
                  Already have an account?{' '}
                  <span className="login-link" onClick={handleLoginNavigation}>
                    Login now
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

export default Signup;
