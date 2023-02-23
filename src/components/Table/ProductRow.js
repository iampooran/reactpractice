import React from "react";

const ProductRow = ({ data }) => {
  return (
    <React.Fragment>
      {data.map((value, index) => {
        return (
          <tr key={index}>
            <td>{value.FruitName}</td>
            <td>{value.Price}</td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export default ProductRow;
