import React from "react";
import { GiAnchor } from "react-icons/gi";

const Header = () => {
  return (
    <div className="mb-4 p-4s">
      <h1 className="text-4xl m-2 p-2 text-green-700 font-bold flex justify-between">
        <span>
          <GiAnchor></GiAnchor>
        </span>
        <span>Sports-Club</span>
      </h1>
      <hr />
      <hr />
    </div>
  );
};

export default Header;
