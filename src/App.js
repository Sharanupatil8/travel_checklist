import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ParkingList from "./components/ParkingList";
import Stats from "./components/Stats";

const initialItems = [];

function App() {
  const [itemsList, setItemsList] = useState(initialItems);

  function addItems(item) {
    setItemsList((prev) => [...prev, item]);
  }

  const deleteItem = (index) => {
    setItemsList((prev) => prev.filter((item, i) => i !== index));
  };

  const handleToggleItem = (index) => {
    setItemsList((items) =>
      items.map((item, i) =>
        i === index ? { ...item, packed: !item.packed } : item
      )
    );
  };

  function deleteItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items? "
    );

    if (confirmed) setItemsList([]);
  }

  console.log(itemsList);
  return (
    <div className="app">
      <Header />
      <Form addItemToList={addItems} />
      <ParkingList
        checkbox={handleToggleItem}
        removeItemFromList={deleteItem}
        listItems={itemsList}
        deleteItemList={deleteItems}
      />
      <Stats items={itemsList} />
    </div>
  );
}

export default App;
