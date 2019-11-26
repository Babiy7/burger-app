import React, { useEffect, useState } from "react";
import Order from "../../component/Burger/Order/Order";
import AxiosOrders from "../../axios-orders";

const Orders = props => {
  const [state, setState] = useState({
    orders: []
  });

  useEffect(() => {
    AxiosOrders.get("orders.json")
      .then(response => {
        let fetchedData = [];
        if (state.orders.length === 0) {
          for (let key in response.data) {
            fetchedData.push({
              ...response.data[key],
              id: key
            });
          }

          setState({ orders: fetchedData });
        }
        console.log(fetchedData);
      })
      .catch(error => {});
  }, [state.orders]);

  return (
    <>
      {state.orders.map(order => {
        console.log(order.street);
        return (
          <Order
            key={order.id}
            name={order.name}
            email={order.email}
            street={order.address}
            delivery={order.delivery}
            date={order.date}
            ingredients={order.burger}
            price={order.price}
          />
        );
      })}
    </>
  );
};

export default Orders;
