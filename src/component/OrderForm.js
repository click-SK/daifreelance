import React, { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const order = {
    //   source_id: 1,
    //   buyer: {
    //     full_name: name,
    //     phone: phone,
    //   },
    //   products: [
    //     {
    //       price: price,
    //       quantity: 1,
    //       name: "Product"
    //     },
    //   ],
    // };

    const order = {
      source_id: 10,
      buyer: {
        full_name: "Test sklo Kalculator",
        phone: 2332234
      },
      products: [
        {
          price: 4000
        },
      ],
    };
    // const order = {
    //   "source_id": 1,
    //   "buyer": {
    //     "full_name": "Alex",
    //     "phone": "+380662732124"
    //   },
    //   "products": [
    //     {
    //       "price": price,
    //       "quantity": 1,
    //       "name": "Product"
    //     }
    //   ]
    // };

    const token = 'ODQ0MDA5YjE3ZmJhMGYwNzQxMTFlN2FmYmRlZjE0MzEwNDljYzM5OQ'

    const response = await fetch("https://openapi.keycrm.app/v1/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        Authorization: `Bearer . ${token}`,
      },
      body: JSON.stringify(order),
      mode: 'no-cors'
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default OrderForm;