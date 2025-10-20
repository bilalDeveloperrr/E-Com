import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Navbar = () => {
  return (
    <div className="header mt-5 h-[80px] border-b">
      <div className="container flex items-center justify-between">
        {/* Image Logo */}
        <div className="col1 w-[25%] flex items-center justify-start">
          <Link to="/">
            <img src="/logo.jpg" alt="" />
          </Link>
        </div>
        {/* Search box */}
        <div className="col2 flex items-center justify-center w-[45%]">
          <Search />
        </div>
        {/* Signup or login */}
        <div className="col3 w-[30%] flex items-center justify-end pl-10">
          <ul className="flex items-center gap-3">
            <li className="list-none">
              <Link
                to="/login"
                className="text-[15px] font[500] transition hover:text-[#ff5252]"
              >
                Login 
              </Link>
              <span className="mx-1">/ </span>
              <Link
                to="/signup"
                className="text-[15px] font[500] transition hover:text-[#ff5252]"
              >
                Signup
              </Link>
            </li>
            <li className="list-none">
              <IconButton aria-label="cart">
                <StyledBadge  badgeContent={4} color="secondary">
                  <GoGitCompare size={27}/>
                </StyledBadge>
              </IconButton>
            </li>
            <li className="list-none">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                  <FaRegHeart size={27}/>
                </StyledBadge>
              </IconButton>
            </li>
            <li className="list-none">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="secondary">
                  <MdOutlineShoppingCart size={27}/>
                </StyledBadge>
              </IconButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
