export interface DynamicItem {
  id: string;
  title: string;
  shortDesc: string;
  objective: string;
  howToApply: string;
  duration: string;
  materials: string;
  gradeRecommended: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export interface MaterialInclusion {
  title: string;
  description: string;
  badge: string;
}
