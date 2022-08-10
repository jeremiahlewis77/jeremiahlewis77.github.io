import Link from "next/link";
import Image from "next/image";
// import logoWhite from '../../public/logo-white.svg'
import logo from '../../public/logo.svg'
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter();

    return (
        <header className="p-5 bg-snow">
            <div className="flex items-center justify-between max-w-7xl mx-auto md:px-5">
                <div className="sm:w-40 w-32 cursor-pointer hover:translate-y-1 transition ease-in-out">
                    <Link href="/"><Image src={logo} alt="Jeremiah L." layout="responsive"/></Link>
                </div>
                <div className="hidden md:inline-flex sm:space-x-6 space-x-4 items-center text-gunmetal font-medium">
                    <h3 className={"link-underline link-underline-black " + (router.pathname == "/about" ? "current" : "")}>About</h3>
                    <h3 className={"link-underline link-underline-black " + (router.pathname == "/projects" ? "current" : "")}>Projects</h3>
                    <h3 className={"link-underline link-underline-black " + (router.pathname == "/resume" ? "current" : "")}>
                        <Link href="/resume" passHref={true}>
                            <a>Resume</a>
                        </Link>
                    </h3>
                    <h3 className={"link-underline link-underline-black " + (router.pathname == "/services" ? "current" : "")}>Services</h3>
                    <h3 className="bg-gunmetal text-white p-1 px-3 rounded-full hover:bg-sapphire transition ease-in-out">
                        <Link href="/contact" passHref={true}>
                            <a>Contact</a>
                        </Link>
                    </h3>
                </div>
            </div>
        </header>
    );
}

export default Header;