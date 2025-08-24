import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");

    return (
        <div title="Local Time" className="flex flex-row gap-1">
            <img src="/icons/clock.svg" />
            <p className="text-xs text-[#CAC7C7]">{hours}:{minutes}</p>
        </div>
    );
}
