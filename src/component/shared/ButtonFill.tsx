type ButtonType = {
  label: string;
  absoluteClasses: string;
  relativeClasses: string;
  onClick: () => void;
};

const ButtonFill = ({ label, absoluteClasses, relativeClasses, onClick }: ButtonType) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <span className={`absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded ${absoluteClasses}`}></span>
      <span className={`fold-bold relative inline-block h-full w-full rounded border-2  px-6 py-3 text-base font-bold transition duration-100 hover:bg-gradient-to-r hover:from-from hover:via-via hover:to-to hover:delay-75 hover:text-gray-900 dark:bg-transparent ${relativeClasses}`}>
        {label}
      </span>
    </div>
  );
};

export default ButtonFill;
