import { useState } from "react";

type CardType = {
  frontContent: string;
  backContent: string;
}

const FlipCard = ({ frontContent, backContent }: CardType) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative w-96 h-60 rounded-2xl text-light overflow-hidden cursor-pointer transition-all duration-700 card ${
        isFlipped ? 'flipped' : ''
      }`}
      onClick={handleFlip}
    >
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
        {frontContent}
      </div>
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
        {backContent}
      </div>
    </div>
  );
};

export default FlipCard;
