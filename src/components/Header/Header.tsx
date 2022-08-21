import Link from "next/link";
import Image from "next/image";
// import logoWhite from '../../public/logo-white.svg'
import logo from '../../public/logo.svg'
import { useRouter } from 'next/router';
import {useState} from "react";

function Header() {
    const router = useRouter();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    // "link-underline " + (router.pathname == "/about" ? "current" : ""
    return (
        <header className="p-5 bg-snow">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between max-w-7xl mx-auto md:px-5">
                <div className="sm:w-40 w-32 cursor-pointer hover:translate-y-1 transition ease-in-out">
                    <Link href="/"><Image src={logo} alt="Jeremiah L." layout="responsive"/></Link>
                </div>
                <button data-collapse-toggle="mobile-menu" type="button"
                        className="inline-flex justify-center items-center ml-3 text-gunmetal rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"/>
                    </svg>
                </button>
                <div className={`${showMobileMenu ? "" : "hidden"} w-full md:block md:w-auto w-fit bg-gray-100 md:bg-transparent mt-4 md:mt-0 shadow`} id="mobile-menu">
                    <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-md font-medium md:border-0">
                        <li>
                            <Link href={"/"} passHref>
                            <a href="#" className={`block py-2 pr-4 pl-3 text-gunmetal rounded md:rounded-none md:bg-transparent md:p-0 md:link-underline md:hover:bg-transparent ${(router.pathname == "/" ? "current md:text-sapphire bg-sapphire text-white" : "")}`}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/about"} passHref>
                                <a href="#" className={`block py-2 pr-4 pl-3 text-gunmetal rounded md:rounded-none md:bg-transparent md:p-0 md:link-underline md:hover:bg-transparent ${(router.pathname == "/about" ? "current md:text-sapphire bg-sapphire text-white" : "")}`}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/projects"} passHref>
                                <a className={`block py-2 pr-4 pl-3 text-gunmetal rounded md:rounded-none md:bg-transparent md:p-0 md:link-underline md:hover:bg-transparent ${(router.pathname == "/projects" ? "current md:text-sapphire bg-sapphire text-white" : "")}`}>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/resume"} passHref>
                                <a className={`block py-2 pr-4 pl-3 md-text-gunmetal rounded md:rounded-none md:bg-transparent md:p-0 md:link-underline md:hover:bg-transparent ${(router.pathname == "/resume" ? "current md:text-sapphire bg-sapphire text-white" : "")}`}>Resume</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/contact"} passHref>
                                <a className={`block py-2 pr-4 pl-3 text-gunmetal rounded md:rounded-none md:bg-transparent md:p-0 md:link-underline hover:bg-gray-300 md:hover:bg-transparent ${(router.pathname == "/contact" ? "current md:text-sapphire bg-sapphire text-white" : "")}`}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;