import classNames from "classnames";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  title: string;
  description: string;
};

const TitleLabel = ({ title, description }: Props) => {

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' })

  return (
    <div ref={ref} className="py-16 flex flex-col justify-center items-start md:px-8 rounded-2xl">
      <div className={classNames("text-5xl transition-colors", isInView ? "bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text" : "text-gray-500")}>
        {title}
      </div>
      <div className="my-3">{description}</div>
    </div>
  );
};

export default TitleLabel;
