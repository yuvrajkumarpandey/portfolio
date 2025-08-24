import { profileSection, skills } from '../data/yuvrajData'
import Skillschip from './Skillschip';

function Profile() {
    return (
        <div className="p-5 mt-5 flex flex-col">
            <div>
                <img
                    className={`${profileSection['profileImg']['height']} rounded-full border-4 border-[#1D1F29] mx-auto`}

                    loading='lazy'

                    src={profileSection['profileImg']['profileImgURL']}
                />
            </div>
            <div className='mt-3'>
                <p className='text-lg text-[#CAC7C7] text-center font-[600]'>
                    {
                        profileSection['name']
                    }
                </p>
            </div>
            <div>
                <p className='text-sm text-[#CAC7C7] text-center'>
                    {
                        profileSection['status']
                    }
                </p>
            </div>
            <div className='flex flex-row items-center justify-center flex-wrap gap-2 mt-3'>
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