import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ua from "./ua.json";
import ru from "./ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ua: { translation: ua },
    ru: { translation: ru },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already escapes
  },
});

export default i18n;
