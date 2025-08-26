import { contactMe } from '../data/yuvrajData'
function Footer() {
    return (
        <div className="px-5 pt-5 pb-5 flex flex-col border-b border-[#1D1F29]">
            <div className="flex flex-col text-sm text-[#CAC7C7]">
                <p className="text-[#FF3576] font-black text-lg">yuvraj.online</p>
                <p>That's a wrap! | Crafted with coffee and chaos.</p>
                <p>© 2025 <a className='text-white' href={contactMe[0].link}>Yuvraj Kumar Pandey</a>. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;