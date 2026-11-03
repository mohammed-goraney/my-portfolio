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
  heroTargetRoles: string

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
  filterProfessional: string
  filterProductivity: string
  filterTechnical: string
  filterProfessionalDevelopment: string
  filterFieldCommunity: string
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

  // hero content
  heroEyebrow: string
  heroRole: string
  heroValueProposition: string
  heroSupportingText: string

  // pixel statement content
  pixelLine1: string
  pixelLine2: string
  pixelLine3: string
  pixelWord1: string
  pixelWord2: string
  pixelWord3: string
  pixelWord4: string

  // journey content
  journeyIntro: string
  milestone0Title: string
  milestone0Desc: string
  milestone0Details: string
  milestone1Title: string
  milestone1Desc: string
  milestone1Details: string
  milestone2Title: string
  milestone2Desc: string
  milestone2Details: string
  milestone3Title: string
  milestone3Desc: string
  milestone3Details: string
  milestone4Title: string
  milestone4Desc: string
  milestone4Details: string
  milestone5Title: string
  milestone5Desc: string
  milestone5Details: string
  journeyNowTitle: string
  journeyNowDesc: string
  journeyNowKeyword1: string
  journeyNowKeyword2: string
  journeyNowKeyword3: string
  journeyNowKeyword4: string
  journeyCTA: string

  // docker project content
  dockerTitle: string
  dockerShortDesc: string
  dockerFullDesc: string
  dockerChallenge: string
  dockerApproach: string
  dockerApproachMethod: string
  dockerResult1Title: string
  dockerResult1Desc: string
  dockerResult2Title: string
  dockerResult2Desc: string
  dockerResult3Title: string
  dockerResult3Desc: string
  dockerLesson1: string
  dockerLesson2: string
  dockerLesson3: string
  dockerDecision1: string
  dockerDecision2: string
  dockerDecision3: string
  dockerDuration: string
  dockerMicroLabel: string

  // enterprise network project content
  enterpriseTitle: string
  enterpriseShortDesc: string
  enterpriseFullDesc: string
  enterpriseChallenge: string
  enterpriseApproach: string
  enterpriseApproachMethod: string
  enterpriseResult1Title: string
  enterpriseResult1Desc: string
  enterpriseResult2Title: string
  enterpriseResult2Desc: string
  enterpriseResult3Title: string
  enterpriseResult3Desc: string
  enterpriseLesson1: string
  enterpriseLesson2: string
  enterpriseLesson3: string
  enterpriseDecision1: string
  enterpriseDecision2: string
  enterpriseDecision3: string
  enterpriseDuration: string
  enterpriseMicroLabel: string

  // social proof content
  achievement1: string
  achievement2: string
  achievement3: string
  achievement4: string
  achievement5: string
  achievement6: string
  badge1Label: string
  badge2Label: string
  badge3Label: string

  // skills content
  skillsIntro: string
  skillsYrs: string
  skillCat0Name: string
  skillCat0Desc: string
  skillCat1Name: string
  skillCat1Desc: string
  skillCat2Name: string
  skillCat2Desc: string
  skillCat3Name: string
  skillCat3Desc: string
  skillCat4Name: string
  skillCat4Desc: string
  skillCat5Name: string
  skillCat5Desc: string

  skillsSummaryCategories: string
  skillsSummaryTotal: string
  skillsSummaryAvg: string
  skillsSummaryYears: string
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
  socialProofCertIntro: 'Seven certificates issued by',
  socialProofCertLink: 'Networkat',
  socialProofCertFullSize: '— click any certificate to view it full size.',
  socialProofKeyAchievements: 'Key Achievements',
  socialProofYearsExp: 'Years Hands-on Practice',
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
  filterProfessional: 'Professional',
  filterProductivity: 'Productivity',
  filterTechnical: 'Technical & Systems',
  filterProfessionalDevelopment: 'Professional Development',
  filterFieldCommunity: 'Field & Community Training',
  viewCertificate: 'View Certificate',
  credential: 'Credential',

  projectsTitle: 'Case Studies',
  projectsSubtitle: 'Engineering problems, the approach, and measurable outcomes',
  realProjectLabel: 'Hands-on Lab · Portfolio Project',
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

  heroEyebrow: 'Networks · DevOps · Cloud · Linux',
  heroRole: 'Network · Cloud · DevOps',
  heroValueProposition:
    'Building secure, scalable network infrastructure and cloud solutions with hands-on expertise in Azure, Linux, Docker, and enterprise networking.',
  heroSupportingText:
    'Completed CCNA/CCNP-aligned networking training and Azure AZ-104-focused learning, with hands-on practice in Linux administration, network automation, containerization, and DevOps.',
  heroTargetRoles:
    'Open to junior and entry-level roles in Network Engineering, NOC Operations, Cloud Support, Linux Administration, and DevOps.',

  pixelLine1: 'Networks that hold.',
  pixelLine2: 'Pipelines that run.',
  pixelLine3: 'Systems that stay up.',
  pixelWord1: 'BUILD',
  pixelWord2: 'SECURE',
  pixelWord3: 'AUTOMATE',
  pixelWord4: 'SCALE',

  journeyIntro:
    'From IT education to specialized expertise in enterprise networking and cloud infrastructure. A continuous journey of learning, certification, and hands-on experience in building secure, scalable systems.',
  milestone0Title: 'Bachelor of Science in Information Technology',
  milestone0Desc: 'Completed a Bachelor of Science in Information Technology with a foundation in computer systems and networks',
  milestone0Details: 'Graduated in 2026 with a foundation in IT fundamentals, networking basics, and system administration.',
  milestone1Title: 'Networking Specialization Journey Begins',
  milestone1Desc: 'Started a focused networking learning and certification path',
  milestone1Details: 'Started the Networkat networking course in February 2025 and began building hands-on labs in enterprise network design.',
  milestone2Title: 'Cisco CCNA Certification Achieved',
  milestone2Desc: 'Completed comprehensive CCNA training through the Networkat platform',
  milestone2Details: 'Mastered networking fundamentals through comprehensive courses and practical labs.',
  milestone3Title: 'Cisco CCNP & Azure Cloud Journey',
  milestone3Desc: 'Continued advanced networking with CCNP and cloud infrastructure with Azure AZ-104',
  milestone3Details:
    'Progressed through CCNP topics and Azure-focused cloud infrastructure learning with practical design exercises.',
  milestone4Title: 'DevOps & Containerization Skills',
  milestone4Desc: 'Started building foundational Docker and DevOps skills',
  milestone4Details:
    'Started learning Docker and DevOps in 2026 through hands-on labs and practical containerization exercises.',
  milestone5Title: 'Continuous Learning & Specialization',
  milestone5Desc: '11 verified courses and programs completed across multiple platforms and technologies',
  milestone5Details:
    'Continued structured learning in 2026 through verified courses from Google, Packt, Coursera, IBM, and specialized platforms in networking, cloud, DevOps, and automation.',
  journeyNowTitle: 'NOW',
  journeyNowDesc:
    'Deepening expertise in Kubernetes orchestration, preparing for advanced cloud certifications, and exploring edge computing solutions for enterprise networks.',
  journeyNowKeyword1: 'Kubernetes',
  journeyNowKeyword2: 'Advanced Cloud',
  journeyNowKeyword3: 'Edge Computing',
  journeyNowKeyword4: 'Network Automation',
  journeyCTA: 'Ready to collaborate on enterprise networking or cloud infrastructure projects?',

  dockerTitle: 'Docker Example Voting App Lab',
  dockerShortDesc:
    'Multi-container application orchestrated with Docker Compose: Vote App → Redis → Worker → PostgreSQL → Result App',
  dockerFullDesc:
    'Hands-on Docker lab completed after the Docker for Beginners course. Five containers communicate over a single Docker network, with Redis acting as the message queue and a .NET background worker persisting votes into PostgreSQL.',
  dockerChallenge:
    'Running multiple containers and making them communicate reliably: service discovery, networking, environment variables, and background worker lifecycle.',
  dockerApproach:
    'Defined all five services in a single docker-compose.yml, wired them through a shared bridge network, and used docker logs to troubleshoot container communication.',
  dockerApproachMethod: 'Docker Compose · Container Orchestration',
  dockerResult1Title: 'Containers',
  dockerResult1Desc: '5 services on 1 network',
  dockerResult2Title: 'Messaging',
  dockerResult2Desc: 'Queue-backed async vote processing',
  dockerResult3Title: 'Skills',
  dockerResult3Desc: 'Networking, env vars, docker logs troubleshooting',
  dockerLesson1: 'Running and debugging multi-container applications with docker logs',
  dockerLesson2: 'Docker networking: service discovery by container name',
  dockerLesson3: 'Environment variables and the role of background workers',
  dockerDecision1: 'Redis as the message queue between Vote App and Worker',
  dockerDecision2: 'PostgreSQL as the single source of truth for votes',
  dockerDecision3: 'One docker-compose.yml to define the whole stack',
  dockerDuration: 'Completed after Docker course',
  dockerMicroLabel: 'Real hands-on lab · Completed',

  enterpriseTitle: 'Enterprise Campus Network — CCNP ENCOR Lab',
  enterpriseShortDesc:
    'Full-scale enterprise network for "Goraney Technologies" featuring a 3-tier hierarchical design, OSPF dynamic routing, and HSRP redundancy.',
  enterpriseFullDesc:
    'An enterprise network simulation based on CCNP ENCOR design principles. The lab applies Cisco best practices across Core, Distribution, and Access layers to explore availability, VLAN isolation, and scalable dynamic routing.',
  enterpriseChallenge:
    'Designing a network that eliminates single points of failure while maintaining efficient traffic routing and ease of management.',
  enterpriseApproach:
    'Implemented a hierarchical model with EtherChannel for link aggregation, HSRP for gateway redundancy, and OSPF for dynamic routing across the core and distribution layers.',
  enterpriseApproachMethod: 'Hierarchical Network Model · Redundancy & HA',
  enterpriseResult1Title: 'High Availability',
  enterpriseResult1Desc: 'HSRP & redundant links designed to improve gateway availability',
  enterpriseResult2Title: 'Network Security',
  enterpriseResult2Desc: 'VLAN isolation & Port Security implemented',
  enterpriseResult3Title: 'Dynamic Routing',
  enterpriseResult3Desc: 'OSPF for automatic failover and scalability',
  enterpriseLesson1: 'Designing fault-tolerant hierarchical networks using Cisco best practices',
  enterpriseLesson2: 'Configuring Inter-VLAN routing and HSRP for gateway redundancy',
  enterpriseLesson3: 'Implementing security features like DHCP Snooping and Port Security',
  enterpriseDecision1: 'Goraney Technologies corporate structure (HR, Finance, IT, Sales) segmentation',
  enterpriseDecision2: 'EtherChannel between Core switches to maximize backbone bandwidth',
  enterpriseDecision3: 'NAT/PAT on the Edge router for secure internet egress',
  enterpriseDuration: 'CCNP ENCOR Hands-on Lab',
  enterpriseMicroLabel: 'CCNP ENCOR · Enterprise Lab',

  achievement1: 'Completed 11 professional courses and programs across networking, DevOps, and productivity platforms — verified on Google profile',
  achievement2: 'Two documented hands-on labs covering enterprise networking and containerized applications',
  achievement3: 'Seven Networkat certificates covering networking, cloud, security, and Linux topics',
  achievement4: 'Completed Azure AZ-104-focused cloud infrastructure learning',
  achievement5: 'Docker containerization and DevOps fundamentals mastered',
  achievement6: 'Advanced expertise in Enterprise Network Design, Security, and Automation',
  badge1Label: 'Network Architect',
  badge2Label: 'Cloud Engineer',
  badge3Label: 'DevOps Enthusiast',

  skillsIntro:
    'Hands-on experience with enterprise networking, cloud infrastructure, and modern DevOps practices. Certified across multiple platforms including Cisco, Microsoft Azure, and containerization technologies.',
  skillsYrs: 'yrs',
  skillCat0Name: 'Enterprise Networking',
  skillCat0Desc: 'Cisco CCNA, CCNP. Advanced routing, network design, and security.',
  skillCat1Name: 'Cloud Infrastructure',
  skillCat1Desc: 'Microsoft Azure. Cloud design, deployment, and management.',
  skillCat2Name: 'Containerization & DevOps',
  skillCat2Desc: 'Docker expertise and DevOps fundamentals for modern infrastructure.',
  skillCat3Name: 'Linux System Administration',
  skillCat3Desc: 'Practical Linux experience for network and infrastructure management.',
  skillCat4Name: 'Network Automation',
  skillCat4Desc: 'Automation tools and practices for network management and efficiency.',
  skillCat5Name: 'Development & Tools',
  skillCat5Desc: 'Version control, collaboration tools, and development practices.',

  skillsSummaryCategories: 'Categories',
  skillsSummaryTotal: 'Total Skills',
  skillsSummaryAvg: 'Avg Level',
  skillsSummaryYears: 'Years Exp',
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
  heroTargetRoles:
    'متاح لفرص Junior وEntry-level في هندسة الشبكات، عمليات NOC، دعم السحابة، إدارة Linux، وDevOps.',
  heroScroll: 'مرر للأسفل',

  pixelStatementEyebrow: 'بيان المهندس',

  journeyTitle: 'مسيرتي المهنية',
  journeySubtitle: 'من الشغف إلى الخبرة',

  socialProofTitle: 'الاعتراف والإنجازات',
  socialProofSubtitle: 'الشهادات وإثبات الخبرة',
  socialProofCertifications: 'الشهادات',
  socialProofCertIntro: 'سبع شهادات صادرة من',
  socialProofCertLink: 'Networkat',
  socialProofCertFullSize: '— اضغط على أي شهادة لعرضها بالحجم الكامل.',
  socialProofKeyAchievements: 'أبرز الإنجازات',
  socialProofYearsExp: 'سنة ممارسة عملية',
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
  filterProfessional: 'مهني',
  filterProductivity: 'الإنتاجية',
  filterTechnical: 'تقني وأنظمة',
  filterProfessionalDevelopment: 'التطوير المهني',
  filterFieldCommunity: 'تدريب ميداني ومجتمعي',
  viewCertificate: 'عرض الشهادة',
  credential: 'الرابط الرسمي',

  projectsTitle: 'دراسات الحالة',
  projectsSubtitle: 'مشاكل هندسية، المنهجية، والنتائج القابلة للقياس',
  realProjectLabel: 'معمل تطبيقي · مشروع بورتفوليو',
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

  heroEyebrow: 'الشبكات · ديف أوبس · السحابة · لينكس',
  heroRole: 'مهندس شبكات · سحابة · ديف أوبس',
  heroValueProposition:
    'بناء بنية شبكات آمنة وقابلة للتوسع وحلول سحابية بخبرة عملية في Azure ولينكس وDocker وشبكات المؤسسات.',
  heroSupportingText:
    'أكملت تدريبًا متخصصًا متوافقًا مع CCNA وCCNP وتعلمًا يركز على Azure AZ-104، مع ممارسة عملية في إدارة Linux وأتمتة الشبكات والحاويات وDevOps.',

  pixelLine1: 'شبكات تصمد.',
  pixelLine2: 'مسارات عمل تعمل.',
  pixelLine3: 'أنظمة لا تتوقف.',
  pixelWord1: 'ابني',
  pixelWord2: 'أمّن',
  pixelWord3: 'أتمت',
  pixelWord4: 'وسّع',

  journeyIntro:
    'من دراسة تقنية المعلومات إلى التخصص في شبكات المؤسسات والبنية السحابية. مسيرة مستمرة من التعلم والشهادات والخبرة العملية في بناء أنظمة آمنة وقابلة للتوسع.',
  milestone0Title: 'بكالوريوس تقنية المعلومات',
  milestone0Desc: 'إكمال بكالوريوس تقنية المعلومات مع أساس في أنظمة الحاسوب والشبكات',
  milestone0Details: 'التخرج في 2026 مع أساس في تقنية المعلومات والشبكات وإدارة الأنظمة.',
  milestone1Title: 'بداية التخصص في الشبكات',
  milestone1Desc: 'بدء مسار مركز للتعلم والشهادات في شبكات المؤسسات',
  milestone1Details: 'بدء كورس الشبكات من Networkat في فبراير 2025 وبناء معامل عملية في تصميم شبكات المؤسسات.',
  milestone2Title: 'الحصول على شهادة Cisco CCNA',
  milestone2Desc: 'إكمال تدريب CCNA الشامل عبر منصة Networkat',
  milestone2Details: 'إتقان أساسيات الشبكات عبر دورات شاملة ومعامل عملية.',
  milestone3Title: 'رحلة CCNP وسحابة Azure',
  milestone3Desc: 'مواصلة التقدم في الشبكات مع CCNP والبنية السحابية مع Azure AZ-104',
  milestone3Details:
    'التقدم في موضوعات CCNP والبنية السحابية مع تعلم يركز على Azure AZ-104 وتطبيقات عملية في تصميم البنية التحتية.',
  milestone4Title: 'مهارات ديف أوبس والحاويات',
  milestone4Desc: 'بدء بناء مهارات Docker وديف أوبس الأساسية',
  milestone4Details:
    'بدء تعلم Docker وديف أوبس في 2026 عبر معامل عملية وتمارين في الحاويات.',
  milestone5Title: 'التعلم المستمر والتخصص',
  milestone5Desc: 'إكمال 11 دورة وبرنامجاً موثقاً عبر منصات وتقنيات متعددة',
  milestone5Details:
    'مواصلة التعلم المنظم في 2026 عبر دورات موثقة من Google وPackt وCoursera وIBM ومنصات متخصصة في الشبكات والسحابة وديف أوبس والأتمتة.',
  journeyNowTitle: 'الآن',
  journeyNowDesc:
    'تعميق الخبرة في Kubernetes، والاستعداد لشهادات سحابية متقدمة، واستكشاف حلول الحوسبة الطرفية لشبكات المؤسسات.',
  journeyNowKeyword1: 'Kubernetes',
  journeyNowKeyword2: 'السحابة المتقدمة',
  journeyNowKeyword3: 'الحوسبة الطرفية',
  journeyNowKeyword4: 'أتمتة الشبكات',
  journeyCTA: 'جاهز للتعاون في مشاريع شبكات المؤسسات أو البنية السحابية؟',

  dockerTitle: 'معمل Docker — تطبيق التصويت',
  dockerShortDesc:
    'تطبيق متعدد الحاويات مُدار عبر Docker Compose: تطبيق التصويت → Redis → عامل الخلفية → PostgreSQL → تطبيق النتائج',
  dockerFullDesc:
    'معمل Docker عملي أُكمل بعد دورة Docker للمبتدئين. خمس حاويات تتواصل عبر شبكة Docker واحدة، مع عمل Redis كطابور رسائل وعامل خلفية .NET لحفظ الأصوات في PostgreSQL.',
  dockerChallenge:
    'تشغيل عدة حاويات وضمان تواصلها الموثوق: اكتشاف الخدمات، والشبكات، والمتغيرات البيئية، ودورة حياة عامل الخلفية.',
  dockerApproach:
    'تعريف جميع الخدمات الخمس في ملف docker-compose.yml واحد، وربطها عبر شبكة bridge مشتركة، واستخدام docker logs لحل مشاكل تواصل الحاويات.',
  dockerApproachMethod: 'Docker Compose · إدارة الحاويات',
  dockerResult1Title: 'الحاويات',
  dockerResult1Desc: '5 خدمات على شبكة واحدة',
  dockerResult2Title: 'المراسلة',
  dockerResult2Desc: 'معالجة أصوات غير متزامنة عبر الطابور',
  dockerResult3Title: 'المهارات',
  dockerResult3Desc: 'الشبكات والمتغيرات البيئية واستكشاف الأخطاء عبر docker logs',
  dockerLesson1: 'تشغيل تطبيقات متعددة الحاويات واكتشاف أخطائها عبر docker logs',
  dockerLesson2: 'شبكات Docker: اكتشاف الخدمات بأسماء الحاويات',
  dockerLesson3: 'المتغيرات البيئية ودور عمال الخلفية',
  dockerDecision1: 'Redis كطابور رسائل بين تطبيق التصويت وعامل الخلفية',
  dockerDecision2: 'PostgreSQL كمصدر الحقيقة الوحيد للأصوات',
  dockerDecision3: 'ملف docker-compose.yml واحد لتعريف المنظومة كاملة',
  dockerDuration: 'أُكمل بعد دورة Docker',
  dockerMicroLabel: 'معمل تطبيقي حقيقي · مكتمل',

  enterpriseTitle: 'شبكة حرم المؤسسة — معمل CCNP ENCOR',
  enterpriseShortDesc:
    'شبكة مؤسسات كاملة لشركة "Goraney Technologies" تتميز بتصميم هرمي ثلاثي الطبقات، وتوجيه OSPF ديناميكي، وتكرارية HSRP.',
  enterpriseFullDesc:
    'محاكاة لشبكة مؤسسية مبنية على مبادئ تصميم CCNP ENCOR. يطبق المعمل أفضل ممارسات Cisco عبر طبقات Core وDistribution وAccess لاستكشاف التوافر وعزل VLAN والتوجيه الديناميكي القابل للتوسع.',
  enterpriseChallenge:
    'تصميم شبكة تقضي على نقاط الفشل الفردية مع الحفاظ على كفاءة توجيه حركة المرور وسهولة الإدارة.',
  enterpriseApproach:
    'تنفيذ نموذج هرمي مع EtherChannel لدمج الروابط، وHSRP لتكرارية البوابة، وOSPF للتوجيه الديناميكي عبر طبقتي Core وDistribution.',
  enterpriseApproachMethod: 'النموذج الهرمي للشبكة · التكرارية والتوافر العالي',
  enterpriseResult1Title: 'توافر عالي',
  enterpriseResult1Desc: 'روابط HSRP ومزدوجة مصممة لتحسين توافر البوابة',
  enterpriseResult2Title: 'أمن الشبكة',
  enterpriseResult2Desc: 'تنفيذ عزل VLAN وأمن المنافذ (Port Security)',
  enterpriseResult3Title: 'توجيه ديناميكي',
  enterpriseResult3Desc: 'استخدام OSPF للفشل التلقائي وقابلية التوسع',
  enterpriseLesson1: 'تصميم شبكات هرمية مقاومة للأعطال باستخدام أفضل ممارسات Cisco',
  enterpriseLesson2: 'تكوين توجيه Inter-VLAN وHSRP لتكرارية بوابة الخروج',
  enterpriseLesson3: 'تنفيذ ميزات الأمان مثل DHCP Snooping وأمن المنافذ',
  enterpriseDecision1: 'تقسيم هيكل شركة Goraney Technologies (الموارد البشرية، المالية، التقنية، المبيعات)',
  enterpriseDecision2: 'تفعيل EtherChannel بين سويتشات Core لزيادة عرض النطاق الترددي للعمود الفقري',
  enterpriseDecision3: 'إعداد NAT/PAT على راوتر Edge للخروج الآمن للإنترنت',
  enterpriseDuration: 'معمل CCNP ENCOR عملي',
  enterpriseMicroLabel: 'CCNP ENCOR · معمل مؤسسات',

  achievement1: 'إكمال 11 دورة وبرنامجاً مهنياً عبر منصات الشبكات وديف أوبس والإنتاجية — موثقة عبر ملف جوجل',
  achievement2: 'معملان موثقان في شبكات المؤسسات والتطبيقات المعتمدة على الحاويات',
  achievement3: 'سبع شهادات من Networkat في الشبكات والسحابة والأمن ولينكس',
  achievement4: 'أكملت تعلمًا يركز على البنية السحابية وAzure AZ-104',
  achievement5: 'إتقان أساسيات Docker والحاويات وديف أوبس',
  achievement6: 'خبرة متقدمة في تصميم شبكات المؤسسات والأمن والأتمتة',
  badge1Label: 'مهندس شبكات',
  badge2Label: 'مهندس سحابة',
  badge3Label: 'مهتم بديف أوبس',

  skillsIntro:
    'خبرة عملية في شبكات المؤسسات والبنية السحابية وممارسات ديف أوبس الحديثة. حائز على شهادات عبر منصات متعددة تشمل Cisco وMicrosoft Azure وتقنيات الحاويات.',
  skillsYrs: 'سنوات',
  skillCat0Name: 'شبكات المؤسسات',
  skillCat0Desc: 'Cisco CCNA وCCNP. التوجيه المتقدم وتصميم الشبكات والأمن.',
  skillCat1Name: 'البنية السحابية',
  skillCat1Desc: 'Microsoft Azure. تصميم السحابة ونشرها وإدارتها.',
  skillCat2Name: 'الحاويات وديف أوبس',
  skillCat2Desc: 'خبرة Docker وأساسيات ديف أوبس للبنية الحديثة.',
  skillCat3Name: 'إدارة أنظمة لينكس',
  skillCat3Desc: 'خبرة لينكس عملية لإدارة الشبكات والبنية التحتية.',
  skillCat4Name: 'أتمتة الشبكات',
  skillCat4Desc: 'أدوات وممارسات الأتمتة لإدارة الشبكات ورفع الكفاءة.',
  skillCat5Name: 'التطوير والأدوات',
  skillCat5Desc: 'إدارة الإصدارات وأدوات التعاون وممارسات التطوير.',

  skillsSummaryCategories: 'التصنيفات',
  skillsSummaryTotal: 'إجمالي المهارات',
  skillsSummaryAvg: 'متوسط المستوى',
  skillsSummaryYears: 'سنوات الخبرة',
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
