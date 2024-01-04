import React, { useState } from 'react';
const Table = (props) => {
    const initialData = [
		{
			"id": "1",	
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "2",	
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "3",	
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "4",	
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "5",	
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "6",	
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "7",	
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "8",	
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "9",	
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "10",
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "11",
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "12",
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
        {
			"id": "13",
            "address1": "高知県",
			"address2": "南国市",
			"address3": "蛍が丘",
			"kana1": "ｺｳﾁｹﾝ",
			"kana2": "ﾅﾝｺｸｼ",
			"kana3": "ﾎﾀﾙｶﾞｵｶ",
			"prefcode": "39",
			"zipcode": "7830060"
		},
	]
    const users = props.data

    const [dataApi, setDataApi] = useState(users);

	const onClick = (id) => {
        const updatedData = dataApi.filter(item => item.id !== id);
        setDataApi(updatedData);
    };

	const handleDelete = async (userId) => {
		try {
		  const response = await fetch(`http://127.0.0.1:8000/api/delete/${userId}`, {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json',
			},
		  });
		  const data = await response.json();
		  if (response.ok) {
			const updatedData = dataApi.filter(item => item.id !== userId);
        	setDataApi(updatedData);
			console.log(data.message, data.count);
		  } else {
			console.error('Failed to delete user');
		  }
		} catch (error) {
		  console.error('Error occurred while deleting user:', error);
		}
	  };

    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Family name</th>
                <th>First name</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {dataApi.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.username}</td> 
                    <td>{item.family_name}</td>
                    <td>{item.first_name}</td>
                    <td><button onClick={() => handleDelete(item.id)} className="btn btn-danger">del</button></td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}

export default Table;