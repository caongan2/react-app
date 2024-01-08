import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Paginator from './Paginator';


const Table = (props) => {
  const users = props?.data?.data

  const [dataApi, setDataApi] = useState(users);

	const handleClick = (childData) => {
		props.sendDataToParent(childData);
	};

	const handleDelete = async (userId) => {

    props.onDelete(userId);
		
	};
  
    useEffect(() => {
      setDataApi(users);
    }, [users])

    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Created at</th>
                <th>Updated at</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {dataApi?.map((item, index) => (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td> 
                    <td>{item.email}</td> 
                    <td>{item.phone}</td>
                    <td>{item.created_at}</td>
                    <td>{item.updated_at}</td>
                    <td>
                        <button onClick={() => handleDelete(item.id)} className="btn btn-danger">del</button>
                        |
                        <Link className='btn btn-primary' to={`/contact/${item.id}`}>edit</Link>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
			<div className='container text-center'>
				<Paginator handleClick = {handleClick}  pageInfo = {props.data?.meta} />
			</div>
        </div>
    );
}

export default Table;