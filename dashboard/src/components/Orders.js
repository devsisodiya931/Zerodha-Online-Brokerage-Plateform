import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Order.css"; 

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3002/allOrders", {
          withCredentials: true,
        });
        setOrders(res.data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3>Orders placed:</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price per Unit</th>
            <th>Total Amount</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(({ _id, name, qty, price, mode }) => (
            <tr key={_id}>
              <td data-label="Name">{name}</td>
              <td data-label="Quantity">{qty}</td>
              <td data-label="Price per Unit">{price.toFixed(2)}</td>
              <td data-label="Total Amount">{(qty * price).toFixed(2)}</td>
              <td data-label="Mode">{mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
