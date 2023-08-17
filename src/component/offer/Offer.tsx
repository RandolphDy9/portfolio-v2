const Offer = () => {
  return (
    <div className="my-12 md:my-32 flex flex-col md:flex-row justify-around items-center md:gap-32 px-4 md:px-8">
      <div className="flex flex-col justify-center items-center text-center mx-auto w-full md:w-1/3">
        <div>image?</div>
        <div className="font-main text-2xl text-accent font-bold">Front-End Development</div>
        <div className="font-secondary text-sm">
          I translate designs into interactive websites using HTML, CSS, and
          JavaScript, crafting efficient code, animations, and cross-browser
          compatibility for seamless user experiences.
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mx-auto w-full md:w-1/3">
        <div>image?</div>
        <div className="font-main text-2xl text-accent font-bold">Responsive Web Design</div>
        <div className="font-secondary text-sm">
          Craft adaptable, user-friendly websites for diverse devices, ensuring
          optimal experiences across desktops, tablets, and smartphones, while
          boosting accessibility and engagement.
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mx-auto w-full md:w-1/3">
        <div>image?</div>
        <div className="font-main text-2xl text-accent font-bold">Modern SPA Development</div>
        <div className="font-secondary text-sm">
          Build high-performance Single Page Applications (SPAs) with Angular or
          React, offering real-time updates, efficient data loading, and
          exceptional user experiences.
        </div>
      </div>
    </div>
  );
};

export default Offer;
