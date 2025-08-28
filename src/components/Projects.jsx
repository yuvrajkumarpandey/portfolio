import { useState } from "react";
import ProjectCard from "./ProjectsCards";
import { projects } from "../data/yuvrajData";

function Projects() {
    let [projectNum, setProjectNum] = useState(2)
    let [btntxt, setBtntxt] = useState("Show More")
    let maxShow = projects.length > 5 ? 5 : projects.length
    function show() {
        setProjectNum((prev) => {
            if (prev == 2) {
                return maxShow
            }
            else {
                return 2
            }
        })
        setBtntxt((prvtxt) => {
            if (prvtxt === "Show More") {
                return "Show Less"
            }
            else {
                return "Show More"
            }
        })
    }
    return (
        <div className="px-5 pt-5 pb-5 flex flex-col border-b border-[#1D1F29]">
            <div className="flex justify-between">
                <h3 className="text-lg font-medium text-[#CAC7C7]">Projects</h3>
                {projects.length > 2 && (
                    <button
                        className="text-[#CAC7C7] text-sm hover:cursor-pointer hover:text-white"
                        onClick={show}
                    >
                        {btntxt}
                    </button>
                )}
            </div>
            <div className="flex flex-col gap-4 mt-3">
                {
                    projects.slice(0, projectNum).map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;