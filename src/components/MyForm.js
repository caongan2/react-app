import '../MyForm.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const MyForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
          const response = await fetch('http://127.0.0.1:8000/api/store', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            console.log('Post request successful:', data);
          } else {
            console.error('Post request failed:', data);
          }
        } catch (error) {
          console.error('Error occurred during the post request:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Number phone</label>
                <input type="number" name='phone' value={formData.phone} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" id="check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default MyForm;