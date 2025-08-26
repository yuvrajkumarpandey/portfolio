import React from 'react';
const ProjectCard = ({
    title,
    status = "Running",
    statusColor = "text-green-400 bg-green-400/10",
    description,
    image,
    liveLink,
    githubLink,
}) => {
    return (
        <div className="project-box cursor-pointer hover:bg-zinc-900/75 transition-colors duration-100 border border-[#1D1F29] rounded-md text-[#CAC7C7] hover:text-white">
            <div className="flex md:flex-row flex-col gap-3 p-2">
                {/* Project Image */}
                <div className="basis-[22%] p-1 select-none">
                    <img
                        loading="lazy"
                        alt={title}
                        src={image}
                        className="rounded-md md:h-[130px] h-[200px] w-full object-cover opacity-70"
                    />
                </div>

                {/* Project Details */}
                <div className="basis-[78%] flex flex-col md:gap-0 gap-1">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center truncate">
                            <h1 className="text-2xl font-semibold truncate">{title}</h1>
                            <div
                                className={`select-none font-medium hidden text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-md sm:flex items-center ${statusColor}`}
                            >
                                <span className="animate-pulse">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                                    </svg>
                                </span>
                                {status}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="select-none flex gap-2 px-2 text-base">
                            {liveLink && (
                                <a
                                    href={liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors duration-100"
                                    title="Live"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-[#CAC7C7]"
                                    >
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>
                                </a>
                            )}
                            {githubLink && (
                                <a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors duration-100"
                                    title="GitHub"
                                >
                                    <svg
                                        className="stroke-[#CAC7C7]"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="opacity-80">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProjectCard);
