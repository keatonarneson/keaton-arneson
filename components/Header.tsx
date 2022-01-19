import Link from 'next/link';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="bg-black py-3">
      <div className="flex items-center flex-wrap max-w-6xl mx-auto">
        <Link href="/">
          <a className="inline-flex items-center group pl-3 lg:pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
              className="group-hover:rotate-180 transition duration-1000"
            >
              <polygon points="12 24, 0 0, 24 0" fill="white" />
            </svg>
            <span className="ml-2 text-xl text-white font-bold uppercase tracking-wider">
              Keaton Arneson
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-white rounded lg:hidden text-white ml-auto hover:text-black outline-none mr-2"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6 hover:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:tracking-wider">
                Projects
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:tracking-wider">
                Technologies
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:tracking-wider">
                About
              </a>
            </Link>
          </div>
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto px-2 py-2 rounded h-10 w-full text-white items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
                <AiFillGithub size="24px" />
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto px-2 py-2 rounded h-10 w-full text-white items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
                <AiFillLinkedin size="24px" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
