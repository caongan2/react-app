import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {
    const myStyles = {
        float: "left"
    };
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('userLogin', JSON.stringify(data.user))
            console.log(data);
            navigate('/about')
          } else {
            console.error('Post request failed:', data);
          }
        } catch (error) {
          console.error('Error occurred during the post request:', error);
        }
    }
    return (
        <div className="container text-center">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" style={myStyles} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;