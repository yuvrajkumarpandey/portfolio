import { useState, useEffect, useRef } from 'react';
import { contactMe } from '../data/yuvrajData';

function Topbar() {
    const [dropdown, setDropdown] = useState(false);
    const [animate, setAnimate] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        if (!dropdown) {
            setDropdown(true);
            setTimeout(() => setAnimate(true), 10);
        } else {
            setAnimate(false);
            setTimeout(() => setDropdown(false), 200);
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setAnimate(false);
                setTimeout(() => setDropdown(false), 200);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='w-full px-5 py-5 flex flex-row items-center justify-between border-b border-[#1D1F29]'>
            <div>
                <a href=''><img src='/logo.svg' className='max-w-full' /></a>
            </div>
            <div ref={dropdownRef} className="relative">
                <button
                    onClick={toggleDropdown}
                    className='bg-transparent border-0 px-1 py-2 rounded-full hover:cursor-pointer'
                >
                    <img src='/menu.svg' className='max-w-full' />
                </button>

                {dropdown && (
                    <div
                        className={`absolute right-0 top-7 bg-[#020712] border border-[#1D1F29] divide-y divide-[#1D1F29] rounded-lg shadow-sm w-44 transform transition-all duration-200 origin-top
                        ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                    >
                        {
                            contactMe.map((connect) => (
                                <div key={connect.title} className='text-left py-1'>
                                    <a
                                        target='_blank'
                                        className='block px-4 py-2 hover:bg-[#1b1d22]'
                                        href={connect.link}
                                    >
                                        {connect.title}
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

export default Topbar;
