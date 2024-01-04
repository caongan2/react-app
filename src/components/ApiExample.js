// src/components/ApiExample.js
import React, { useState, useEffect } from 'react';
import { MdHourglassEmpty } from 'react-icons/md';
import Table from './Table';
import '../ApiExample.css'


const ApiExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/index'); // Replace with your API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {loading ? (
        <div className='loading'>
          <div class="loader"></div>
        </div>
      ) : (
        <Table data = {data} />
      )}
    </div>
  );
};

export default ApiExample;
