import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form action="">
        <div>
          <input placeholder="Search...." />
        </div>
        <div>
          <input type="checkbox" /> Only show products in stock
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
