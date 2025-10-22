import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t border-b border-gray-300">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%] ">
              <p className="text-[14px]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none border-r-2 border-gray-300 ">
                  <Link
                    className="header-link text-[13px] transition mx-2"
                    to="/help-center"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    className="header-link text-[13px] transition"
                    to="/order-tracking"
                  >
                    order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <Navigation />
    </header>
  );
};

export default Header;
