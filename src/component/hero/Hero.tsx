const Hero = () => {
  return (
    <div className="p-10 w-full flex gap-4 min-h-[90vh]">
      <div className="w-1/2 flex flex-col justify-center">
        <div className="text-lg font-secondary">Hi, My name is</div>
        {/* bg-gradient-to-r from-from to-to text-transparent bg-clip-text */}
        <div className="text-7xl font-main my-2 font-bold text-accent">Randolph Mayson Dy</div>
        <div className="text-3xl my-2 font-semibold">
          I build digital experiences for the online world.
        </div>
        <div className="text-lg font-secondary">
          I create the visual and interactive components of a website that users
          see and interact with. This includes integrating the appropriate
          frontend technologies and tools, and ensuring that the website is
          responsive, accessible, and optimized for performance.
        </div>
        <div className="flex flex-row">
          <div className="text-xl my-2 border px-4 py-2 rounded-lg border-dark">
            Contact Me
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-gray-200 h-full">
        Profile Image
      </div>
    </div>
  );
};

export default Hero;
