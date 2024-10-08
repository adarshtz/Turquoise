import { NavbarItems } from "../constants";
import logo from "../../public/logo.png";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div className="z-10 flex w-full justify-between border-b border-b-white bg-secondary px-10">
      <div className="flex h-28 w-28 items-center">
        <img src={logo} alt="site-logo" />
      </div>
      <div className="hidden md:block">
        <ul className="flex h-full items-center">
          {NavbarItems.map((item, index) => (
            <li
              key={index}
              className="family-montserrat mx-2 flex h-full cursor-pointer items-center border-b-4 border-b-transparent px-6 text-[1.125rem] font-semibold text-white hover:border-b-secondary"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden items-center md:flex">
        <button className="family-montserrat border px-3 py-3 font-semibold text-white transition hover:bg-white hover:text-secondary">
          Book Consultation
        </button>
      </div>
      <div className="flex items-center md:hidden">
        <button className="text-white">
          <BiMenu size={32} onClick={toggleNav} />
        </button>
        {toggle && (
          <div className="absolute right-0 top-28 w-screen bg-secondary py-10">
            <ul className="flex h-full flex-col items-start">
              {NavbarItems.map((item, index) => (
                <li
                  key={index}
                  className="family-montserrat flex h-full cursor-pointer items-center border-b-4 border-b-transparent px-6 text-[1.125rem] font-semibold text-white hover:border-b-secondary"
                >
                  {item.title}
                </li>
              ))}
              <button className="family-montserrat mx-6 my-2 border px-3 py-3 font-semibold text-white transition hover:bg-white hover:text-secondary">
                Book Consultation
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
