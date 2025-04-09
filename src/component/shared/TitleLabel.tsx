import classNames from "classnames";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  title: string;
  description: string;
  darkMode: boolean;
};

const TitleLabel = ({ title, description, darkMode }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-center items-start md:px-8 rounded-2xl shadow-xl my-6 md:my-20 p-8 ${
        darkMode
          ? "bg-[radial-gradient(circle_500px_at_50%_200px,#262626,transparent)]"
          : "bg-[radial-gradient(circle_500px_at_50%_200px,#f2f2f2,transparent)]"
      }`}
    >
      <div
        className={classNames(
          "text-5xl transition-colors",
          isInView
            ? "bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text"
            : "text-gray-500"
        )}
      >
        {title}
      </div>
      <div className="my-3">{description}</div>
    </div>
  );
};

export default TitleLabel;
