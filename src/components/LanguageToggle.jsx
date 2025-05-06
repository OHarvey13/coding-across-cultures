import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ja' : 'en'
    i18n.changeLanguage(nextLang)
  }

  return (
    <button 
      onClick={toggleLanguage} 
      style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}
    >
      {t('toggle_language')}
    </button>
  )
}