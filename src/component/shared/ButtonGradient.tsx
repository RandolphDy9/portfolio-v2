type ButtonType = {
  label: string;
};

const ButtonGradient = ({ label }: ButtonType) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
      <div className="w-full rounded-md bg-gradient-to-r from-[#11998E] to-[#38EF7D] p-1">
        <div className="flex h-full w-full items-center justify-center bg-light back">
          <h1 className="text-2xl font-black bg-gradient-to-r from-[#11998E] to-[#38EF7D] text-transparent bg-clip-text">
            { label }
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ButtonGradient;
