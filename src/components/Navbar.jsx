/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
        <ul className="md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <li key={link.name}><a href={link.link} className="text-xl text-gray-800 hover:text-gray-400 duration-500">{link.name}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
