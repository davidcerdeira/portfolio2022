import React, { useState, useEffect, useRef } from "react";
import i18n from "i18next";

const Dropdown = ({ nav }) => {
  const dropdownRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  const [showOptions, setShowOptions] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const changeLanguage = (event, lang) => {
    setCurrentLang(event.target.value);
    setShowOptions(false);
    console.log(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <div class='relative inline-block text-left' ref={dropdownRef}>
        <div>
          <button
            onClick={handleClick}
            type='button'
            class={`inline-flex w-full justify-center px-4 pb-2 ${nav ? 'pt-0.5' : ''} text-base font-bold text-primary`}
            id='menu-button'
            aria-expanded='true'
            aria-haspopup='true'
          >
            {currentLang}
            { !nav ? (
              <svg
                class='-mr-1 h-5 w-5 ml-1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                  clip-rule='evenodd'
                />
              </svg>
            ) : (
              ''
            )}
          </button>
        </div>

        {showOptions ? (
          <div
            class='absolute z-10 ml-4 mt-0 rounded-md bg-background focus:outline-none'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='menu-button'
            tabindex='-1'
          >
            <div class='py-0' role='none'>
              <button
                class='text-primary block py-2 text-sm h'
                role='menuitem'
                tabindex='-1'
                id='menu-item-3'
                value='PT'
                onClick={(event) => changeLanguage(event, "pt")}
              >
                PT
              </button>
              <button
                class='text-primary block py-2 text-sm '
                role='menuitem'
                tabindex='-1'
                id='menu-item-3'
                value='EN'
                onClick={(event) => changeLanguage(event, "en")}
              >
                EN
              </button>
              <button
                class='text-primary block py-2 text-sm '
                role='menuitem'
                tabindex='-1'
                id='menu-item-3'
                value='KR'
                onClick={(event) => changeLanguage(event, "ko")}
              >
                KR
              </button>
              <button
                class='text-primary block py-2 text-sm '
                role='menuitem'
                tabindex='-1'
                id='menu-item-3'
                value='CHI'
                onClick={(event) => changeLanguage(event, "zh")}
              >
                CHI
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dropdown;
