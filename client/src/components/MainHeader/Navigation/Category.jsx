import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Category = ({ open, onClose }) => {
  //
  //
  //
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
  const [isActive, setIsActive] = useState(null);

  const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
    setInnerSubmenuIndex(null);
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };

  const handleClose = () => {
    setIsActive(null);
    setSubmenuIndex(null);
    setInnerSubmenuIndex(null);
    onClose();
  };

  const categories = [
    {
      title: "Fashion",
      sub: [
        {
          title: "Women",
          items: [
            { name: "Tops", link: "/fashion/women/tops" },
            { name: "Dresses", link: "/fashion/women/dresses" },
            { name: "Skirts", link: "/fashion/women/skirts" },
          ],
        },
        {
          title: "Men",
          items: [
            { name: "Shirts", link: "/fashion/men/shirts" },
            { name: "Jeans", link: "/fashion/men/jeans" },
            { name: "Jackets", link: "/fashion/men/jackets" },
          ],
        },
      ],
    },
    {
      title: "Electronics",
      sub: [
        {
          title: "Mobiles",
          items: [
            { name: "Android", link: "/electronics/mobiles/android" },
            { name: "iPhone", link: "/electronics/mobiles/iphone" },
            { name: "Accessories", link: "/electronics/mobiles/accessories" },
          ],
        },
      ],
    },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: 270,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.5,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          Categories
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/*Main Content */}
      <div className="scroll">
        <ul className="w-full py-2">
          {categories.map((category, index) => (
            <li key={index} className="list-none">
              {/* Main Category */}
              <div className="flex items-center justify-between pl-3 pr-2 py-2 transition">
                <div
                  onClick={() => {
                    if (isActive === index) {
                      setIsActive(null);
                      setSubmenuIndex(null);
                    } else {
                      setIsActive(index);
                      setSubmenuIndex(index);
                    }
                    setInnerSubmenuIndex(null);
                  }}
                  className={`flex items-center justify-between !w-full !text-left rounded cursor-pointer ${
                    isActive === index
                      ? "!bg-[#ff5252] !text-white"
                      : "!text-black hover:!bg-[#ff5252] hover:!text-white"
                  }`}
                >
                  <div className="button-category">
                    <Button
                      className={`!capitalize ${isActive === index ? "!text-white" : "!text-black"}`}
                    >
                      {category.title}
                    </Button>
                  </div>

                  <div className="mr-4">
                    <IconButton
                      size="small"
                      onClick={() => openSubmenu(index)}
                      className=""
                    >
                      <IoIosArrowDropdownCircle
                        size={20}
                        className={`transition-transform  ${
                          submenuIndex === index ? "rotate-180" : ""
                        } ${
                          isActive === index
                            ? "!text-gray-700 !bg-gray-200 rounded"
                            : ""
                        }`}
                      />
                    </IconButton>
                  </div>
                </div>
              </div>

              {/* Submenu */}
              {submenuIndex === index && (
                <ul className="pl-6 border-l border-gray-200">
                  {category.sub.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <div className="flex items-center justify-between py-1 hover:bg-gray-50 rounded-md transition">
                        <Button
                          onClick={() => openInnerSubmenu(subIndex)}
                          className="!text-gray-800 !justify-start !w-full !text-left !normal-case !px-2"
                        >
                          {sub.title}
                        </Button>
                        <IconButton
                          size="small"
                          onClick={() => openInnerSubmenu(subIndex)}
                          className="!mr-10 !text-gray-600 hover:!bg-gray-100"
                        >
                          <IoIosArrowDropdownCircle
                            size={20}
                            className={`transition-transform ${
                              innerSubmenuIndex === subIndex ? "rotate-180" : ""
                            }`}
                          />
                        </IconButton>
                      </div>

                      {/* Inner Submenu (Links) */}
                      {innerSubmenuIndex === subIndex && (
                        <ul className="pl-6 mt-1">
                          {sub.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                to={item.link}
                                onClick={onClose} // closes drawer on click
                                className="block text-sm text-gray-600 hover:text-[#ff5252] py-1 transition"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {DrawerList}
    </Drawer>
  );
};

export default Category;
