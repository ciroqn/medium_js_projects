import React, { useState } from "react";

function FoodOrderForm() {
  // set state for each variable (following controlled component protocol for react)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Order Successful! \nYour order was ${order}. \nPlease show your confirmation number for pickup.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input id='name' value={name} name='name' type='text' onChange={(e) => {setName(e.target.value)}} />
      <br />
      <label htmlFor='phone'>Phone: </label>
      <input id='phone' value={phone} name='phone' type='text' onChange={(e) => {setPhone(e.target.value)}} />
      <br />
      <label htmlFor='address'>Address: </label>
      <input id='address' value={address} name='address' type='text' onChange={(e) => {setAddress(e.target.value)}}/>
      <br />
      <label htmlFor='order'>Order: </label>
      <input id='order' value={order} name='order' type='text' onChange={(e) => {setOrder(e.target.value)}} />
      <br />
      <button type='submit'>Submit Order</button>
    </form>
  );
}

export default FoodOrderForm;
