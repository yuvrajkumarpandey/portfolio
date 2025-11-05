import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificatesCards from "./CertificatesCards";
import { certificate } from "../data/yuvrajData";

function Certification() {
    const [certificateNum, setCertificateNum] = useState(3);
    const [btntxt, setBtntxt] = useState("Show More");

    const maxShow = certificate.length > 5 ? 5 : certificate.length;

    function show() {
        setCertificateNum((prev) => (prev === 3 ? maxShow : 3));
        setBtntxt((prev) => (prev === "Show More" ? "Show Less" : "Show More"));
    }

    return (
        <div className="px-5 pt-5 pb-5 flex flex-col border-b border-[#1D1F29]">
            <div className="flex justify-between">
                <h3 className="text-lg font-medium text-[#CAC7C7]">Certifications</h3>
                {certificate.length > 3 && (
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
                    {certificate.slice(0, certificateNum).map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1, // stagger effect
                            }}
                            layout
                        >
                            <CertificatesCards {...item} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Certification;
