import { profileSection, skills } from '../data/yuvrajData'
import Clock from './Clock';
import Skillschip from './Skillschip';

function Profile() {
    return (
        <div className="px-5 pt-5 pb-10 mt-5 flex flex-col border-b border-[#1D1F29]">
            <div className='flex justify-center items-center gap-1.5'>
                <img src='/left-olive.svg' className='h-auto' loading='lazy' />
                <img
                    className={`${profileSection['profileImg']['height']} rounded-full`}

                    loading='lazy'

                    src={profileSection['profileImg']['profileImgURL']}
                />
                <img src='/right-olive.svg' className='h-auto' loading='lazy' />
            </div>
            <div className='mt-3 flex justify-center items-center'>
                <p className='text-lg text-[#CAC7C7] flex flex-row gap-1 font-[600] justify-center items-center'>
                    {
                        profileSection['name']
                    }
                    <img src='/verified.svg' className='h-auto hover:cursor-pointer z-[-20]' loading='lazy' />
                </p>
            </div>
            <div>
                <p className='text-sm text-[#CAC7C7] text-center'>
                    {
                        profileSection['status']
                    }
                </p>
            </div>

            <div className='mt-3 flex flex-row items-center justify-center gap-3'>
                <Clock />
                <div title='Location' className='flex flex-row gap-1'>
                    <img src='/icons/location.svg' />
                    <p className='text-xs text-[#CAC7C7]'>{profileSection['location']}</p>
                </div>
            </div>

            <div className='flex mx-0 md:mx-10 flex-row items-center justify-center flex-wrap gap-2 mt-3'>
                {
                    Object.entries(skills).map(([name, icon]) => {
                        return <Skillschip key={name} name={name} icon={icon} />
                    })
                }
            </div>
        </div>
    );
}
export default Profile;