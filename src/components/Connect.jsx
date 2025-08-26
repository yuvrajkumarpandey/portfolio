import { contactMe } from '../data/yuvrajData'
import Tooltip from './Tooltip';
function Connect() {
    return (
        <div className="px-5 pt-5 pb-5 flex flex-col border-b border-[#1D1F29]">
            <div className="flex justify-between">
                <h3 className="text-lg font-medium text-[#CAC7C7]">Contact Me</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-3">
                {contactMe.map((connect, index) => (
                    <Tooltip text={connect.title}>
                        <a target='_blank' key={index} href={connect.link}>
                            <div className="border border-[#1D1F29] p-2 rounded-md hover:bg-zinc-900/75">
                                <img src={connect.icon} />
                            </div>
                        </a>
                    </Tooltip>
                ))}
            </div>
        </div >
    )
}

export default Connect;