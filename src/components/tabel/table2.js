import React from 'react';
import TableComponent from './tablecomponent';

const PageTwo = () => {
  const columns = [
    { field: 'id', column: 'ID' },
    { field: 'product', column: 'Produk' },
    { field: 'price', column: 'Harga' },
  ];

  const rows = [
    { id: 1, product: 'Sepatu', price: 200000 },
    { id: 2, product: 'Baju', price: 150000 },
    { id: 3, product: 'Tas', price: 100000 },
  ];

  return (
    <div>
      <h1>Halaman Kedua</h1>
      <TableComponent row={rows} column={columns} />
    </div>
  );
};

export default PageTwo;