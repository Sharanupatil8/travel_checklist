function Items({
  item,
  quantity,
  packed,
  index,
  deleteItems,
  handleToggleItemList,
}) {
  const handleCheckBox = () => {
    handleToggleItemList(index);
  };

  const deleteItem = () => {
    deleteItems(index);
  };

  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        <input onChange={handleCheckBox} value={packed} type={"checkbox"} />{" "}
        {quantity} {item}
      </span>
      <button onClick={deleteItem}>❌</button>
    </li>
  );
}

export default Items;
