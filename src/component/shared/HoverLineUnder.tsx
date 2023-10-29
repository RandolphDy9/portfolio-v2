type HoverItemType = {
  label: string;
  onClick: () => void;
};

const HoverLineUnder = ({ onClick, label }: HoverItemType) => {
  return (
    <div
      className="cursor-pointer relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-via after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default HoverLineUnder;
