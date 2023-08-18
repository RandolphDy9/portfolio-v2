type ButtonType = {
  label: string;
  classes: string;
};

const ButtonGradient = ({ label, classes }: ButtonType) => {
  return (
    <div className="p-1 my-auto rounded bg-gradient-to-r from-from via-via to-to">
      <button className={`px-6 py-2 ${classes}`}>
        {label}
      </button>
    </div>
  );
};

export default ButtonGradient;
