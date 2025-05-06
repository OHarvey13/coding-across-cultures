import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(Backend) // loads translations from your server
    .use(LanguageDetector) // detects user language
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, 
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', 
        },
    })

export default i18n