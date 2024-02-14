import { BadgeText, Flex, Typography } from '@/shared/ui';
import { useGetUserByName } from '../../lib/useGetUserByName';
import { useParams } from 'next/navigation';
import { BadgeIcon } from '@/shared/ui';

export const Skills = () => {
  const { username } = useParams();
  const { data: user } = useGetUserByName(username as string);
  const skills = {
    coreTools: {
      badge: BadgeIcon,
      title: 'Core Tools',
    },
    additionalTools: {
      badge: BadgeText,
      title: 'Additional Tools',
    },
  };

  return (
    <Flex gap='24px' direction='column'>
      {user?.skills &&
        Object.entries(skills).map(skill => {
          const skillName = skill[0] as keyof typeof skills;
          const Badge = skills[skillName].badge;
          return (
            <Flex key={skillName} direction='column' gap='8px'>
              <Typography>{skills[skillName].title}</Typography>
              <Flex gap='8px'>
                {user?.skills?.coreTools.map((lang: string) => <Badge key={lang} data={lang} />)}
              </Flex>
            </Flex>
          );
        })}
    </Flex>
  );
};
