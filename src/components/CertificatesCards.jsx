import React from 'react';
const CertificatesCards = ({
    title,
    provider,
    date,
    img,
    link,
}) => {
    return (
        <a className="hover:text-white transition-colors duration-100 text-[#CAC7C7]" target="_blank" href={link}>
            <div className="flex flex-row items-start gap-3">
                <div className="flex-shrink-0">
                    <img
                        src={img}
                        className="h-12 w-12 object-contain rounded"
                        alt={title}
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-lg">{title}</p>
                    <p className="text-sm">{provider}</p>
                    <p className="text-xs">{date}</p>
                </div>
            </div>
        </a>

    );
};

export default React.memo(CertificatesCards);
