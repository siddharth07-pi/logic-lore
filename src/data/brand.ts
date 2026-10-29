import type { FAQItem, StoryCharacter } from '../types';

export const BRAND_CONFIG = {
  name: 'LOGIC LORE',
  legalName: 'Logic Lore Technologies Private Limited',
  tagline: 'READ. BUILD. SAVE HUMANITY.',
  subtitle: 'Story-Driven STEM Learning',
  logoUrl: '/images/logic-lore-logo.png',
  logoDarkUrl: '/images/logic-lore-logo-dark.png',
  shortBio: 'LOGIC LORE combines imaginative science-fiction storytelling with hands-on electronics and practical engineering challenges for young inventors.',
  foundingYear: 2026,
  targetAudience: 'Ages 8–14 & Curious Builders',
  
  // Contact details (clearly identified as configurable demo/launch contact)
  contact: {
    inquiriesEmail: 'support@logiclore.in',
    institutionalEmail: 'schools@logiclore.in',
    addressPlaceholder: 'Bengaluru / Hyderabad Tech Hub, India (Registered Office)',
    responseHours: 'Monday – Friday, 9:00 AM – 6:00 PM IST',
  },

  socialLinks: {
    twitter: 'https://twitter.com/logiclore_edu',
    instagram: 'https://instagram.com/logiclore.stem',
    youtube: 'https://youtube.com/@logiclore',
    linkedin: 'https://linkedin.com/company/logiclore',
    github: 'https://github.com/logiclore',
  },

  // Editable operational policies
  policies: {
    currencySymbol: '₹',
    currencyCode: 'INR',
    shippingNote: 'Standard delivery across India estimated at ₹99 or free for orders above ₹2,000 (Final rates confirmed upon commercial dispatch launch).',
    returnsNote: '14-day hassle-free replacement for unopened or defective component packages upon physical commercial delivery.',
    safetyNote: 'Engineered strictly for low-voltage (3V–6V DC) battery operation. No high voltages, no soldering required.',
    fulfillmentStatus: 'Concept prototype edition. Online pre-orders and pilot registrations are actively accepted for the upcoming inaugural production batch.',
  },
};

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: '1. What is LOGIC LORE?',
    answer: 'LOGIC LORE is an educational startup that bridges science fiction storytelling with real-world electronics and STEM learning. We design mission-based learning kits where young inventors read a thrilling comic adventure and build practical circuits to solve narrative challenges.',
  },
  {
    id: 'faq-2',
    category: 'product',
    question: '2. What is THE LAST SPARK?',
    answer: 'THE LAST SPARK is the flagship STEM learning kit created and published by LOGIC LORE. It invites children to step into a futuristic blackout city threatened by a mysterious shadow force and restore the city using electronic breadboard circuits and sensors.',
  },
  {
    id: 'faq-3',
    category: 'general',
    question: '3. What age group is the kit designed for?',
    answer: 'THE LAST SPARK is specifically crafted for young learners aged 8 to 14. Younger children (8–10) will enjoy reading alongside parents or guardians, while older children (11–14) can independently tackle the circuit challenges and engineering missions.',
  },
  {
    id: 'faq-4',
    category: 'product',
    question: '4. What is included in the kit?',
    answer: 'The kit includes a full-colour graphic comic book, an illustrated step-by-step experiment guide, engineering challenge cards, a solderless breadboard, multicoloured LEDs, assorted resistors, jumper wires, a light-dependent resistor (LDR), a piezo buzzer, a tactile push button, an ultrasonic sensor, and a safe low-voltage battery holder.',
  },
  {
    id: 'faq-5',
    category: 'product',
    question: '5. Do children need previous electronics knowledge?',
    answer: 'No prior experience is necessary! The learning journey begins with the very basics of electrical flow, polarity, and closed circuits through intuitive visual diagrams before advancing to sensor-triggered missions.',
  },
  {
    id: 'faq-6',
    category: 'product',
    question: '6. How does the comic connect to the experiments?',
    answer: 'Every comic chapter features an engineering crisis faced by the characters Aarav, Maya, and Kabir. Rather than simply reading the solution, the comic prompts the reader to build the corresponding electronic system (e.g., an optical alarm or emergency beacon) to advance the storyline.',
  },
  {
    id: 'faq-7',
    category: 'safety',
    question: '7. Is adult supervision recommended?',
    answer: 'While all experiments run on safe, low-voltage direct current (AA batteries) with no soldering, adult supervision is recommended for children under 10 when handling small electronics components and wires.',
  },
  {
    id: 'faq-8',
    category: 'orders',
    question: '8. Can schools enquire about bulk orders?',
    answer: 'Yes! We actively welcome inquiries from schools, STEM innovation labs, robotics clubs, and educational workshops. Special bulk pricing, teacher guides, and curriculum alignment packs can be requested through our For Schools page.',
  },
  {
    id: 'faq-9',
    category: 'orders',
    question: '9. How can I contact LOGIC LORE?',
    answer: 'You can reach us directly via our Contact page form or by emailing support@logiclore.in for general questions, and schools@logiclore.in for institutional inquiries.',
  },
  {
    id: 'faq-10',
    category: 'orders',
    question: '10. What are the delivery and return policies?',
    answer: 'During our current pilot launch phase, shipping policies and estimated dispatch dates are provided during registration. Once commercial dispatch commences, orders across India will support standard express tracking and a 14-day defective-part replacement guarantee.',
  },
];

export const STORY_CHARACTERS: StoryCharacter[] = [
  {
    name: 'Aarav',
    role: 'Hardware Architect & Team Lead',
    avatar: '⚡',
    bio: 'Resourceful, determined, and always carrying a breadboard in his backpack. Aarav believes every broken system is just an unsolved puzzle waiting for a closed circuit.',
    techSkill: 'Circuit Architecture & Power Distribution',
    gadget: 'Multi-Frequency LED Beacon',
  },
  {
    name: 'Maya',
    role: 'Sensor Specialist & Optical Engineer',
    avatar: '👁️',
    bio: 'Quick-thinking and observant. Maya can calculate light intensity and distance in her head and designs optical detectors to spot hidden anomalies in the dark.',
    techSkill: 'Photonic & Ultrasonic Sensor Arrays',
    gadget: 'LDR Shadow Detector Visor',
  },
  {
    name: 'Kabir',
    role: 'Acoustics & Systems Strategist',
    avatar: '📡',
    bio: 'Calm under pressure and obsessed with sonic resonance. Kabir creates alert buzzers and communication links to keep the team connected across the blackout city.',
    techSkill: 'Acoustic Signalling & Continuity Diagnosis',
    gadget: 'Piezo Resonance Pulse Generator',
  },
  {
    name: 'SPARK-E',
    role: 'Autonomous Companion Bot',
    avatar: '🤖',
    bio: 'A small, spherical helper bot assembled from recycled city electronics. SPARK-E hums when circuits are connected properly and alerts the team when power dips.',
    techSkill: 'Voltage Monitoring & Emergency Glow Pulse',
    gadget: 'Self-Stabilizing Floating Core',
  },
];
