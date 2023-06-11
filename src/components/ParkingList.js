import React, { useState } from "react";
import Items from "./Items";

function ParkingList(props) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = props.listItems;
  } else if (sortBy === "description") {
    sortedItems = props.listItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = props.listItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const listItemRemove = (index) => {
    props.removeItemFromList(index);
  };

  const toggleList = (index) => {
    console.log(index);
    props.checkbox(index);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <div className="list">
      <ul>
        {sortedItems.map((list, index) => (
          <Items
            deleteItems={listItemRemove}
            handleToggleItemList={toggleList}
            key={index}
            index={index}
            quantity={list.quantity}
            packed={list.packed}
            item={list.description}
          />
        ))}
      </ul>

      <div className="action">
        <select value={sortBy} onChange={handleSort}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={props.deleteItemList}>Clear List</button>
      </div>
    </div>
  );
}

export default ParkingList;
