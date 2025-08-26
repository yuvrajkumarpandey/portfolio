import { useState } from "react";

function Tooltip({ children, text }) {
    const [show, setShow] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}
            {show && (
                <div
                    className="
            absolute bottom-full left-1/2 -translate-x-1/2 mb-1
            px-2 py-1
            text-sm text-white bg-transparent rounded
            whitespace-nowrap z-50
          "
                >
                    {text}
                </div>
            )}
        </div>
    );
}

export default Tooltip;
