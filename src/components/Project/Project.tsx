import React from "react";
import Link from "next/link";
import TechIcon from "../ui/Technologies/TechIcon";

interface Project {
    id: string
    slug: string
    title: string
    description: string
    githubURL?: string
    liveDemo?: string
    coverImage?: any
    technologies: string[]
    markdown?: any
}

function Project({ id, slug, title, description, githubURL, liveDemo, coverImage, technologies, markdown}: Project) {
    return (
        <div className="max-w-xs bg-white shadow-lg rounded-lg mb-4" key={id}>
            {coverImage &&
            <div className="overflow-hidden rounded-t-lg">
                <img
                    src={coverImage.url}
                    alt={title}
                    className="hover:scale-125 transition ease-in-out duration-700"
                />
            </div>}
            <div className="p-4">
                <div>
                    <h3 className="text-sapphire font-bold text-2xl tracking-tight leading-tight">{title}</h3>
                    {(githubURL != null) || (liveDemo != null) ?
                        <div className="inline flex space-x-2 mb-2">
                            {(githubURL != null) ?
                                <a className="flex items-center link" href={githubURL}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"/>
                                </svg>
                                Source</a>
                            : ""}
                            {(githubURL != null) && (liveDemo != null) ? <span className="text-gray-300">|</span> : ""}
                            {(liveDemo != null) ?
                            <a className="flex items-center link" href={liveDemo}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45 mr-1"
                                     viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                          clipRule="evenodd"/>
                                </svg>
                                Live</a>
                            : ""}
                        </div>
                        : ""}
                </div>
                <p className="tracking-tight mb-2">{description}</p>
                <div className={`text-3xl flex items-center space-x-4 ${(markdown == null) ? "mb-2" : "mb-4"}`}>
                    {technologies.map((tech: string, index: number) => (
                        <TechIcon key={index} technology={tech}/>
                    ))}
                </div>
                {(markdown != null) ?
                <div className="bg-sapphire hover:bg-sapphire-darker text-white text-md max-w-fit font-bold py-1 px-2 rounded">
                    <Link href={`/projects/${slug}`} passHref={true}>
                        <a>Read More</a>
                    </Link>
                </div> : ""}
            </div>
        </div>
    );
}

export default Project;