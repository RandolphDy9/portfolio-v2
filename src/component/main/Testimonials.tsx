import QuoteIconLight from "../../assets/icons/dark/quote-white.svg";
import QuoteIconDark from "../../assets/icons/light/quote-black.svg";

type CardType = {
  darkMode: boolean;
  name: string;
  position: string;
  comment: string;
}

const Card = ({ darkMode, name, position, comment }: CardType) => {
  return (
    <div className={`flex min-w-[450px] border rounded-xl mx-4 gap-4 shadow-xl ${darkMode ? 'border-white' : 'border-dark'}`}>
      {/* <img
        src={Exist}
        alt="Company Logo"
        className="w-1/5 border rounded-tl-xl rounded-bl-xl"
      /> */}
      <div className="flex flex-col px-12 py-6 h-56">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <div className="text-2xl">{name}</div>
            <div className="italic">{position}</div>
          </div>
          {darkMode ? (
            <img src={QuoteIconLight} alt="" width="35" />
          ) : (
            <img src={QuoteIconDark} alt="" width="35" />
          )}
        </div>
        <div className="py-2">
          {comment}
        </div>
      </div>
    </div>
  );
};

const Testimonials = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className="my-8">
      <div className="text-3xl md:text-6xl text-center md:mt-28 my-16">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-6xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="text-center text-lg mt-4">
          Discover what others have to say about my work and expertise.
        </div>
        <div className="text-center text-lg">
          Testimonials from my colleagues.
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-left-slow">
            <li>
              <Card darkMode={darkMode} name="Dianne M." position="Project Manager" comment="Randolph excels in quality and detail, consistently surpassing expectations. His code is clean and well-maintained, a testament to his pride in his craft." />
            </li>
            <li>
              <Card darkMode={darkMode} name="Kristine M." position="Quality Assurance" comment="He always strives to deliver quality work and meet the deadlines. He is a valuable asset to any organization." />
            </li>
            <li>
              <Card darkMode={darkMode} name="Michael P." position="Back-end Developer" comment="He has a high level of skill and efficiency in creating user interfaces that are responsive and engaging." />
            </li>
            <li>
              <Card darkMode={darkMode} name="Lariyl D." position="Computer Engineer" comment="He is also a great team player, who communicates clearly and promptly with the backend team whenever there are code issues or bugs." />
            </li>
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-left-slow"
            aria-hidden="true"
          >
            <li>
              <Card darkMode={darkMode} name="Dianne M." position="Project Manager" comment="Randolph excels in quality and detail, consistently surpassing expectations. His code is clean and well-maintained, a testament to his pride in his craft." />
            </li>
            <li>
              <Card darkMode={darkMode} name="Kristine M." position="Quality Assurance" comment="He always strives to deliver quality work and meet the deadlines. He is a valuable asset to any organization." />
            </li>
            <li>
              <Card darkMode={darkMode} name="Michael P." position="Back-end Developer" comment="He has a high level of skill and efficiency in creating user interfaces that are responsive and engaging." />
            </li>
            <li>
              <Card darkMode={darkMode} name="Lariyl D." position="Computer Engineer" comment="He is also a great team player, who communicates clearly and promptly with the backend team whenever there are code issues or bugs." />
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-12">
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right-slow">
            <li>
              <Card darkMode={darkMode} name="Kim O." position="Java Developer" comment="He's a proactive communicator, fostering a positive work environment and contributing meaningfully to discussions." />
            </li>
            <li>
              <Card darkMode={darkMode} name="Drexler S." position="Project Manager" comment="He is a dedicated and talented professional. He is not just a colleague but a true team player who adds positivity to the workplace." />
            </li>
            <li>
              <Card darkMode={darkMode} name="James M." position="Back-end Developer" comment="He has consistently demonstrated exceptional expertise in his field. His ability to design and implement complex solutions is truly commendable." />
            </li>
            <li>
              <Card darkMode={darkMode} name="Jason D." position="Front-end Developer" comment="Working with him was a seamless experience, characterized by excellent teamwork and a complete absence of issues." />
            </li>
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right-slow"
            aria-hidden="true"
          >
            <li>
              <Card darkMode={darkMode} name="Kim O." position="Java Developer" comment="He's a proactive communicator, fostering a positive work environment and contributing meaningfully to discussions." />
            </li>
            <li>
              <Card darkMode={darkMode} name="Drexler S." position="Project Manager" comment="He is a dedicated and talented professional. He is not just a colleague but a true team player who adds positivity to the workplace." />
            </li>
            <li>
              <Card darkMode={darkMode} name="James M." position="Back-end Developer" comment="He has consistently demonstrated exceptional expertise in his field. His ability to design and implement complex solutions is truly commendable." />
            </li>
            <li>
              <Card darkMode={darkMode} name="Jason D." position="Front-end Developer" comment="Working with him was a seamless experience, characterized by excellent teamwork and a complete absence of issues." />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
