import React from "react";

const Table = ({ orders, tableNumber }) => {
    const tableOrders = orders.filter((order) => order.tableNumber === tableNumber);
  
    return (
      <div>
        <h2>{tableNumber}</h2>
        <ul>
          {tableOrders.map((order, index) => (
            <li key={index}>
              Order ID: {order.orderId}, Dish Name: {order.dishName}, Price: {order.price}
            </li>
          ))}
        </ul>
      </div>
    );
  };

 export default Table; 