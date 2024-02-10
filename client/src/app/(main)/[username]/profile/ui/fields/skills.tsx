import { useGetMe } from '@/entities/session';
import { BadgeIcon, BadgeText, Flex, Typography } from '@/shared/ui';
import { useState } from 'react';
import styles from './fields.module.scss';

export const Skills = () => {
  const { data: user } = useGetMe();

  const skills = {
    programmingLanguages: {
      Badge: BadgeIcon,
      title: 'Programming Languages',
    },
    frameworks: {
      Badge: BadgeText,
      title: 'Frameworks',
    },
    fields: {
      Badge: BadgeText,
      title: 'Fields',
    },
    designerTools: {
      Badge: BadgeIcon,
      title: 'Fields',
    },
    projectManagerTools: {
      Badge: BadgeIcon,
      title: 'Tools',
    },
    methodologies: {
      Badge: BadgeText,
      title: 'Methodologies',
    },
  };

  return (
    <Flex gap='24px' direction='column'>
      {user?.skills &&
        Object.entries(skills).map(skill => {
          const skillName = skill[0] as keyof typeof skills;
          if (!user.skills[skillName]) return null;
          const Badge = skills[skillName].Badge;
          return (
            <Flex key={skillName} direction='column' gap='8px'>
              <Typography>{skills[skillName].title}</Typography>
              {user?.skills && (
                <Flex gap='8px'>
                  {user.skills[skillName].map((lang: string) => (
                    <Badge key={lang} data={lang} />
                  ))}
                </Flex>
              )}
            </Flex>
          );
        })}
    </Flex>
  );
};
