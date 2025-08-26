import { blogs } from "../data/yuvrajData";
import { useState } from "react";
import BlogsCards from "./BlogsCards";

function Blogs() {
    let [blogNum, setblogNum] = useState(3);
    let [btntxt, setBtntxt] = useState("Show More");
    let maxShow = blogs.length;

    function show() {
        setblogNum((prev) => {
            if (prev === 3) {
                return maxShow;
            } else {
                return 3;
            }
        });
        setBtntxt((prvtxt) => {
            if (prvtxt === "Show More") {
                return "Show Less";
            } else {
                return "Show More";
            }
        });
    }

    return (
        <div className="px-5 pt-5 pb-5 flex flex-col border-b border-[#1D1F29]">
            <div className="flex justify-between">
                <h3 className="text-lg font-medium text-[#CAC7C7]">Blogs</h3>
                {blogs.length > 3 && (
                    <button
                        className="text-[#CAC7C7] text-sm hover:cursor-pointer hover:text-white"
                        onClick={show}
                    >
                        {btntxt}
                    </button>
                )}
            </div>
            <div className="flex flex-col gap-4 mt-3">
                {blogs.slice(0, blogNum).map((blog, index) => (
                    <BlogsCards key={index} {...blog} />
                ))}
            </div>
        </div>
    );
}

export default Blogs;
