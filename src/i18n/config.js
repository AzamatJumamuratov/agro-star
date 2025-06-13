// src/i18n/config.js

// Core i18next library.
import i18n from "i18next";
// Bindings for React: allow components to
// re-render when language changes.
import { initReactI18next } from "react-i18next";

i18n
  // Add React bindings as a plugin.
  .use(initReactI18next)
  // Initialize the i18next instance.
  .init({
    // Config options

    // Specifies the default language (locale) used
    // when a user visits our site for the first time.
    // We use English here, but feel free to use
    // whichever locale you want.
    lng: "ru",

    // Fallback locale used when a translation is
    // missing in the active locale. Again, use your
    // preferred locale here.
    fallbackLng: "ru",

    // Enables useful output in the browser’s
    // dev console.
    debug: true,

    // Normally, we want `escapeValue: true` as it
    // ensures that i18next escapes any code in
    // translation messages, safeguarding against
    // XSS (cross-site scripting) attacks. However,
    // React does this escaping itself, so we turn
    // it off in i18next.
    interpolation: {
      escapeValue: false,
    },

    // Translation messages. Add any languages
    // you want here.
    resources: {
      ru: {
        // `translation` is the default namespace.
        // More details about namespaces shortly.
        translation: {
          about_company_title: "О Компании",
          about_company_desc:
            "Наша сельскохозяйственная компания специализируется на увеличении сельскохозяйственной продукции и внедрении современных технологий агросектор.",
          agroSchool_title: "Сельскохозяйственная школа",
          agroSchool_desc:
            "Наша агрошкола предоставляет современное образование в области сельского хозяйства, готовя квалифицированных специалистов для агросектора.",
          agroSchool_directions: "Основные направления обучения:",
        },
      },
      uz: {
        translation: {
          about_company_title: "Kompaniya haqida",
          about_company_desc:
            "Bizning qishloq xo‘jaligi kompaniyamiz qishloq xo‘jaligi mahsulotlarini ko‘paytirish va agrosektorga zamonaviy texnologiyalarni joriy etishga ixtisoslashgan.",
        },
      },
    },
  });

export default i18n;
