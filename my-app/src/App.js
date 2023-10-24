import React ,{useState,useEffect} from "react";
import Table from "./Components/OutputData/Table";
import OrderForm from "./Components/InputForm/OrderForm";

const App = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders'));
    if (storedOrders) {
      setOrders(storedOrders);
    }
  }, []);

  const addToBill = (order) => {
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <OrderForm addToBill={addToBill} />
      <Table orders={orders} tableNumber="table1" />
      <Table orders={orders} tableNumber="table2" />
      <Table orders={orders} tableNumber="table3" />
    </div>
  );
};
export default App;