export interface KitComponent {
  id: string;
  name: string;
  category: 'core' | 'sensors' | 'indicators' | 'media' | 'power';
  description: string;
  whatYouExplore: string;
  badge?: string;
  iconName: string;
  image?: string;
  isPlannedFuture?: boolean;
}

export interface LearningMission {
  number: number;
  id: string;
  title: string;
  comicChapter: string;
  storyPremise: string;
  scienceConcept: string;
  handsOnBuild: string;
  componentsUsed: string[];
  isFutureExpansion?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  brand: string;
  title: string;
  badge?: string;
  subtitle: string;
  tagline: string;
  price: number;
  currency: string;
  formattedPrice: string;
  ageRange: string;
  status: 'available' | 'concept' | 'coming_soon';
  isFlagship: boolean;
  shortDescription: string;
  fullDescription: string[];
  images: {
    primary: string;
    gallery: { url: string; caption: string; alt: string }[];
  };
  components: KitComponent[];
  learningObjectives: {
    title: string;
    description: string;
    icon: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  safetyGuidelines: string[];
  missions: LearningMission[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'product' | 'safety' | 'orders';
}

export interface StoryCharacter {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  techSkill: string;
  gadget: string;
}

export interface InstitutionalInquiry {
  fullName: string;
  institutionName: string;
  workEmail: string;
  phoneNumber?: string;
  estimatedKits: string;
  message: string;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  subject: string;
  department: string;
  message: string;
}
