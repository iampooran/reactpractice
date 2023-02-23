import React from "react";

const ProductCategory = ({ name }) => {
  return (
    <>
      <td colSpan={2} align="center">
        {name}
      </td>
    </>
  );
};

export default ProductCategory;
