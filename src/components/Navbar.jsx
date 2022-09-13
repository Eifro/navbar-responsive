/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

function Navbar() {
  let links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "ABOUT", link: "/" },
  ];

  return (
    <div className="navbar w-full border shadow-md fixed bg-white">
      <div className="md:flex items-center justify-between py-4 container mx-auto ">
        <div className="flex gap-2 items-center font-bold cursor-pointer text-gray-800 text-2xl">
          <span className="text-indigo-600 text-3xl">
            <FontAwesomeIcon icon={faCode} />
          </span>
          <p>Navbar</p>
        </div>
        <ul className="md:flex md:items-center md:gap-8 pb-8 md:pb-0 transition-all duration-500 ease-in">
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
