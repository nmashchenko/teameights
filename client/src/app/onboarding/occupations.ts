import {
  designerTools,
  fields,
  frameworks,
  managerTools,
  methodologies,
  programmingLanguages,
} from '@/shared/constant';

export const occupations = {
  Designer: [
    {
      type: 'badgeText',
      fields: fields,
      title: 'Fields',
      formName: 'fields',
    },
    {
      type: 'badgeIcon',
      fields: designerTools,
      title: 'Tools',
      formName: 'tools',
    },
  ],
  Manager: [
    { fields: methodologies, type: 'badgeText', title: 'Frameworks', formName: 'frameworks' },
    { fields: managerTools, type: 'badgeIcon', title: 'Tools', formName: 'tools' },
  ],
  Developer: [
    { type: 'badgeIcon', fields: programmingLanguages, title: 'Languages', formName: 'frameworks' },
    { fields: frameworks, type: 'badgeText', title: 'Frameworks', formName: 'frameworks' },
  ],
};
