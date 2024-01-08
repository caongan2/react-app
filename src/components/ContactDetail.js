import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ContactDetail = () => {
    const contact = {
        data: {
            email: '',
            phone: '',
            updated_at: '',
            created_at: '',
        }
    }

    const { id } = useParams();
    const [res, setData] = useState(contact);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}/show/${id}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching contact data:', error);
            }
        };
        fetchData();
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        phone: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData)
    }
    
    return (
        <div className="container text-center">
            <h1>Contact detail</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" onChange={handleChange} value={res.data.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Number phone</label>
                    <input type="text" name='phone' value={res.data.phone} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" id="check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ContactDetail;