import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Stylesa/Register.css'
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormdata] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
        gender: "",
      });
      const underChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
          ...formData,
          [name]: value,
        });
      };
      const underSubmit = (e) => {
        e.preventDefault();
        console.log("Formdata :", formData);
        
        navigate("/Logina", { state: { SubmitedData: formData } });
      
      };
  return (
    <div className='Registercon'>
      <form onSubmit={underSubmit} >
        <div>
          <div>
            <h2>Register Form</h2>
          </div>
          <div>
            <label htmlFor="FistName">FirstName</label> <br />
            <input
              type="text"
              name="FirstName"
              onChange={underChange}
              value={formData.FirstName}
              id="FirstName" required
            />
          </div>
          <div>
            <label htmlFor="LastName">LastName</label> <br />
            <input
              type="text"
              name="LastName"
              onChange={underChange}
              value={formData.LastName}
              id="LastName" required
            />
          </div>
          <div>
            <label htmlFor="Email">Email</label> <br />{" "}
            <input
              type="email"
              name="Email"
              onChange={underChange}
              value={formData.Email}
              id="Email" required
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <br />
            <input
              type="password"
              name="Password"
              onChange={underChange}
              value={formData.Password}
              id="Password" required
            />
          </div>
          <div>
            <label htmlFor="male">Male</label>{" "}
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={underChange}
            />&ensp;
            <label htmlFor="female">Female</label>{" "}
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={underChange}
            />
          </div>
          <div>
            <button type="submit" >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
