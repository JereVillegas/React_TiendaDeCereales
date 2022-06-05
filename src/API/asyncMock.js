const products = [
  {
    id: "1",
    name: "Tradicional",
    price: "300",
    img: "/images/Tradicionales.jpg",
  },
  {
    id: "2",
    name: "Granola",
    price: "350",
    img: "/images/Granola.jpg",
  },
  {
    id: "3",
    name: "Almohaditas",
    price: "200",
    img: "/images/Almohaditas.jpg",
  },
  {
    id: "4",
    name: "Integral",
    price: "250",
    img: "/images/Integral.jpg",
  },
  {
    id: "5",
    name: "Niños",
    price: "150",
    img: "/images/Niños.jpg",
  },
];

export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 2000);
  });
};
