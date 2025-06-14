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
          link_home: "Главная",
          link_about: "О компании",
          link_projects: "Проекты",
          link_agroschool: "Агрошкола",
          link_partners: "Партнеры",
          link_news: "Новости",
          link_contacts: "Контакты",
          footer_contacts: "Контактная информация",
          footer_links: "Быстрые ссылки",
          banner_title: "Развиваем сельское хозяйство будущего",
          banner_desc:
            "Инновационные решения для увеличения сельскохозяйственной продукции и устойчивого развития агросектора",
          banner_btn: "Связаться с нами",
          lastNews_title: "Последние новости",
          lastNews_link: "Посмотреть все",
          about_company_title: "О Компании",
          about_company_desc:
            "Наша сельскохозяйственная компания специализируется на увеличении сельскохозяйственной продукции и внедрении современных технологий агросектор.",
          agroSchool_title: "Сельскохозяйственная школа",
          agroSchool_desc:
            "Наша агрошкола предоставляет современное образование в области сельского хозяйства, готовя квалифицированных специалистов для агросектора.",
          agroSchool_directions: "Основные направления обучения:",
          projects_title: "Наши проекты",
          partners_title: "Наши партнеры",
          news_title: "Новости и объявления",
          contacts_title: "Свяжитесь с нами",
        },
      },
      uz: {
        translation: {
          link_home: "Asosiy",
          link_about: "Kompaniya haqida",
          link_projects: "Loyihalar",
          link_agroschool: "Agromaktab",
          link_partners: "Hamkorlar",
          link_news: "Yangiliklar",
          link_contacts: "Kontaktlar",
          footer_contacts: "Aloqa ma’lumotlari",
          footer_links: "Tezkor havolalar",
          banner_title: "Kelajak qishloq xo‘jaligini rivojlantiramiz",
          banner_desc:
            "Qishloq xo‘jaligi mahsulotlarini ko‘paytirish va agrosektorni barqaror rivojlantirish uchun innovatsion yechimlar",
          banner_btn: "Biz bilan aloqa",
          lastNews_title: "So‘nggi yangiliklar",
          lastNews_link: "Hammasini ko‘rish",
          about_company_title: "Kompaniya haqida",
          about_company_desc:
            "Bizning qishloq xo‘jaligi kompaniyamiz qishloq xo‘jaligi mahsulotlarini ko‘paytirish va agrosektorga zamonaviy texnologiyalarni joriy etishga ixtisoslashgan.",
          projects_title: "Loyihalarimiz",
          partners_title: "Hamkorlarimiz",
          news_title: "Yangiliklar va e’lonlar",
          contacts_title: "Biz bilan bog‘lanish",
        },
      },
    },
  });

export default i18n;
