import React from 'react'
import { useState } from 'react'

import '../Stylesa/Register.css'
import { useNavigate } from 'react-router-dom';
const Registera1 = () => {
    const navigate = useNavigate();
    

      
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        // Validate username
        if (!formData.username.trim() || formData.username.trim()[0]!==formData.username.trim()[0].toUpperCase()) {
          newErrors.username = 'Username must start with an uppercase letter. ';
          isValid = false;
        }

        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
          newErrors.email = 'Valid email is required';
          isValid = false;
        }
    
        // Validate password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
          newErrors.password =
          'Password must contain at least one letter, one number, one special character, and 8 values';
          isValid = false;
        }
    
       
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
        navigate("/Logina1", { state: { SubmitedData: formData } });

        } else {
          console.log('Form validation failed');
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    





  return (
    <div className='Registercona1' >
      
    <div className='Registercon'>
       <form onSubmit={handleSubmit}>
        <div><h4>Registerpage</h4></div>
        <div>
          <label htmlFor="username">Username:</label><br />
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ borderColor: errors.username ? '' : '' }}
          />
            <br/>
          {errors.username && (
            <span style={{ color: 'red' }}>{errors.username}</span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: errors.email ? '' : '' }}
          />
            <br/>
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ borderColor: errors.password ? '' : '' }}
          />
          <br/>
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
            <br />
       

      <div>
      <button type="submit">Register</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Registera1
