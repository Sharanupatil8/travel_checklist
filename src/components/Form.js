import React, { useState } from "react";

function Form(props) {
  const [inputItem, setInputItem] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");

  const inputItemHandler = (e) => {
    setInputItem(e.target.value);
  };

  const handleInputQuantity = (e) => {
    setInputQuantity(e.target.value);
  };

  const submitForm = (e) => {
    if (inputItem.length > 0) {
      e.preventDefault();
      const formItemList = {
        description: inputItem,
        quantity: Number(inputQuantity),
      };
      props.addItemToList(formItemList);
      setInputItem("");
      setInputQuantity(1);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={submitForm} div className="add-form">
      <h2>what do u need for your trip? ✈️</h2>
      <select value={inputQuantity} onChange={handleInputQuantity}>
        {" "}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
          return (
            <option key={i} value={i}>
              {i}
            </option>
          );
        })}{" "}
      </select>
      <input
        value={inputItem}
        onChange={inputItemHandler}
        type="text"
        placeholder="item.."
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
