import { CvItem } from '../cv-item';

/* eslint-disable max-len */
export const GENERAL = {
  name: 'Patrick Feierabend',
  position: 'IT Project & Team Manager',
  description: `Die Zusammenarbeit auf gleicher Augenhöhe in einer entspannten Unternehmenskultur ist sowohl euch als auch mir ein wichtiges Anliegen. Deshalb verwende ich hier die "Du"-Form.

Als ich eure Ausschreibung für erfahrene Dschungel-Guides (IT Project & Team Manager) gesehen habe, wusste ich sofort, dass ich mich bewerben muss. Gerade in den letzten fünf Jahren habe ich das Rüstzeug erworben, das genau für diese Expedition erforderlich ist.

In den letzten Jahren habe ich mich erfolgreich durch das Dickicht des Projektmanagements geschlagen, als Senior OnSite Engineer die IT-Urwälder erkundet und verantwortet – einschließlich des Aufbaus eines IT-Helpdesks. Darüber hinaus habe ich als Team Manager Mitarbeiter erfolgreich durch den Dschungel geführt und sie zu versierten Dschungelguides entwickelt. 
Weitere Details zu den erwähnten Expeditionen und meinen bisherigen beruflichen Erfahrungen findest du auf den folgenden Seiten. Ich würde mich freuen, diese in einem persönlichen Gespräch näher zu erläutern.

Obwohl kein separates Anschreiben erforderlich ist, halte ich es dennoch für hilfreich, einige Schlüsselinformationen festzuhalten:

Was ich neben meiner Erfahrung mitbringe:

•	Ein hohes Maß an Eigeninitiative und Energie
•	Eine pragmatische "Hands-on" und "Getting Things Done"-Mentalität
•	Affinität für Veränderungen
•	Den festen Willen, meine Mitarbeiter zu fördern und weiterzuentwickeln
•	Ich habe einen hohen Teamfokus und sehe mich als Manager als supporter des Teams
•	Erfahrung in der Entwicklung operativer Prozesse auf Grundlage von KPIs und Zahlen
•	Ein positives Weltbild und die Fähigkeit andere zu begeistern und zu motivieren

Was ich von der Position erwarte:

•	Ein Team, das gemeinsam die gesteckten Ziele erreichen möchte, und eine dem Menschen zugewandte Atmosphäre, die dies begünstigt
•	Die Gelegenheit, Optimierungspotenziale zu erkennen, diese in Zusammenarbeit mit der IT-Direktion in Projekte umzusetzen, diese eigenverantwortlich zu leiten und erfolgreich zu implementieren

Warum ich gerne für Doc Check arbeiten möchte:

•	Die Rolle entspricht meinen Fähigkeiten und verknüpft IT, Team Management und Projektmanagement auf optimale Weise
•	Die beschriebene Unternehmenskultur entspricht meinen Vorstellungen
•	Doc Check bietet einen sicheren Arbeitsplatz
•	Das medizinische Umfeld finde ich äußerst spannend"
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
        description: 'In der Rolle als Sr. OnSite Enginer war ich zu beginn verantwortlich für den Reibungslosen betrieb von ca. 900 Arbeitsplätzen in unserem Standort in Krefeld. Im Jahr 2020 kam unser Standort in Düsseldorf mit einer ähnlichen Mitarbeiteranzahl dazu.</br>Meine Aufgaben umfassten:</br></br>• Leitung des aus mir und 2 weiteren Engineers bestehenden OnSite Teams Krefeld & Düsseldorf</br>• Instandhalten und Troubleshooten aller arbeitsplätze.</br>• Technische implementation neuer Kundenprojekte.</br>• Aufsetzen und verkablen neuer Arbeitsplätze</br>• Zusammenarbeit mit den Fachteams (z.B. Networking, Voice)</br>• Durchführung von Großprojekten zur Verbesserung unserer IT-Supportstruktur in Deutschland (z.B. Einrichtung eines W@H Helpdesk und unseres Deutschlandweiten W@H Fulfillments</br>• Aufsetzen und instandhalten von virtuellen Arbeitsplätzen mittels AWS',
        tags: ['Active Directory','Windows Server','Troubleshooting','IT Management','IT Project Management','Endpoint','AWS'],
      },
      {
        title: 'Team Manager',
        subtitle: 'Mitarbeiter FÜhrung- und Entwicklung',
        begin: '2018-09',
        end: '2019-07',
        description: 'Als Teammanager habe ich ein Team vo 15-20 Mitarbeitern fachlich und disziplinarisch geführt und entwickelt.</br>Meine Aufgaben umfassten:</br></br>•	Beobachtung und Sicherstellung der Zielerreichung</br>•Monitoring & Qualitätsanalyse</br>• Coaching & Feedback</br>• Vorstellungsgespräche</br>• Disziplinargespräche.</br></br> Im Zeitraum von 6 Monaten konnte ich ein Team aus zum großen Teil neuangestellten Mitarbeitern so entwickeln, dass es im Schnitt auf Platz 2 im Gesamtprojekt lag. 3 Meiner damaligen Mitarbeiter konnte ich in weiterführende Positionen entwickeln.',
        tags: ['Coaching','Mitarbeiterführung','KPI Management','Monitoring','Qualitätsanalyse'],
      },
      {
        title: '2nd level Kundenberater',
        subtitle: 'für ein weltweit führendes Online Auktionshaus',
        begin: '2017-02',
        end: '2018-08',
        description: '',
        tags: ['Kommunikation','Troubleshooting','Deeskalation','Kundenservice'],
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
    thumbnail: 'helpdesk-logo.png',
  },
  {
    title: 'Implementierung des Kundenservice einer großen Automobilbank',
    subtitle: '',
    begin: '2023-05',
    end: '',
    description: 'Planung und koordinierung der implementierung des Kundenservice für eine große deutsche Automobilbank. Aufbau von ~300 Mitarbeitern in Deutschland und Nearshore',
    tags: [],
    link: '',
    thumbnail: 'bank_logo.jpg',
  },
  {
    title: 'Implementierung des Kundenservice eines globalen Finanzdienstleisters',
    subtitle: '',
    begin: '2022-12',
    end: '2023-06',
    description: 'Planung und koordinierung der implementierung des Kundenservice für ein globales Finanztransaktionsunternehmen. Aufbau von ~120 Mitarbeitern im Senegal und in Indien',
    tags: [],
    link: '',
    thumbnail: 'financial-logo.jpg',
  },
  {
    title: 'Aufbau Fulfillment',
    subtitle: 'Aufbau von Hardware Fulfillment für ~7000 W@H Mitarbeiter',
    begin: '2021-08',
    end: '2022-05',
    description: '',
    tags: [],
    link: '',
    thumbnail: 'fulfillment-logo.png',
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
