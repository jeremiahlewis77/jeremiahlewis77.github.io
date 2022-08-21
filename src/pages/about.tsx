import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import Layout from "../components/Layout/Layout";
import PageLayout from "../components/Layout/PageLayout";
import {Badge, BadgeGroup} from "../components/ui/Badges/Badges"
import {TechCard, TechCardGroup} from "../components/ui/Technologies/TechCard";
import Link from "next/link"

const technologies = [
    {tech: "cplusplus", title: "C++", link: "https://cplusplus.com"},
    {tech: "javascript", title: "JavaScript", link: "https://javascript.com"},
    {tech: "typescript", title: "TypeScript", link: "https://typescriptlang.org"},
    {tech: "python", title: "Python", link: "https://python.org"},
    {tech: "git", title: "Git", link: "https://reactjs.org"},
    {tech: "mysql", title: "MySQL", link: "https://www.mysql.com/"},
    {tech: "postgresql", title: "PostgreSQL", link: "https://www.postgresql.org/"},
    {tech: "docker", title: "Docker", link: "https://docker.com"},
    {tech: "html5", title: "HTML", link: "https://en.wikipedia.org/wiki/HTML"},
    {tech: "css3", title: "CSS", link: "https://en.wikipedia.org/wiki/CSS"},
]

const frameworks = [
    {tech: "react", title: "React.js", link: "https://reactjs.org"},
    {tech: "nextjs", title: "Next.js", link: "https://nextjs.org/"},
    {tech: "django", title: "Django", link: "https://www.djangoproject.com/"},
    {tech: "tailwindcss", title: "TailwindCSS", link: "https://tailwindcss.com/"},
    {tech: "bootstrap", title: "Bootstrap", link: "https://getbootstrap.com/"},

]

function Header(): JSX.Element {
    return (
        <>
        </>
    );
}


const About: NextPageWithLayout<any> = () => {
    return (
        <>
            <div className="bg-white rounded-lg max-w-4xl mx-auto drop-shadow-lg flex sm:flex-row min-h-fit flex-col-reverse sm:p-0 p-8 justify-center">
                <div id="left-header" className="sm:p-8 sm:basis-4/6 p-0">
                    <div>
                        <h2 className="sm:text-4xl tracking-tight text-gunmetal mb-4 font-bold text-3xl">Hey there! 👋</h2>
                        <p className="sm:text-xl text-lg text-gray-500 tracking-tight -mt-2">I&apos;m <strong>Jeremiah</strong>, a Software Engineer from Houston, Texas with a passion for developing technologies that create effective and efficient solutions. </p>
                    </div>
                    <div>
                        <p className="mt-2">I also am a:</p>
                        <BadgeGroup>
                            <Badge>🎨 Graphic Designer</Badge>
                            <Badge>🎹 Musician</Badge>
                        </BadgeGroup>
                    </div>
                </div>
                <div id="right-header" className="sm:mr-0 sm:ml-auto sm:basis-2/6 mb-4 sm:mb-0">
                    <img alt="Picture of myself wearing graduation cap, a red stole, and red tie." className="sm:rounded-none sm:rounded-r-lg sm:w-full sm:h-full sm:object-cover w-7/12 h-7/12 rounded-full mx-auto sm:mx-0 shadow-lg sm:shadow-none" src="https://media.graphassets.com/AAIAfK2RQIqm7qQa7u6Y"/>
                </div>
            </div>
            <div className="max-w-4xl p-8 mx-auto space-y-10">
                <div id="about">
                    <span>
                        <h3 className={"text-2xl font-semibold max-w-fit mb-2 header-underline"}>A Bit About Me</h3>
                    </span>
                    <div className="text-xl font-normal tracking-tight">
                        <p>I am a recent Computer Science Graduate from the <a href={"https://uh.edu"} className="link">University of Houston</a> (UH). My love for programming began with a commonly known application, Microsoft PowerPoint. Sounds weird at first, right? Well, let me explain!</p><br/>
                        <p>Growing up, I was drawn to technology, or more specifically using technology to solve problems and create simple, yet great user experiences. In 2012, I started my journey with programming by discovering PowerPoint Operating Systems (PPTOSes) through YouTube exploration and experimentation. This led me to a community which other individuals who shared the same interests.</p><br/>
                        <p>I learned Visual Basic for Applications (my first programming language) and used Microsoft PowerPoint&apos;s functionality to create faux operating systems, with a login system, applications such as web browsing, calculator, music player, and similar. Over that time, I created multiple PPTOSes and I was co-founder and head Administrator of the <a className="link" href="https://pptos.fandom.com/">PPTOS Wiki</a>. The wiki still sees about 300 monthly visitors.</p><br/>
                        <p>Since then, I went to the University of Houston to major in Computer Science in which I have gained a lot of knowledge regarding programming, including Software Engineering, Data Structures & Algorithms, and languages such as C++ and Python. During my time at UH, I worked in several university positions in which I always introduced my technical skills to make some of my processes either more efficient or automated.</p><br/>
                        <p className="font-semibold">I am seeking a full-time Software Engineering role where I can further my skills and help a company continue their mission and achieve their goals.</p>
                    </div>
                    <div className={"mt-4 py-2 px-6 bg-sapphire-lighter text-white text-md rounded-lg w-fit"}>
                        📄 <Link href="/resume" passHref={true}><a className={"underline"}> View my resume</a></Link> to read more about my work experience
                    </div>
                </div>
                <div id="technologies">
                    <span>
                        <h3 className={"text-2xl font-semibold max-w-fit mb-2 header-underline text-center mx-auto"}>Technologies I&apos;ve worked with</h3>
                    </span>
                    <TechCardGroup className={"mb-4"}>
                        {technologies.map((object, index) => (
                            <TechCard key={index} technology={object.tech} title={object.title} link={object.link}/>))}
                    </TechCardGroup>
                    <div className={"py-2 px-6 mx-auto bg-sapphire text-white text-md rounded-lg w-fit"}>
                        💡 Want to see how these technologies were used? <Link href="/projects" passHref={true}><a className={"underline"}>View my projects!</a></Link>
                    </div>
                </div>
                <div id="frameworks">
                    <span>
                        <h3 className={"text-2xl font-semibold max-w-fit mb-2 header-underline text-center mx-auto"}>Frameworks I&apos;ve worked with</h3>
                    </span>
                    <TechCardGroup>
                        {frameworks.map((object, index) => (
                            <TechCard key={index} technology={object.tech} title={object.title} link={object.link}/>))}
                    </TechCardGroup>
                </div>
            </div>
        </>
    )
}


About.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <Layout title="About Me">
                <PageLayout pageTitle="About Me" headerContent={Header()}  headerCSS="flex flex-col justify-center text-center" pageCSS="px-8 pb-8">
                    {page}
                </PageLayout>
            </Layout>
        </>
    )
}

export default About;