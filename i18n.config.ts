import en from "./locales/en.json";
import ka from "./locales/ka.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ka",
  messages: {
    en,
    ka,
  },
}));
