import {links} from '../../constants/links'
function Footer () {
    return (
        <>
            <footer className="bg-gunmetal p-5">
                <div className="flex items-center justify-between max-w-6xl mx-auto text-white">
                    <div className="md:text-xl text-3xl space-x-2.5">
                        <a href={links.github}><i className="devicon-github-original hover:text-sapphire transition ease-in-out"/></a>
                        <a href={links.linkedin}><i className="devicon-linkedin-plain hover:text-sapphire transition ease-in-out"/></a>
                    </div>
                    <div className="text-white text-sm">Made with 💙 by Jeremiah Lewis</div>
                </div>
            </footer>
        </>
    )
}

export default Footer;