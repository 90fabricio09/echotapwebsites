import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [showOptions, setShowOptions] = useState(false);

  const languages = {
    pt: {
      language: 'Português',
      icon: '🇧🇷'
    },
    en: {
      language: 'English',
      icon: '🇺🇸'
    },
    es: {
      language: 'Español',
      icon: '🇪🇸'
    },
    fr: {
      language: 'Français',
      icon: '🇫🇷'
    },
    de: {
      language: 'Deutsch',
      icon: '🇩🇪'
    },
    it: {
      language: 'Italiano',
      icon: '🇮🇹'
    },
    ja: {
      language: '日本語',
      icon: '🇯🇵'
    },
    zh: {
      language: '中文',
      icon: '🇨🇳'
    },
    ru: {
      language: 'Русский',
      icon: '🇷🇺'
    },
    ar: {
      language: 'العربية',
      icon: '🇸🇦'
    },
    hi: {
      language: 'हिन्दी',
      icon: '🇮🇳'
    },
    ko: {
      language: '한국어',
      icon: '🇰🇷'
    }
  };

  const translations = {
    pt: {
      title: 'EchoTap',
      bio: 'Soluções digitais inovadoras para seu negócio',
      website: 'Website',
      websiteDesc: 'Conheça nosso site oficial',
      instagram: 'Instagram',
      instagramDesc: 'Siga-nos no Instagram',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Entre em contato conosco',
      language: 'Idioma',
      footer: 'Desenvolvido com',
      by: 'por'
    },
    en: {
      title: 'EchoTap',
      bio: 'Innovative digital solutions for your business',
      website: 'Website',
      websiteDesc: 'Visit our official website',
      instagram: 'Instagram',
      instagramDesc: 'Follow us on Instagram',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Get in touch with us',
      language: 'Language',
      footer: 'Developed with',
      by: 'by'
    },
    es: {
      title: 'EchoTap',
      bio: 'Soluciones digitales innovadoras para tu negocio',
      website: 'Sitio Web',
      websiteDesc: 'Visita nuestro sitio oficial',
      instagram: 'Instagram',
      instagramDesc: 'Síguenos en Instagram',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Contáctanos',
      language: 'Idioma',
      footer: 'Desarrollado con',
      by: 'por'
    },
    fr: {
      title: 'EchoTap',
      bio: 'Solutions numériques innovantes pour votre entreprise',
      website: 'Site Web',
      websiteDesc: 'Visitez notre site officiel',
      instagram: 'Instagram',
      instagramDesc: 'Suivez-nous sur Instagram',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Contactez-nous',
      language: 'Langue',
      footer: 'Développé avec',
      by: 'par'
    },
    de: {
      title: 'EchoTap',
      bio: 'Innovative digitale Lösungen für Ihr Unternehmen',
      website: 'Webseite',
      websiteDesc: 'Besuchen Sie unsere offizielle Website',
      instagram: 'Instagram',
      instagramDesc: 'Folgen Sie uns auf Instagram',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Kontaktieren Sie uns',
      language: 'Sprache',
      footer: 'Entwickelt mit',
      by: 'von'
    },
    it: {
      title: 'EchoTap',
      bio: 'Soluzioni digitali innovative per la tua azienda',
      website: 'Sito Web',
      websiteDesc: 'Visita il nostro sito ufficiale',
      instagram: 'Instagram',
      instagramDesc: 'Seguici su Instagram',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Contattaci',
      language: 'Lingua',
      footer: 'Sviluppato con',
      by: 'da'
    },
    ja: {
      title: 'EchoTap',
      bio: 'ビジネスのための革新的なデジタルソリューション',
      website: 'ウェブサイト',
      websiteDesc: '公式サイトをご覧ください',
      instagram: 'Instagram',
      instagramDesc: 'Instagramでフォロー',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'お問い合わせ',
      language: '言語',
      footer: '開発者',
      by: 'by'
    },
    zh: {
      title: 'EchoTap',
      bio: '为您的企业提供创新的数字解决方案',
      website: '网站',
      websiteDesc: '访问我们的官方网站',
      instagram: 'Instagram',
      instagramDesc: '在Instagram上关注我们',
      whatsapp: 'WhatsApp',
      whatsappDesc: '联系我们',
      language: '语言',
      footer: '由',
      by: '开发'
    },
    ru: {
      title: 'EchoTap',
      bio: 'Инновационные цифровые решения для вашего бизнеса',
      website: 'Веб-сайт',
      websiteDesc: 'Посетите наш официальный сайт',
      instagram: 'Instagram',
      instagramDesc: 'Подписывайтесь на нас в Instagram',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Свяжитесь с нами',
      language: 'Язык',
      footer: 'Разработано',
      by: 'от'
    },
    ar: {
      title: 'EchoTap',
      bio: 'حلول رقمية مبتكرة لعملك',
      website: 'الموقع الإلكتروني',
      websiteDesc: 'قم بزيارة موقعنا الرسمي',
      instagram: 'Instagram',
      instagramDesc: 'تابعنا على Instagram',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'تواصل معنا',
      language: 'اللغة',
      footer: 'تم التطوير بواسطة',
      by: 'من'
    },
    hi: {
      title: 'EchoTap',
      bio: 'आपके व्यवसाय के लिए नवीन डिजिटल समाधान',
      website: 'वेबसाइट',
      websiteDesc: 'हमारी आधिकारिक वेबसाइट देखें',
      instagram: 'Instagram',
      instagramDesc: 'Instagram पर हमें फॉलो करें',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'हमसे संपर्क करें',
      language: 'भाषा',
      footer: 'विकसित',
      by: 'द्वारा'
    },
    ko: {
      title: 'EchoTap',
      bio: '비즈니스를 위한 혁신적인 디지털 솔루션',
      website: '웹사이트',
      websiteDesc: '공식 웹사이트를 방문하세요',
      instagram: 'Instagram',
      instagramDesc: 'Instagram에서 팔로우하세요',
      whatsapp: 'WhatsApp',
      whatsappDesc: '문의하기',
      language: '언어',
      footer: '개발',
      by: 'by'
    }
  };

  const toggleLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      toggleLanguage, 
      translations: translations[currentLanguage],
      languages,
      showOptions,
      setShowOptions
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 