import './Content.css'
import Clock from './Clock';
import React, { useState, useEffect } from 'react';



function Content () {
    const [count, setNumber] = useState(1);
    const [text, setText] = useState("test");
    const input = document.getElementById("exampleFormControlInput1")
    const handleButtonClick = () => {
      setNumber(count + 1);
    };

    const handleChangeText = () => {
        setText(input.value)
        setNumber(input.value.length)
    }

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);



    const array = {
        "date": currentDate,
        "text": text,
        'count': count
    }

    return (
        <div className="container mt-5 text-center">
            <Clock array={ array } />
            <button onClick={handleButtonClick}> click </button>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input onChange={handleChangeText} type="email" className="form-control" id="exampleFormControlInput1" placeholder="angan@example.com" />
            </div>
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
    )
}

export default Content;