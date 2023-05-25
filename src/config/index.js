import LifeCoLogo from '../assets/Images/Logo.png';
import Proxima from '../assets/Fonts/ProximaNova-Regular.ttf';
import ProximaMedium from '../assets/Fonts/proxima-nova-medium.ttf';
import ProximaSemiBold from '../assets/Fonts/ProximaNova-Semibold.ttf';

const LifeCo = {
  global: {
    appTitle: 'LifeCo',
    favicon: '',
    homepage: '',
    carrierName: 'LifeCo',
  },
  branding: {
    logo: LifeCoLogo,
    altText: 'LifeCo',
  },
  footer: {
    phoneNumber: '800-555-5555',
    supportEmail: 'support@sureify.com',
    disclaimerDesc: '©2020 LifeCo. Insurance Company',
    disclaimerSubText: 'Made with love in CA',
    footerLinks: [
      {
        id: 'dashboard',
        linkText: 'Dashboard',
        linkUrl: '/dashboard',
      },
      {
        id: 'eula',
        linkText: 'End User License Agreement',
        linkUrl: '/eula',
      },
      {
        id: 'faqs',
        linkText: 'FAQs',
        linkUrl: '/',
      },
      {
        id: 'policies',
        linkText: 'Policies',
        linkUrl: '/policies',
      },
      {
        id: 'documentDownloadCenter',
        linkText: 'Document Download Center',
        linkUrl: '/',
      },
      {
        id: 'annualStatements',
        linkText: 'Annual Statements',
        linkUrl: '/',
      },

      {
        id: 'termsAndConditions',
        linkText: 'Terms & Conditions',
        linkUrl: '/termsandconditions',
      },
      {
        id: 'payment',
        linkText: 'Make a Payment',
        linkUrl: '/',
      },
    ],
  },
  topBar: {
    topBarLinks: [
      {
        id: 1,
        name: 'Policy',
        page_url: '/policy',
        placeAtStart: true,
      },
    ],
  },
  theme: {
    global: {
      primaryColor: 'rgba(59, 83, 105, 1)',
      topbarBackground: 'rgba(255,255,255)',
      footerBackground: 'rgba(255,255,255)',
      footerTextColor: '#000000',
      primaryFont: Proxima,
      primaryFontMedium: ProximaMedium,
      primaryFontSemiBold: ProximaSemiBold,
    },
  },
};

export default LifeCo;
