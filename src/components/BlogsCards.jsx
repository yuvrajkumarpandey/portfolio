const BlogsCards = ({
    title,
    link
}) => {
    return (
        <a className="cursor-pointer hover:bg-zinc-900/75 transition-colors duration-100 border border-[#1D1F29] rounded-md text-[#CAC7C7] hover:text-white px-4 py-3" target="self" href={link}>
            {title}
        </a>

    );
};

export default BlogsCards;
