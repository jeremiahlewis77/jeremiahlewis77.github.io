import Link from "next/link";
import Image from "next/image";
import logoWhite from '../../public/logo-white.svg'


function Header() {
    return (
        <header className="p-5 bg-gunmetal antialiased">
            <div className="flex items-center justify-between max-w-7xl mx-auto md:px-5">
                <div className="w-40 cursor-pointer">
                    <Link href="/"><Image src={logoWhite} alt="Jeremiah L." layout="responsive"/></Link>
                </div>
                <div className="inline-flex space-x-6 items-center text-white">
                    <h3>About</h3>
                    <h3>Projects</h3>
                    <h3 className="bg-white text-gunmetal p-2 px-4 rounded-full">Contact</h3>
                </div>
            </div>
        </header>
    );
}

export default Header;