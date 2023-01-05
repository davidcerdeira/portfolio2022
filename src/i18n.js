import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import translationEN from "../public/locales/en/translation.json";
import translationKO from "../public/locales/ko/translation.json";
import translationZH from "../public/locales/zh/translation.json";

const resources = {
 en: {
   translation: translationEN,
 },
 ko: {
   translation: translationKO,
 },
 zh: {
  translation: translationZH,
},
};

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });