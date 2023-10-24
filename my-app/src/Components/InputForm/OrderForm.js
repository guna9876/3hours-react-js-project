import React,{useState} from "react";

const OrderForm = ({ addToBill }) => {
    const [order, setOrder] = useState({
      orderId: '',
      price: '',
      dishName: '',
      tableNumber: 'table1',
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setOrder({ ...order, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addToBill(order);
      setOrder({
        orderId: '',
        price: '',
        dishName: '',
        tableNumber: 'table1',
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="orderId"
          value={order.orderId}
          onChange={handleChange}
          placeholder="Order ID"
        />
        <input
          type="text"
          name="price"
          value={order.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          type="text"
          name="dishName"
          value={order.dishName}
          onChange={handleChange}
          placeholder="Dish Name"
        />
        <select name="tableNumber" value={order.tableNumber} onChange={handleChange}>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
        <button type="submit">Add to Bill</button>
      </form>
    );
  };

  export default OrderForm;