// src/components/ApiExample.js
import React, { useState, useEffect } from 'react';
import Table from './Table';
import '../ApiExample.css'

const ApiExample = (props) => {
  const [datas, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setDataFromChild] = useState(1)
  const handleDataFromChild = (childData) => {
    setDataFromChild(childData)
  }
 
  const fetchData = async (page) => { 
    try {
      const params = {
        per_page: 5,
        page: page,
        name: props.name
      }

      const queryString = new URLSearchParams(params).toString();
      const url = `http://127.0.0.1:8000/api/index?${queryString}`;
      const response = await fetch(url);
      const result = await response.json(); 
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }  
  };

  useEffect(() => {  
    
    fetchData(page);  
  },[page]);

  const handleDelete = async (id)=> {
    try {
		  const response = await fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json',
			},
		  }); 
		  if (response.ok) { 
          const newList = datas.data.filter(item => item.id != id);
          setData({...datas, data: newList });
		  } 
		} catch (error) {
		  console.error('Error occurred while deleting user:', error);
		}

  }
  const response = {
    limit: 10,
    page:1,
    datas: []
  }
  return (
    <div>
       {/* {loading ? (
        <div className='loading'>
          <div className="loader"></div>
        </div>
      ) : (
        <Table sendDataToParent={handleDataFromChild} data = {data} />
      )}  */}

      <Table sendDataToParent={handleDataFromChild}  data={datas} onDelete={handleDelete} />
    </div>
  );
};

export default ApiExample;
