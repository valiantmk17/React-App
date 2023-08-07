import React, { useState, useEffect } from 'react';
import TableComponent from './tablecomponent';

const PageOne = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { field: 'id', column: 'id' },
    { field: 'email', column: 'email' },
    { field: 'first_name', column: 'first name' },
    { field: 'last_name', column: 'last name' },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const dataFromApi = await response.json();
      setData(dataFromApi.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Halaman Pertama</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TableComponent row={data} column={columns} />
      )}
    </div>
  );
};

export default PageOne;

// tadi juga nyoba pake then tapi jadinya pake async/await
// import React, { useState, useEffect } from 'react';
// import TableComponent from './tablecomponent';

// const PageOne = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const columns = [
//     { field: 'id', column: 'id' },
//     { field: 'email', column: 'email' },
//     { field: 'first_name', column: 'first name' },
//     { field: 'last_name', column: 'last name' },
//   ];

//   useEffect(() => {
//     fetch('https://reqres.in/api/users?page=2')
//       .then(response => response.json())
//       .then(dataFromApi => {
//         setData(dataFromApi.data); // Using the 'data' field from the API response
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Halaman Pertama</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <TableComponent row={data} column={columns} />
//       )}
//     </div>
//   );
// };

// export default PageOne;
