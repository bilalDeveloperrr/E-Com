import React, { useState } from "react";
import Button from "@mui/material/Button";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Category from "./Category";

const Navigation = () => {

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  return (
    <>
      <nav>
        <div className="container flex items-center justify-end">
          <div className="col1 w-[20%]">
            <Button className="!text-black whitespace-nowrap gap-2"
              onClick={handleDrawerOpen}
            >
              <HiOutlineMenu size={25} />
              SHOP BY CATEGORIES
            </Button>
          </div>
          <div className="col2 w-[60%] border-l-2 border-gray-400  pl-5 ">
            <ul className="flex items-center justify-between text-xs">
              <li className="list-none navigation-link transition">
                <Link to="/">Home</Link>
              </li>
              <li className="list-none navigation-link transition">
                <Link to="/fashion">Fashion</Link>
              </li>
              <li className="list-none navigation-link transition">
                <Link to="/ele">Electronics</Link>
              </li>
              <li className="list-none navigation-link transition">
                <Link to="/bags">Bags</Link>
              </li>
              <li className="list-none navigation-link transition">
                <Link to="/footwear">Footwear</Link>
              </li>
              <li className="list-none navigation-link transition">
                <Link to="/groceries">Groceries</Link>
              </li>
              <li className="list-none navigation-link transition">
                <Link to="/">Beauty</Link>
              </li>
              <li className="list-none navigation-link transition">
                <Link to="/">Wellness</Link>
              </li>
              <li className="list-none navigation-link transition">
                <Link to="/">Jewellery</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 w-[20%]">
            <p className="ml-5 pl-5 border-l-2 border-gray-400 whitespace-nowrap text-xs font-medium">
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      <Category open={openDrawer} onClose={handleDrawerClose} />
    </>
  );
};

export default Navigation;
