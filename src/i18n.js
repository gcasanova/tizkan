import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(reactI18nextModule) // if not using I18nextProvider
    .init({
        debug: true,
        fallbackLng: 'es',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },

        interpolation: {
            escapeValue: false, // not needed for react!!
        },

        // react i18next special options (optional)
        react: {
            wait: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    });


export default i18n;
