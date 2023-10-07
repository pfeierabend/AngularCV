import { CvItem } from '../cv-item';

/* eslint-disable max-len */
export const GENERAL = {
  name: 'Patrick Feierabend',
  position: 'Project Manager',
  description: `Als Rüstzeug für den Djungel brint Patrick handfeste Expertise in den Bereichen Team Management, Projekt Management, IT-Helpdesk, und IT-OnSite Engineering mit.
`,
};
/* eslint-enable max-len */

export const CVITEMS: CvItem[] = [
  {
    title: 'Foundever',
    subtitle: 'Mehrere Positionen',
    begin: '2017-02',
    end: '',
    description: 'Foundever™ ist einer der Weltmarktführer im Bereich Outsourcing von Kundenservice Dienstleistungen.',
    tags: [],
    link: 'https://www.foundever.com',
    thumbnail: 'foundever-logo.svg',
    positions: [
        {
        title: 'Projekt Manager',
        subtitle: 'ePMO EMEA',
        begin: '2022-06',
        end: '',
        description: '',
        tags: [],
      },
      {
        title: 'Senior OnSite Engineer',
        subtitle: 'Krefeld & Düsseldorf',
        begin: '2019-08',
        end: '2022-05',
        description: '',
        tags: [],
      },
      {
        title: 'Team Manager',
        subtitle: 'Mitarbeiter FÜhrung- und Entwicklung',
        begin: '2018-09',
        end: '2019-07',
        description: '',
        tags: [],
      },
    ],
  },
  {
    title: 'Feierabend KFZ Überführungen',
    subtitle: 'Selbstständiger Unternehmer',
    begin: '2014-09',
    end: '2017-01',
    description: '',
    tags: [],
    link: '',
    thumbnail: 'cartransport_logo.png',
  },
  {
    title: 'Commerz Finanz GmbH (Heute Consors Finanz)',
    subtitle: 'Sachbearbeiter Kreditwesen & Forderungsmanagement',
    begin: '2011-09',
    end: '2014-08',
    description: '',
    tags: [],
    link: 'https://www.consorsfinanz.de/',
    thumbnail: 'commerzfinanz-logo.png',
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: 'Enterprise Design Thinking Practitioner',
    subtitle: 'IBM',
    begin: '',
    end: '2023-01',
    description: '',
    thumbnail: 'ibm-logo.jpeg',
    attachment: '',
  },
  {
    title: 'Operative Exzellenz - Grundlagen',
    subtitle: 'LinkedIn',
    begin: '',
    end: '2021-07',
    description: '',
    thumbnail: 'li-logo.jpeg',
    attachment: '',
  },
  {
    title: 'Praxistraining Moderation & Präsentation',
    subtitle: 'Moderatorenschule Baden-Württemberg',
    begin: '',
    end: '2021-06',
    description: '',
    thumbnail: 'logo-mbw-web.svg',
    attachment: '',
  },
  {
    title: 'Team Manager Zertifizierung',
    subtitle: 'Sitel (heute Foundever)',
    begin: '',
    end: '2019-06',
    description: '',
    thumbnail: 'sitel-logo.png',
    attachment: '',
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: 'Foundever',
    subtitle: 'Foundever Top-Talent Programm',
    begin: '2021-01',
    end: '',
    description: '',
    tags: [],
    link: '',
    thumbnail: 'foundever-logo.svg',
  },
  {
    title: 'HAN Hogeschool van Arnhem en Nijmegen',
    subtitle: 'Studium soziale Arbeit',
    begin: '2010-02',
    end: '2011-08',
    description: '',
    tags: [],
    link: 'https://www.hanuniversity.com/de/',
    thumbnail: 'han_university.svg',
  },
  {
    title: 'Städtisches Meerbusch Gymnasium',
    subtitle: 'Fachabitur im Bereich Soziales/Gesundheit',
    begin: '1999-08',
    end: '2010-01',
    description: '',
    tags: [],
    link: 'https://www.smg-meerbusch.de/',
    thumbnail: 'smg-logo.png',
  },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'Deutsch', level: '100' },
  { title: 'Englisch | English', level: '85' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'DE IT Helpdesk',
    subtitle: 'Konzeptionieren und aufsetzen eines IT-Helpdesk für 1st lvl support für W@H Mitarbeiter',
    begin: '2021-04',
    end: '2022-04',
    description: '',
    tags: [],
    link: '',
    thumbnail: '',
  },
  {
    title: 'Implementierung des Kundenservice einer großen Automobilbank',
    subtitle: '',
    begin: '2023-05',
    end: '',
    description: 'Planung und koordinierung der implementierung des Kundenservice für eine große deutsche Automobilbank. Aufbau von ~300 Mitarbeitern in Deutschland und Nearshore',
    tags: [],
    link: '',
    thumbnail: '',
  },
  {
    title: 'Implementierung des Kundenservice eines globalen Finanzdienstleisters',
    subtitle: '',
    begin: '2022-12',
    end: '2023-06',
    description: 'Planung und koordinierung der implementierung des Kundenservice für ein globales Finanztransaktionsunternehmen. Aufbau von ~120 Mitarbeitern im Senegal und in Indien',
    tags: [],
    link: '',
    thumbnail: '',
  },
  {
    title: 'Aufbau Fulfillment',
    subtitle: 'Aufbau von Hardware Fulfillment für ~7000 W@H Mitarbeiter',
    begin: '2021-08',
    end: '2022-05',
    description: '',
    tags: [],
    link: '',
    thumbnail: '',
  },


];

export const VOLUNTEERING: CvItem[] = [
 
];

export const CONTACT = {
  city: 'Krefeld, Germany',
  phone: '',
  mail: 'patrick@pfeierabend.de',
  skype: '', // just the account name
  linkedin: 'https://www.linkedin.com/in/patrick-feierabend-b0a565171/', // full url
  xing: '', // full url
  github: '', // full url
  stackoverflow: '', // full url
  twitter: '', // full url
  facebook: '', // full url
  instagram: '', // full url
  other: [
  ],
};

export const INTERESTS = [
  {
    title: 'Familie',
    icon: 'child_care',
  },
  {
    title: 'PC Gaming',
    icon: 'computer',
  },
  {
    title: 'Schach',
    icon: 'timer',
  },
  {
    title: 'Badminton',
    icon: 'sports_tennis',
  },
  {
    title: 'Programmieren',
    icon: 'code',
  },
];

export const PUBLICATIONS: CvItem[] = [
];

export const TALKS: CvItem[] = [
 ];
