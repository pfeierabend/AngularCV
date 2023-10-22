import { CvItem } from '../cv-item';

/* eslint-disable max-len */
export const GENERAL = {
  name: 'Patrick Feierabend',
  position: 'IT Project & Team Manager',
  description: `When I saw your job posting for experienced jungle guides (IT Project & Team Manager), I knew immediately that I had to apply. Over the past five years, I have acquired the skills necessary for this expedition.

  In recent years, I have successfully navigated through the thicket of project management, explored and overseen the IT jungles as a Senior OnSite Engineer, including setting up an IT Helpdesk. Furthermore, I have led a team through the jungle and developed them into skilled jungle guides. You can find further details about the mentioned expeditions and my previous professional experiences on the following pages. I would be happy to discuss them in more detail in a personal conversation.
  
  Although a separate cover letter is not required, I still find it helpful to summarize some key information:
  
  What I bring in addition to my experience:
  
  • A high degree of initiative and energy
  • A pragmatic "hands-on" and "Getting Things Done" mentality
  • An affinity for change
  • A strong commitment to promoting and developing my team members
  • I have a strong team focus and see myself as a supporter of the team as a manager
  • Experience in developing operational processes based on KPIs and figures
  • A positive worldview and the ability to inspire and motivate others
  
  What I expect from the position:
  
  • A team that wants to achieve the set goals together and a people-oriented atmosphere that supports this
  • The opportunity to identify optimization potentials, convert them into projects in collaboration with the IT management, lead them independently, and successfully implement them
  
  Why I would like to work for Doc Check:
  
  • The role aligns with my skills and combines IT, team management, and project management in an optimal way
  • The described corporate culture aligns with my values
  • Doc Check offers job security
  • I am looking forward to working in the medical environment
  `,
};
/* eslint-enable max-len */

export const CVITEMS: CvItem[] = [
  {
    title: 'Foundever',
    subtitle: 'Multiple positions',
    begin: '2017-02',
    end: '',
    description: 'Foundever™ is one of the world leaders in outsourcing customer service.',
    tags: [],
    link: 'https://www.foundever.com',
    thumbnail: 'foundever-logo.svg',
    positions: [
      {
        title: 'Project Manager',
        subtitle: 'ePMO EMEA',
        begin: '2022-06',
        end: '',
        description: 'manager, I am responsible for the successful implementation of new clients, the ramp-up phase of existing customers, and the management of internal projects. This includes strategic tasks such as customer communication and precise project timeline planning in close collaboration with various teams, including HR, IT Solutions, Quality, Operations, and more. During project execution, my primary focus is on strict adherence to milestones and consideration of the three key elements: time, quality, and finances. A crucial pillar of my success lies in continuous and consistent risk management as well as transparent communication with workstream leads and diverse internal and external stakeholders. Due to the quality of my initial projects, I was quickly entrusted with the responsibility for international programs. An outstanding example of this is the successful implementation of a client from the financial sector in Hyderabad, India, and Dakar, Senegal – a task that was handled in three different languages (further information in the "Projects" section). In my role as a project manager, I employ a PMO methodology tailored specifically to the BPO industry, based on PRINCE2 and PMBOK. My primary tool for efficient and transparent project management is Smartsheet. Through my extensive experience in project and program management, I have deepened my skills in project management, risk management, and international-level communication.',
        tags: ['Projct Management','Team leadership','Leadership','Budget management','Risik management','client communication','Presentation','Smartsheet','Miro'],
      },
      {
        title: 'Senior OnSite Engineer',
        subtitle: 'Technical site management',
        begin: '2019-08',
        end: '2022-05',
        description: 'In my previous position as a Senior OnSite Engineer, I was responsible for the smooth operation of up to 1800 workstations at the locations in Krefeld and Düsseldorf. I led the IT Onsite team and held technical overall responsibility for both sites. My responsibilities included workstation maintenance and troubleshooting, the technical implementation of new customer projects, setting up and cabling workstations, and close collaboration with specialty teams such as Networking and Voice. Additionally, I led major projects to enhance our IT support structure in Germany, including the successful establishment of a Work-at-Home (W@H) Helpdesk and our nationwide W@H Fulfillments. Furthermore, I was responsible for setting up and maintaining virtual workstations using AWS. This position allowed me to deepen my skills in team management, technical project execution, and problem-solving. My experience in large-scale projects to improve the IT infrastructure has strengthened my abilities in strategic planning and implementation.',
        tags: ['Active Directory','Windows Server','Troubleshooting','IT management','IT project management','Endpoint','AWS','Employee management','talent development'],
      },
      {
        title: 'Team manager',
        subtitle: 'Employee leadership and development',
        begin: '2018-09',
        end: '2019-07',
        description: 'In the role of a team leader, I was responsible for the professional leadership and development of a team consisting of 15-20 employees, both in terms of their professional and disciplinary aspects. My tasks included strategic monitoring and ensuring goal achievement, continuous quality analysis, providing individual coaching and constructive feedback, conducting structured interviews for selecting new team members, as well as conducting disciplinary discussions when necessary. Within a 6-month period, I successfully developed a team, largely comprised of newly hired employees, to the point where it consistently ranked second in the overall project. Additionally, I successfully promoted three of my former employees to more advanced positions. This experience deepened my competencies in team management and personnel development.',
        tags: ['Coaching','Employee management','Team management','KPI management','Monitoring','Quality analysis','employee development'],
      },
      {
        title: '2nd level customer service representative',
        subtitle: 'for a leading online auction house',
        begin: '2017-02',
        end: '2018-08',
        description: '',
        tags: ['Communication','Troubleshooting','De-escalation','Customer service'],
      },
    ],
  },
  {
    title: 'Feierabend KFZ Überführungen (Feierabend Car transfers)',
    subtitle: 'Self-employed entrepreneur',
    begin: '2014-09',
    end: '2017-01',
    description: 'In the period from 2014 to 2017 I worked as an independent entrepreneur in the transport business. My main business was the transport of high quality used cars on own axle, which were sold from Germany to other EU countries. My clients consisted of the selling car dealerships as well as specialized agencies for international car brokerage. During this job I gained valuable experience in customer acquisition, contract negotiation and pricing. This role allowed me to deepen my sales acquisition and customer relations skills, and I developed an understanding of running a business.',
    tags: ['Management','Client acquisition','Client communication','Business administration','Pricing','Company management'],
    link: '',
    thumbnail: 'cartransport_logo.png',
  },
  {
    title: 'Commerz Finanz GmbH (today: Consors Finanz)',
    subtitle: 'Credit & receivables management specialist',
    begin: '2011-09',
    end: '2014-08',
    description: 'As a specialist in accounts receivable management, my primary responsibility was to negotiate effective repayment agreements with delinquent customers. This role particularly required me to handle end customers with sensitivity and emotional intelligence, even in challenging situations. During this role, I was able to develop valuable skills in conflict resolution and customer relationship management. The ability to demonstrate understanding and empathy in difficult situations helped me to successfully collaborate with customers in order to find viable solutions. These experiences deepened my interpersonal skills and sensitized me to handling demanding customer interactions.',
    tags: ['Receivables management','Emotional intelligence','Customer relationship management','Conflict resolution'],
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
    title: 'Operational excellence - basics',
    subtitle: 'LinkedIn',
    begin: '',
    end: '2021-07',
    description: '',
    thumbnail: 'li-logo.jpeg',
    attachment: '',
  },
  {
    title: 'Practical training moderation & presentation',
    subtitle: 'Moderatorenschule Baden-Württemberg (Moderator School Baden-Württemberg)',
    begin: '',
    end: '2021-06',
    description: '',
    thumbnail: 'logo-mbw-web.svg',
    attachment: '',
  },
  {
    title: 'Team manager certification',
    subtitle: 'Sitel (today: Foundever)',
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
    subtitle: 'Foundever top-talent program',
    begin: '2021-01',
    end: '',
    description: 'Currently, I am in the third year of the Foundever Top-Talent Program, an exclusive program where each year a handful of promising talents is selected to undergo a three-year development cycle. As part of this program, I have completed a wide range of internal and external workshops for personal development. These workshops covered topics such as self-efficacy, resilience, time management, and leadership skills. Furthermore, I worked closely with other talents on group projects. These projects included the design of an internal proposal system and the development of an innovative business model for a BPO company. These experiences within the talent program significantly expanded my skills in teamwork, creative thinking, and project management.',
    tags: ['Self-efficacy','Resilience','Mindfulness','Management','Leadership'],
    link: 'http://foundever.life/cv9',
    thumbnail: 'foundever-logo.svg',
  },
  {
    title: 'HAN Hogeschool van Arnhem en Nijmegen',
    subtitle: 'Social work study',
    begin: '2010-02',
    end: '2011-08',
    description: '',
    tags: [],
    link: 'https://www.hanuniversity.com/de/',
    thumbnail: 'han_university.svg',
  },
  {
    title: 'Städtisches Meerbusch Gymnasium (Meerbusch Municipal High School)',
    subtitle: 'Fachabitur in the field of social work/health care',
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
  { title: 'German', level: '100' },
  { title: 'Englisch | English', level: '85' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'DE IT-helpdesk',
    subtitle: 'Planning and establishment of an IT helpdesk for 1st-level support for Work-at-Home employees.',
    begin: '2021-04',
    end: '2022-04',
    description: 'Due to the COVID-19 pandemic, we transitioned 80% of our employees to remote work within three months. This transition presented significant challenges for our existing IT infrastructure, which was previously focused on on premise troubleshooting. In collaboration with our IT lead in Germany, I took the initiative to address these challenges. Together, we drove the conceptualization and implementation of a 1st-level helpdesk. In my role, I was responsible for defining the helpdesks tasks, led the team selection process, and personally designed and conducted the on-site training at our Dessau location. Since its introduction, the helpdesk has consistently gained importance and has reduced technical downtime for Work-at-Home (W@H) employees by over 65%. This experience significantly strengthened my skills in project management, team leadership, and solution development.',
    tags: ['Project management','IT-helpdesk','Solutioning'],
    link: '',
    thumbnail: 'helpdesk-logo.png',
  },
  {
    title: 'Customer service implementation for a large automotive bank',
    subtitle: '',
    begin: '2023-05',
    end: '',
    description: 'Currently, I am serving as a Program Manager, overseeing the takeover of customer service for six business units of one of the largest automotive banks, all done remotely in Germany and Greece. Over a span of two years, we are implementing this highly complex and diverse service area with a team of approximately 300 employees. Following the successful transition of the first service units, I am pleased to report that the customer feedback has been consistently positive. We achieved this result through excellent planning, with the training department playing a particularly crucial role. Outstanding coordination within the team enabled us to identify and address challenges early on.',
    tags: ['Program management', 'Team coordination', 'Customer feedback', 'Excellent planning', 'Problem solving'],
    link: '',
    thumbnail: 'bank_logo.jpg',
  },
  {
    title: 'Implementation of customer service for a global financial services provider',
    subtitle: '',
    begin: '2022-12',
    end: '2023-06',
    description: 'Ich erhielt den Auftrag, den Kundenservice für einen internationalen Versandtransaktionsdienstleister in den Sprachen Französisch und Wolof am Standort in Dakar zu implementieren, während ich gleichzeitig die Umsetzung in Englisch am Standort in Hyderabad koordinierte. Dies erwies sich als äußerst anspruchsvolle Aufgabe, da wir nur drei Wochen Zeit von Projektbeginn bis zum ersten Training hatten. Hinzu kam, dass unsere herkömmlichen IT-Lösungen nicht den Anforderungen des Kunden entsprachen. Zusätzlich befand sich der Dienstleister zu diesem Zeitpunkt in einer umfangreichen internen Umstrukturierung und verfügte nicht über ein Konzept zur Qualitätssicherung im Kundenservice. Darüber hinaus waren die bereitgestellten Schulungsmaterialien des Kunden ausschließlich in englischer Sprache verfügbar. Durch eine sorgfältige Due-Diligence-Phase konnten wir diese Herausforderungen frühzeitig erkennen und mithilfe eines effektiven Risikomanagements rechtzeitig vor dem Go-Live bewältigen. Aufgrund der Zufriedenheit des Kunden konnten wir innerhalb eines halben Jahres erheblich mehr Volumen übernehmen und die geplante Anzahl von 80 Arbeitsplätzen auf 140 erhöhen.',
    tags: ['Program management', 'Project management', 'Risk management', 'International collaboration', 'Due diligence'],
    link: '',
    thumbnail: 'financial-logo.jpg',
  },
  {
    title: 'Establishment of Fulfillment Center',
    subtitle: 'Establishment of Hardware Fulfillment for ~7000 Work-at-Home Employees',
    begin: '2021-08',
    end: '2022-05',
    description: 'Another challenge that arose during the Covid-19 pandemic and the shift to remote work for approximately 7000 employees was the efficient management of regular hardware shipments and the replacement of defective devices. This was a task for which we were not previously prepared. In close collaboration with our newly appointed director for Work-at-Home, I drove the conceptualization and implementation of a W@H Fulfillment Center at our Krefeld location. My responsibilities included preselecting the appropriate inventory management software and continuously optimizing and evolving it. Additionally, I was in charge of selecting qualified personnel and providing technical training. Today, the Fulfillment Center is an integral part of our W@H philosophy. While hardware shipment requests previously required 3-10 days for processing, they are now fulfilled on the same day in 90% of cases if received before 12:00 PM. This project strengthened my skills in project management, process optimization, and team development. I am confident that my expertise in handling complex logistical challenges and my ability to develop and implement innovative solutions can make a valuable contribution to your company.',
    tags: ['Project management', 'Process optimization', 'Team leadership', 'Solution development', 'Logistics'],
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
    title: 'Family',
    icon: 'child_care',
  },
  {
    title: 'PC Gaming',
    icon: 'computer',
  },
  {
    title: 'Chess',
    icon: 'timer',
  },
  {
    title: 'Music',
    icon: 'music_note',
  },
  {
    title: 'Badminton',
    icon: 'sports_tennis',
  },
  {
    title: 'Programming',
    icon: 'code',
  },
];

export const PUBLICATIONS: CvItem[] = [
];

export const TALKS: CvItem[] = [
 ];
