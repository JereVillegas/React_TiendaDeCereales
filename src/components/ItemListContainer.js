import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { getProducts } from "../API/asyncMock";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <h2>Tienda De Cereales - Catalogo</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
