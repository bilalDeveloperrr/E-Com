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
          {/* Drawer Button */}
          <div className="col1 w-[20%]">
            <Button
              className="!text-black whitespace-nowrap gap-2"
              onClick={handleDrawerOpen}
            >
              <HiOutlineMenu size={25} />
              SHOP BY CATEGORIES
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="col2 w-[60%] border-l-2 border-gray-400 pl-5">
            <ul className="flex items-center justify-between text-xs nav">
              <Link to="/" className="list-none navigation-link transition">
                <li>Home</li> 
              </Link>

              {/* Fashion with submenu */}
              <li className="list-none relative group">
                <Link
                  to="/fashion"
                  className="navigation-link transition block w-full"
                >
                  Fashion
                </Link>

                {/* Submenu */}
                <div className="submenu absolute top-full left-0 min-w-[170px] bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                  <ul className="fashion-nav mt-3">
                    {/* Men with inner submenu */}
                    <li className="list-none relative group/item">
                      <Link to="/fashion/men" className="block w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] hover:!bg-gray-100 !w-full !justify-start !rounded-none !px-3">
                          Men
                        </Button>
                      </Link>

                      {/* Inner Submenu (fixed positioning) */}
                      <div className="innerSubmenu absolute top-0 left-full min-w-[200px] bg-white shadow-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-400 z-30">
                        <ul>
                          <Link to="/fashion/men/women">
                            <li>
                              <Button className="!text-[rgba(0,0,0,0.8)] hover:!bg-gray-100 !w-full !justify-start !rounded-none !px-3">
                                Women
                              </Button>
                            </li>
                          </Link>
                          <Link to="/fashion/men/kids">
                            <li>
                              <Button className="!text-[rgba(0,0,0,0.8)] hover:!bg-gray-100 !w-full !justify-start !rounded-none !px-3">
                                Kids
                              </Button>
                            </li>
                          </Link>
                          <Link to="/fashion/men/aman">
                            <li>
                              <Button className="!text-[rgba(0,0,0,0.8)] hover:!bg-gray-100 !w-full !justify-start !rounded-none !px-3">
                                Aman
                              </Button>
                            </li>
                          </Link>
                        </ul>
                      </div>
                    </li>

                    {/* Other Fashion Items */}
                    <Link to="/fashion/women">
                      <li>
                        <Button className="!text-[rgba(0,0,0,0.8)] hover:!bg-gray-100 !w-full !justify-start !rounded-none !px-3">
                          Women
                        </Button>
                      </li>
                    </Link>

                    <Link to="/fashion/kids">
                      <li>
                        <Button className="!text-[rgba(0,0,0,0.8)] hover:!bg-gray-100 !w-full !justify-start !rounded-none !px-3">
                          Kids
                        </Button>
                      </li>
                    </Link>

                    <Link to="/fashion/aman">
                      <li>
                        <Button className="!text-[rgba(0,0,0,0.8)] hover:!bg-gray-100 !w-full !justify-start !rounded-none !px-3">
                          Aman
                        </Button>
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              {/* Other nav items */}
              <Link to="/ele" className="list-none navigation-link transition">
                <li>Electronics</li>
              </Link>
              <Link to="/bags" className="list-none navigation-link transition">
                <li>Bags</li>
              </Link>
              <Link
                to="/footwear"
                className="list-none navigation-link transition"
              >
                <li>Footwear</li>
              </Link>
              <Link
                to="/groceries"
                className="list-none navigation-link transition"
              >
                <li>Groceries</li>
              </Link>
              <Link to="/" className="list-none navigation-link transition">
                <li>Beauty</li>
              </Link>
              <Link to="/" className="list-none navigation-link transition">
                <li>Wellness</li>
              </Link>
              <Link to="/" className="list-none navigation-link transition">
                <li>Jewellery</li>
              </Link>
            </ul>
          </div>

          {/* Delivery Info */}
          <div className="col3 w-[20%]">
            <p className="ml-5 pl-5 border-l-2 border-gray-400 whitespace-nowrap text-xs font-medium">
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Drawer Component */}
      <Category open={openDrawer} onClose={handleDrawerClose} />
    </>
  );
};

export default Navigation;
