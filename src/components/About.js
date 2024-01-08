import ApiExample from './ApiExample'
import { useState } from 'react';

const About = () => {
    const [name, setName] = useState(null);
    const input = document.getElementById("input-search")
    const handleChange = (e) => {
        console.log(input.value)
        setName(input.value);
    };

    return (
        <div className="container text-center">
            <div className='row mt-3'>
                <div className='col-md-3'>
                    <div className="d-flex">
                        <input className="form-control me-2" value={name} id='input-search' onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>
                <div className='col-md-9'>
                <h1>About</h1>
                </div>
            </div>
            <ApiExample name={name} />
        </div>
    );
}

export default About;