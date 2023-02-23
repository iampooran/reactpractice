import React from "react";
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";
import "./Table.css";

const fruits = [
  {
    FruitName: "Apple",
    Price: "$1",
  },
  {
    FruitName: "Dragonfruit",
    Price: "$2",
  },
  {
    FruitName: "Orange",
    Price: "$3",
  },
];

const ProductTable = () => {
  return (
    <div>
      <table border={2} cellPadding={10}>
        <thead align="center">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody align="center">
          <tr>
            <ProductCategory name="Fruits" />
          </tr>
            <ProductRow data={fruits} />
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;