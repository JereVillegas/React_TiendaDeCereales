const Item = ({ name, price, img }) => {
  return (
    <l1>
      <div>
        {name}
        {"\n\r"}
        {"$"}
        {price}
        <br></br>
        <img src={img} alt={name} height="150" />
      </div>
    </l1>
  );
};

export default Item;
