import { useState } from 'react';
import { socialMediaLinks } from '../data/yuvrajData'
function Topbar() {
    let [dropdown, setDropdown] = useState(false)
    const display = () => {
        setDropdown((prev) => {
            if (prev == false) {
                return true;
            }
            else {
                return false;
            }
        })
    }
    return (
        <div className='w-full px-5 py-5 flex flex-row items-center justify-between'>
            <div>
                <img src='/logo.svg' className='max-w-full' />
            </div>
            <div>
                <button onClick={display} className='bg-transparent border-0 px-1 py-2 rounded-full hover:cursor-pointer relative'>
                    <img src='/menu.svg' className='max-w-full' />
                    {dropdown && <div className='absolute right-0 top-7 bg-[#020712] border border-[#1D1F29] divide-y divide-[#1D1F29] rounded-lg shadow-sm w-44'>
                        {
                            Object.entries(socialMediaLinks).map(([key, value]) => {
                                return (
                                    <div key={key} className='text-left py-1 '>
                                        <a target='self' className='block px-4 py-2 hover:bg-[#1b1d22]' href={value}>{key}</a>
                                    </div>
                                )
                            })
                        }
                    </div>}
                </button>
            </div>
        </div>
    );
}

export default Topbar;