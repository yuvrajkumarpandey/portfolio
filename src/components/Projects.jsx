import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectsCards";
import { projects } from "../data/yuvrajData";

function Projects() {
    const [projectNum, setProjectNum] = useState(2);
    const [btntxt, setBtntxt] = useState("Show More");

    const maxShow = projects.length > 5 ? 5 : projects.length;

    function show() {
        setProjectNum((prev) => (prev === 2 ? maxShow : 2));
        setBtntxt((prev) => (prev === "Show More" ? "Show Less" : "Show More"));
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
                <AnimatePresence>
                    {projects.slice(0, projectNum).map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1, // stagger effect
                            }}
                            layout
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Projects;
