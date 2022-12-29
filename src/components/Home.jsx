import React from "react";
import { Link } from "react-scroll";

import { useTranslation } from "react-i18next";

import "../scrollarrow.scss";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div name='home' className='w-full h-screen  bg-background'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-highlight font-bold text-2xl ml-1'>
          {t("Home.subheader")}
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-primary'>
          {t("Home.name")}
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-highlight'>
          {t("Home.job")}
        </h2>
        <p className='text-tertiary py-4 max-w-[700px]'>{t("Home.subtitle")}</p>
        <div className='flex flex-row space-x-4'>
          {/* Button: Latest Projects */}
          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className='text-white border-basic bg-basic group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-basic hover:text-basic duration-300'>
              {t("Home.projectsBtn")}
            </button>
          </Link>

          {/* Button: More About Me */}
          <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
            <button className='text-white border-highlight bg-highlight group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-highlight hover:text-highlight duration-300'>
              {t("Home.aboutBtn")}
            </button>
          </Link>
        </div>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default Home;
