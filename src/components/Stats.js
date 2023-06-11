import React from "react";

function Stats(props) {
  if (!props.items.length)
    return (
      <p className="stats">
        <em> Start adding some items to your packing list 🚀 </em>
      </p>
    );

  const packedItems = props.items.filter((item) => item.packed === true);
  const packedItemsPercentage = (packedItems.length / props.items.length) * 100;
  console.log(packedItems);

  return (
    <footer className="stats">
      {packedItemsPercentage === 100 ? (
        <em>You got everything. Ready to go ✈️</em>
      ) : (
        <em>
          You have {props.items.length} number of items on your list. and you
          have already packed {packedItems.length} (
          {packedItemsPercentage.toFixed(2)} %)
        </em>
      )}
    </footer>
  );
}

export default Stats;
