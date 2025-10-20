import React from "react";
import Button from "@mui/material/Button";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="w-[100%] h-[50px] bg-[#e5e5e5] rounded relative p-2 ">
      <input
        className="w-[100%] h-[35px] focus:outline-none bg-inherit font-light text-[13px] p-2"
        type="text"
        placeholder="Search for products..."
      />
      <Button className="!absolute top[5px] right-[5px] z-50 h-[35px] w-[35px] !min-w-[35px] !rounded-full !text-black ">
        <IoIosSearch className="text-black text-2xl" />
      </Button>
    </div>
  );
};

export default Search;
