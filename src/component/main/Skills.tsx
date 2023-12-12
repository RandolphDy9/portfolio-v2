// import Icon1 from "../../assets/icons/tech/angular.svg";
import Icon1white from "../../assets/icons/tech/white/angular_white.svg";
import Icon1black from "../../assets/icons/tech/black/angular_black.svg";
import Icon2white from "../../assets/icons/tech/white/react_white.svg";
import Icon2black from "../../assets/icons/tech/black/react_black.svg";
import Icon3white from "../../assets/icons/tech/white/vue_white.svg";
import Icon3black from "../../assets/icons/tech/black/vue_black.svg";
import Icon4white from "../../assets/icons/tech/white/bootstrap_white.png";
import Icon4black from "../../assets/icons/tech/black/bootstrap_black.svg";
import Icon5white from "../../assets/icons/tech/white/tailwind_white.png";
import Icon5black from "../../assets/icons/tech/black/tailwind_black.svg";
import Icon6white from "../../assets/icons/tech/white/html5_white.png";
import Icon6black from "../../assets/icons/tech/black/html5-black.svg";
import Icon7white from "../../assets/icons/tech/white/css3_white.png";
import Icon7black from "../../assets/icons/tech/black/css3_black.svg";
import Icon8white from "../../assets/icons/tech/white/javascript_white.png";
import Icon8black from "../../assets/icons/tech/black/javascript_black.svg";
import Icon9white from "../../assets/icons/tech/white/typescript_white.png";
import Icon9black from "../../assets/icons/tech/black/typescript_black.svg";

const Skills = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className="p-10 md:py-20 flex flex-col gap-4 md:gap-12 overflow-x-auto">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full inline-flex flex-nowrap">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-left">
            <li>
              { darkMode ? <img src={Icon1white} alt="Angular" width="60" /> : <img src={Icon1black} alt="Angular" width="60" /> }
            </li>
            <li>
              { darkMode ? <img src={Icon2white} alt="React" width="60" /> : <img src={Icon2black} alt="React" width="60" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon3white} alt="Vue" width="50" /> : <img src={Icon3black} alt="Vue" width="50" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon4white} alt="Bootstrap" width="50" /> : <img src={Icon4black} alt="Bootstrap" width="50" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon5white} alt="Tailwind" width="60" /> : <img src={Icon5black} alt="Tailwind" width="60" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon6white} alt="HTML5" width="50" /> : <img src={Icon6black} alt="HTML5" width="50" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon7white} alt="CSS3" width="60" /> : <img src={Icon7black} alt="CSS3" width="60" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon8white} alt="JavaScript" width="50" /> : <img src={Icon8black} alt="JavaScript" width="50" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon9white} alt="TypeScript" width="50" /> : <img src={Icon9black} alt="TypeScript" width="50" />  }
            </li>
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-left"
            aria-hidden="true"
          >
            <li>
              { darkMode ? <img src={Icon1white} alt="Angular" width="60" /> : <img src={Icon1black} alt="Angular" width="60" /> }
            </li>
            <li>
              { darkMode ? <img src={Icon2white} alt="React" width="60" /> : <img src={Icon2black} alt="React" width="60" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon3white} alt="Vue" width="50" /> : <img src={Icon3black} alt="Vue" width="50" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon4white} alt="Bootstrap" width="50" /> : <img src={Icon4black} alt="Bootstrap" width="50" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon5white} alt="Tailwind" width="60" /> : <img src={Icon5black} alt="Tailwind" width="60" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon6white} alt="HTML5" width="50" /> : <img src={Icon6black} alt="HTML5" width="50" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon7white} alt="CSS3" width="60" /> : <img src={Icon7black} alt="CSS3" width="60" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon8white} alt="JavaScript" width="50" /> : <img src={Icon8black} alt="JavaScript" width="50" />  }
            </li>
            <li>
              { darkMode ? <img src={Icon9white} alt="TypeScript" width="50" /> : <img src={Icon9black} alt="TypeScript" width="50" />  }
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="max-w-screen-xl mx-auto">
        <div className="w-full inline-flex flex-nowrap">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right">
            <li>
              <img src={Icon10} alt="MongoDB" width="60" />
            </li>
            <li>
              <img src={Icon11} alt="MySQL" width="60" />
            </li>
            <li>
              <img src={Icon12} alt="Nginx" width="60" />
            </li>
            <li>
              <img src={Icon13} alt="Node" width="60" />
            </li>
            <li>
              <img src={Icon14} alt="Tailwind" width="60" />
            </li>
            <li>
              <img src={Icon15} alt="Sass" width="60" />
            </li>
            <li>
              <img src={Icon16} alt="Webflow" width="60" />
            </li>
            <li>
              <img src={Icon17} alt="Typescript" width="60" />
            </li>
            <li>
              <img src={Icon18} alt="VScode" width="60" />
            </li>
            <li>
              <img src={Icon19} alt="VScode" width="60" />
            </li>
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right"
            aria-hidden="true"
          >
            <li>
              <img src={Icon10} alt="MongoDB" width="60" />
            </li>
            <li>
              <img src={Icon11} alt="MySQL" width="60" />
            </li>
            <li>
              <img src={Icon12} alt="Nginx" width="60" />
            </li>
            <li>
              <img src={Icon13} alt="Node" width="60" />
            </li>
            <li>
              <img src={Icon14} alt="Tailwind" width="60" />
            </li>
            <li>
              <img src={Icon15} alt="Sass" width="60" />
            </li>
            <li>
              <img src={Icon16} alt="Webflow" width="60" />
            </li>
            <li>
              <img src={Icon17} alt="Typescript" width="60" />
            </li>
            <li>
              <img src={Icon18} alt="VScode" width="60" />
            </li>
            <li>
              <img src={Icon19} alt="VScode" width="60" />
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
