const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="bg-[#060c1f] text-black font-bold py-2 px-4 rounded hover:bg-[#060c1f] transition duration-300"
    >
      {text}
    </a>
  );
};

export default TagButton;
