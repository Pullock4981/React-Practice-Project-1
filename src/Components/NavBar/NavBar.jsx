import { GiHamburgerMenu } from "react-icons/gi";
import Links from "../Links/Links";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const NavBar = () => {
  // state for icon
  const [open, setOpen] = useState(false);
  // route data
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/services", name: "Services" },
    { id: 5, path: "/profile/:userId", name: "Profile" },
  ];
  return (
    <nav>
      <div>
        <div className="md:hidden mt-3 ml-3" onClick={() => setOpen(!open)}>
          {open === true ? (
            <IoIosCloseCircleOutline className="text-2xl"></IoIosCloseCircleOutline>
          ) : (
            <GiHamburgerMenu className="text-2xl"></GiHamburgerMenu>
          )}
        </div>
        <div className="md:flex md:justify-center md:items-center">
          <ul
            className={`md:flex md:w-screen justify-center items-center p-4  duration-1000 absolute md:static ${
              open ? "top-12" : "-top-60"
            } md:bg-gray-200 bg-orange-200`}
          >
            {routes.map((route) => (
              <Links key={route.id} route={route}></Links>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
