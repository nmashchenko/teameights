import {
  designerTools,
  fields,
  frameworks,
  managerTools,
  methodologies,
  programmingLanguages,
} from '@/shared/constant';

export const occupations = {
  designer: [
    {
      type: 'badgeText',
      fields: fields,
      title: 'Fields',
    },
    {
      type: 'badgeIcon',
      fields: designerTools,
      title: 'Tools',
    },
  ],
  manager: [
    { fields: methodologies, type: 'badgeText', title: 'Frameworks' },
    { fields: managerTools, type: 'badgeIcon', title: 'Tools' },
  ],
  developer: [
    { type: 'badgeIcon', fields: programmingLanguages, title: 'Languages' },
    { fields: frameworks, type: 'badgeText', title: 'Frameworks' },
  ],
};
