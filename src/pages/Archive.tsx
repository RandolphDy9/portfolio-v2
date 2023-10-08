import MainLayout from "../layout/MainLayout";
import { useNavigate } from "react-router-dom";
import experienceData from "../data/experienceData";

type RowType = {
  year: string;
  title: string;
  built: string;
  developed: string[];
  link: string;
};

const Row = (item: RowType) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-12 mt-2 text-lg md:text-xl hover:bg-via hover:text-dark hover:rounded-xl p-4">
      <div className="grid md:col-span-1 my-auto">{item.year}</div>
      <div className="grid md:col-span-4 my-auto font-semibold">{item.title}</div>
      <div className="grid md:col-span-2 my-auto">{item.built}</div>
      <div className="grid md:col-span-5 my-auto">
        <div className="flex flex-wrap gap-2 text-md">
          {item.developed.map((i, index) => {
            return (
              <div className="flex gap-2" key={`item${i}`}>
                {i} {index !== item.developed.length - 1 && <div>&bull;</div>}
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="grid md:col-span-1 my-auto">{item.link}</div> */}
    </div>
  );
};

const Archive = ({ darkMode }: { darkMode: boolean }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen h-full font-main text-xl md:text-2xl ${
        !darkMode ? "bg-light text-dark" : "bg-dark text-white"
      }`}
    >
      <MainLayout darkMode={darkMode}>
        <div className="flex flex-col w-full m-6 md:m-12">
          <div
            className="cursor-pointer hover:underline hover:underline-offset-2"
            onClick={() => navigate("/")}
          >
            &#8592; Randolph Dy
          </div>
          <div className="text-5xl">All Projects</div>
          <div className="grid grid-cols-3 md:grid-cols-12 mt-20 text-from px-4 font-bold">
            <div className="grid md:col-span-1">Year</div>
            <div className="grid md:col-span-4">Title</div>
            <div className="grid md:col-span-2">Built at</div>
            <div className="grid md:col-span-5">Developed using</div>
            {/* <div className="grid md:col-span-1">Link</div> */}
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
              />
            );
          })}
        </div>
      </MainLayout>
    </div>
  );
};

export default Archive;
