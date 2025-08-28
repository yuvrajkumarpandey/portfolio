import CertificatesCards from "./CertificatesCards";
import { certificate } from "../data/yuvrajData";
import { useState } from "react";

function Certification() {
    let [certificateNum, setCertificateNum] = useState(3);
    let [btntxt, setBtntxt] = useState("Show More");
    let maxShow = certificate.length > 5 ? 5 : certificate.length;

    function show() {
        setCertificateNum((prev) => {
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
                {
                    certificate.slice(0, certificateNum).map((cartificate) => (
                        <CertificatesCards key={cartificate.title} {...cartificate} />
                    ))
                }
            </div>
        </div>
    );
}

export default Certification;
