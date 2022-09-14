/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false)

  let links = [
    { name: "HOME", link: "#" },
    { name: "SERVICE", link: "#" },
    { name: "BLOG", link: "#" },
    { name: "ABOUT", link: "#" },
  ];

  return (
    <div className="navbar w-full border shadow-md fixed bg-white px-4">
      <div className="md:flex items-center justify-between py-4 container mx-auto ">
        <div className="flex gap-2 items-center font-bold cursor-pointer text-gray-800 text-2xl">
          <span className="text-indigo-600 text-3xl">
            <FontAwesomeIcon icon={faCode} />
          </span>
          <p>Navbar</p>
        </div>
        <div className="text-2xl absolute right-5 top-5 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FontAwesomeIcon icon={faXmark} /> :  <FontAwesomeIcon icon={faBars} /> }
        </div>
        <ul className={`md:flex md:items-center md:gap-8 pb-8 md:pb-0 transition-all duration-500 ease-in ${open ? '' : 'hidden'}`}>
          {links.map((link) => (
            <li key={link.name} className="my-7 md:my-0"><a href={link.link} className="text-xl text-gray-800 hover:text-gray-400 duration-500">{link.name}</a></li>
          ))}
          <Button>
            Get Started
          </Button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
