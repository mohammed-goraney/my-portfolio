/**
 * Lightweight i18n (EN / AR)
 * Zero external dependencies. Dictionary-based lookup with a React context
 * that only re-renders consumers when the language changes.
 * Translates UI chrome (labels, nav, section titles, CTAs). Content-rich
 * data (course names, certificate titles) stays in English for credibility.
 */
import React, { createContext, useContext, useEffect, useState } from 'react'

export type Locale = 'en' | 'ar'

const STORAGE_KEY = 'portfolio.locale'

export interface Dictionary {
  // navigation
  navHome: string
  navJourney: string
  navCourses: string
  navProjects: string
  navSkills: string
  navContact: string
  contactMe: string
  toggleMenu: string

  // hero
  heroCtaProjects: string
  heroCtaContact: string
  heroLinkedIn: string
  heroVerified: string
  heroAvailable: string
  heroScroll: string

  // pixel statement
  pixelStatementEyebrow: string

  // journey
  journeyTitle: string
  journeySubtitle: string

  // social proof
  socialProofTitle: string
  socialProofSubtitle: string
  socialProofCertifications: string
  socialProofCertIntro: string
  socialProofCertLink: string
  socialProofCertFullSize: string
  socialProofKeyAchievements: string
  socialProofYearsExp: string
  socialProofLabs: string
  socialProofHours: string
  socialProofTech: string
  socialProofCerts: string
  socialProofViewCert: string
  socialProofBadges: string
  socialProofRecommendations: string
  socialProofRecommendationsText: string

  // courses
  coursesTitle: string
  coursesSubtitle: string
  coursesEmpty: string
  filterAll: string
  filterNetworking: string
  filterDevOps: string
  filterSoftSkills: string
  filterProductivity: string
  viewCertificate: string
  credential: string

  // projects
  projectsTitle: string
  projectsSubtitle: string
  realProjectLabel: string
  caseStudyLabel: string
  theChallenge: string
  theApproach: string
  measurableOutcomes: string
  whatILearned: string
  source: string
  complexity: string

  // skills
  skillsTitle: string
  skillsSubtitle: string
  verifiedSkill: string

  // contact
  contactTitle: string
  contactSubtitle: string
  contactName: string
  contactEmail: string
  contactMessage: string
  contactSubmit: string
  contactSending: string
  contactSuccess: string
  contactError: string
  contactOrEmail: string
  contactEmailLabel: string
  contactInfoTitle: string
  contactQuickProjects: string
  contactQuickTimeline: string
  contactQuickSkills: string
  contactNamePlaceholder: string
  contactEmailPlaceholder: string
  contactMessagePlaceholder: string
  contactSuccessText: string
  contactErrorText: string
  contactRetry: string
  contactDelivered: string
  // footer / misc
  footerRights: string
  closeLightbox: string
  scrollToTop: string
}

export const en: Dictionary = {
  navHome: 'Home',
  navJourney: 'Journey',
  navCourses: 'Courses',
  navProjects: 'Projects',
  navSkills: 'Skills',
  navContact: 'Contact',
  contactMe: 'Contact Me',
  toggleMenu: 'Toggle menu',

  heroCtaProjects: 'View My Projects',
  heroCtaContact: 'Get In Touch',
  heroLinkedIn: 'LinkedIn',
  heroVerified: 'Verified',
  heroAvailable: 'Available for opportunities',
  heroScroll: 'Scroll',

  pixelStatementEyebrow: "Engineer's Statement",

  journeyTitle: 'My Journey',
  journeySubtitle: 'From passion to expertise',

  socialProofTitle: 'Recognition & Achievements',
  socialProofSubtitle: 'Certifications and validation of expertise',
  socialProofCertifications: 'Certifications',
  socialProofCertIntro: 'Seven official certificates issued by',
  socialProofCertLink: 'Networkat',
  socialProofCertFullSize: '— click any certificate to view it full size.',
  socialProofKeyAchievements: 'Key Achievements',
  socialProofYearsExp: 'Years Experience',
  socialProofLabs: 'Labs & Projects',
  socialProofHours: 'Learning Hours',
  socialProofTech: 'Technologies',
  socialProofCerts: 'Certifications',
  socialProofViewCert: 'View',
  socialProofBadges: 'Expertise Badges',
  socialProofRecommendations: 'Recommendations',
  socialProofRecommendationsText: 'Endorsed by colleagues and clients on LinkedIn',

  coursesTitle: 'Courses & Continuous Learning',
  coursesSubtitle: 'completed courses across networking, DevOps, and professional skills — verified on Google profile',
  coursesEmpty: 'No courses in this category yet.',
  filterAll: 'All',
  filterNetworking: 'Networking',
  filterDevOps: 'DevOps',
  filterSoftSkills: 'Soft Skills',
  filterProductivity: 'Productivity',
  viewCertificate: 'View Certificate',
  credential: 'Credential',

  projectsTitle: 'Case Studies',
  projectsSubtitle: 'Engineering problems, the approach, and measurable outcomes',
  realProjectLabel: 'Real Project · Hands-on Lab',
  caseStudyLabel: 'Case Study',
  theChallenge: 'The Challenge',
  theApproach: 'The Approach',
  measurableOutcomes: 'Measurable Outcomes',
  whatILearned: 'What I Learned',
  source: 'Source',
  complexity: 'complexity',

  skillsTitle: 'Technical Expertise',
  skillsSubtitle: 'Skills developed through hands-on experience',
  verifiedSkill: 'Verified skill',

  contactTitle: "Let's Build Something Great",
  contactSubtitle: 'Get in touch to discuss your next project',
  contactName: 'Your name',
  contactEmail: 'Your email',
  contactMessage: 'Tell me about your project...',
  contactSubmit: 'Send Message',
  contactSending: 'Sending...',
  contactSuccess: 'Message sent! I will get back to you soon.',
  contactError: 'Something went wrong. Please try again or email me directly.',
  contactOrEmail: 'Or email me directly',
  contactEmailLabel: 'Email',

  contactInfoTitle: 'Contact Information',
  contactQuickProjects: 'View Portfolio',
  contactQuickTimeline: 'See Timeline',
  contactQuickSkills: 'View Skills',
  contactNamePlaceholder: 'John Doe',
  contactEmailPlaceholder: 'you@gmail.com',
  contactMessagePlaceholder: 'Tell me about your project...',
  contactSuccessText: "Thank you — I got your message and will reply within 24 hours.",
  contactErrorText: "The message couldn't be sent right now. You can retry below or email me directly.",
  contactRetry: 'Try Again',
  contactDelivered: 'Delivered directly to my inbox · I respond within 24 hours',
  footerRights: 'All rights reserved.',
  closeLightbox: 'Close certificate viewer',
  scrollToTop: 'Scroll to top',
}

export const ar: Dictionary = {
  navHome: 'الرئيسية',
  navJourney: 'المسيرة',
  navCourses: 'الدورات',
  navProjects: 'المشاريع',
  navSkills: 'المهارات',
  navContact: 'التواصل',
  contactMe: 'تواصل معي',
  toggleMenu: 'تبديل القائمة',

  heroCtaProjects: 'شاهد مشاريعي',
  heroCtaContact: 'تواصل معي',
  heroLinkedIn: 'لينكدإن',
  heroVerified: 'موثقة',
  heroAvailable: 'متاح للفرص الوظيفية',
  heroScroll: 'مرر للأسفل',

  pixelStatementEyebrow: 'بيان المهندس',

  journeyTitle: 'مسيرتي المهنية',
  journeySubtitle: 'من الشغف إلى الخبرة',

  socialProofTitle: 'الاعتراف والإنجازات',
  socialProofSubtitle: 'الشهادات وإثبات الخبرة',
  socialProofCertifications: 'الشهادات',
  socialProofCertIntro: 'سبع شهادات رسمية صادرة من',
  socialProofCertLink: 'Networkat',
  socialProofCertFullSize: '— اضغط على أي شهادة لعرضها بالحجم الكامل.',
  socialProofKeyAchievements: 'أبرز الإنجازات',
  socialProofYearsExp: 'سنوات الخبرة',
  socialProofLabs: 'المعامل والمشاريع',
  socialProofHours: 'ساعات التعلم',
  socialProofTech: 'التقنيات',
  socialProofCerts: 'الشهادات',
  socialProofViewCert: 'عرض',
  socialProofBadges: 'شارات الخبرة',
  socialProofRecommendations: 'توصيات',
  socialProofRecommendationsText: 'تأييد من الزملاء والعملاء على لينكدإن',

  coursesTitle: 'الدورات والتعلم المستمر',
  coursesSubtitle: 'دورة مكتملة عبر الشبكات وديف أوبس والمهارات المهنية — موثقة عبر ملف جوجل',
  coursesEmpty: 'لا توجد دورات في هذا التصنيف بعد.',
  filterAll: 'الكل',
  filterNetworking: 'الشبكات',
  filterDevOps: 'ديف أوبس',
  filterSoftSkills: 'المهارات الشخصية',
  filterProductivity: 'الإنتاجية',
  viewCertificate: 'عرض الشهادة',
  credential: 'الرابط الرسمي',

  projectsTitle: 'دراسات الحالة',
  projectsSubtitle: 'مشاكل هندسية، المنهجية، والنتائج القابلة للقياس',
  realProjectLabel: 'مشروع حقيقي · معمل تطبيقي',
  caseStudyLabel: 'دراسة حالة',
  theChallenge: 'التحدي',
  theApproach: 'المنهجية',
  measurableOutcomes: 'نتائج قابلة للقياس',
  whatILearned: 'ماذا تعلمت',
  source: 'المصدر',
  complexity: 'التعقيد',

  skillsTitle: 'الخبرة التقنية',
  skillsSubtitle: 'مهارات طُورت عبر التطبيق العملي',
  verifiedSkill: 'مهارة موثقة',

  contactTitle: 'لنبني شيئاً عظيماً',
  contactSubtitle: 'تواصل معي لمناقشة مشروعك القادم',
  contactName: 'الاسم',
  contactEmail: 'البريد الإلكتروني',
  contactMessage: 'أخبرني عن مشروعك...',
  contactSubmit: 'إرسال الرسالة',
  contactSending: 'جارٍ الإرسال...',
  contactSuccess: 'تم إرسال الرسالة! سأرد عليك قريباً.',
  contactError: 'حدث خطأ. حاول مرة أخرى أو راسلني بالبريد مباشرة.',
  contactOrEmail: 'أو راسلني مباشرة بالبريد',
  contactEmailLabel: 'البريد الإلكتروني',

  contactInfoTitle: 'معلومات التواصل',
  contactQuickProjects: 'عرض البورتفوليو',
  contactQuickTimeline: 'عرض المسيرة المهنية',
  contactQuickSkills: 'عرض المهارات',
  contactNamePlaceholder: 'الاسم الكامل',
  contactEmailPlaceholder: 'بريدك الإلكتروني',
  contactMessagePlaceholder: 'أخبرني عن مشروعك...',
  contactSuccessText: 'شكراً — استلمت رسالتك وسأرد خلال 24 ساعة.',
  contactErrorText: 'تعذّر إرسال الرسالة الآن. يمكنك المحاولة مجدداً أو مراسلتي مباشرة.',
  contactRetry: 'حاول مجدداً',
  contactDelivered: 'تُسلَّم مباشرة إلى بريدي · أرد خلال 24 ساعة',
  footerRights: 'جميع الحقوق محفوظة.',
  closeLightbox: 'إغلاق عارض الشهادة',
  scrollToTop: 'العودة للأعلى',
}

export const dictionaries: Record<Locale, Dictionary> = { en, ar }

interface I18nValue {
  locale: Locale
  t: Dictionary
  setLocale: (l: Locale) => void
}

const I18nContext = createContext<I18nValue>({
  locale: 'en',
  t: en,
  setLocale: () => {},
})

export const useI18n = () => useContext(I18nContext)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    return saved === 'ar' ? 'ar' : 'en'
  })

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // storage unavailable — ignore
    }
  }

  // apply dir + lang attributes for RTL support
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  const value = React.useMemo(() => ({ locale, t: dictionaries[locale], setLocale }), [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
