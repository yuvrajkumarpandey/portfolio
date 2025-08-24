function Skillschip({ name, icon }) {
    return (
        <button className="hover:text-white hover:cursor-pointer font-medium border text-[#CAC7C7] border-[#1D1F29] rounded-lg inline-flex items-center justify-center gap-x-1 px-2 py-1 box-border ">
            <img src={icon} />
            <span className="text-sm font-medium">{name}</span>
        </button>
    )
}

export default Skillschip;