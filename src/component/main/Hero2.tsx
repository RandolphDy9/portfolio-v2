
const Hero2 = () => {
  return (
    <div className="p-6 md:p-10 w-full grid grid-cols-12 grid-rows-6 gap-6 min-h-[90vh]">
      <div className="border rounded-xl col-span-5 row-span-4"></div>
      <div className="grid gap-6 col-span-4 row-span-4">
        <div className="border rounded-xl row-span-2">
          <div className="text-md md:text-5xl font-secondary flex h-full my-auto gap-3 justify-center items-center">
            Hello There! <img src={''} alt="wave-icon" width="45" />
          </div>
        </div>
        <div className="border rounded-xl row-span-2"></div>
      </div>
      <div className="border rounded-xl col-span-3 row-span-4"></div>
      <div className="border rounded-xl col-span-5 row-span-2"></div>
      <div className="border rounded-xl col-span-7 row-span-2"></div>
    </div>
  );
};

export default Hero2;
