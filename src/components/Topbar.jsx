import { useState, useEffect, useRef } from 'react';
import { socialMediaLinks } from '../data/yuvrajData';

function Topbar() {
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='w-full px-5 py-5 flex flex-row items-center justify-between'>
            <div>
                <img src='/logo.svg' className='max-w-full' />
            </div>
            <div ref={dropdownRef} className="relative">
                <button
                    onClick={toggleDropdown}
                    className='bg-transparent border-0 px-1 py-2 rounded-full hover:cursor-pointer'
                >
                    <img src='/menu.svg' className='max-w-full' />
                </button>

                {dropdown && (
                    <div className='absolute right-0 top-7 bg-[#020712] border border-[#1D1F29] divide-y divide-[#1D1F29] rounded-lg shadow-sm w-44'>
                        {Object.entries(socialMediaLinks).map(([key, value]) => (
                            <div key={key} className='text-left py-1'>
                                <a
                                    target='self'
                                    className='block px-4 py-2 hover:bg-[#1b1d22]'
                                    href={value}
                                >
                                    {key}
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Topbar;
