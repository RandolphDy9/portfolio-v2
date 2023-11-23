import MainLayout from "../layout/MainLayout";
import { useNavigate } from "react-router-dom";
import experienceData from "../data/experienceData";
import LinkWhite from "../assets/icons/dark/link-white.svg";
import LinkBlack from "../assets/icons/light/link-black.svg";

type RowType = {
  year: string;
  title: string;
  built: string;
  developed: string[];
  link: string;
  darkMode: boolean;
};

const Row = (item: RowType) => {
  return (
    <div className="grid md:grid-cols-12 mt-2 text-md md:text-lg hover:bg-via hover:text-dark hover:rounded-xl p-2 md:p-4">
      <div className="grid md:col-span-1 my-auto">{item.year}</div>
      <div className="grid md:col-span-4 my-auto font-semibold">
        {item.title}
      </div>
      <div className="grid md:col-span-2 my-auto">{item.built}</div>
      <div className="grid md:col-span-4 my-auto">
        <div className="flex flex-wrap gap-2 text-sm  ">
          {item.developed.map((i, index) => {
            return (
              <div className="flex gap-2" key={`item${i}`}>
                {i} {index !== item.developed.length - 1 && <div>&bull;</div>}
              </div>
            );
          })}
        </div>
      </div>
      {item.link !== "" && (
        <div className="grid md:col-span-1 my-auto">
          <div
            className="cursor-pointer hover:scale-110"
            onClick={() => window.open(item.link)}
          >
            <img
              src={`${item.darkMode ? LinkWhite : LinkBlack}`}
              alt="external-link"
              width="24"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const Archive = ({ darkMode }: { darkMode: boolean }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen h-full font-main text-xl md:text-2xl ${
        !darkMode ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <MainLayout darkMode={darkMode}>
        <div className="flex flex-col w-full m-6 md:m-12">
          <div
            className="mb-2 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-via after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            onClick={() => navigate("/")}
          >
            &#8592; Randolph Dy
          </div>
          <div className="text-5xl">All Projects</div>

          <div className="text-5xl md:text-6xl text-center md:mt-28 my-16">
            Archive
          </div>

          <div className="md:grid md:grid-cols-12 mt-20 text-from px-4 font-bold md:show hidden">
            <div className="grid md:col-span-1">Year</div>
            <div className="grid md:col-span-4">Title</div>
            <div className="grid md:col-span-2">Built at</div>
            <div className="grid md:col-span-4">Developed using</div>
            <div className="grid md:col-span-1">Link</div>
          </div>

          {experienceData.map((item) => {
            return (
              <Row
                key={item.title}
                year={item.year}
                title={item.title}
                built={item.built}
                developed={item.developed}
                link={item.link}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      </MainLayout>
    </div>
  );
};

export default Archive;
