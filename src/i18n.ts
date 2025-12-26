import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

const resources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation },
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false // Πολύ σημαντικό για να αποφύγεις τη λευκή σελίδα
    }
  });

export default i18n;