import { BadgeIcon, BadgeText, Flex, Typography } from '@/shared/ui';
import { useGetUserByName } from '@/app/(main)/[username]/profile/lib/useGetUserByName';
import { useParams } from 'next/navigation';

export const Skills = () => {
  const { username } = useParams();
  const { data: user } = useGetUserByName(username as string);

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
      {/*tODO: ромчик тут надо что то по умнее придумать так как щас coreTools/additionalTools*/}

      {/*{user?.skills &&*/}
      {/*  Object.entries(skills).map(skill => {*/}
      {/*    const skillName = skill[0] as keyof typeof skills;*/}
      {/*    const Badge = skills[skillName].Badge;*/}
      {/*    return (*/}
      {/*      <Flex key={skillName} direction='column' gap='8px'>*/}
      {/*        <Typography>{skills[skillName].title}</Typography>*/}
      {/*        <Flex gap='8px'>*/}
      {/*          {user?.skills?.coreTools.map((lang: string) => <Badge key={lang} data={lang} />)}*/}
      {/*        </Flex>*/}
      {/*      </Flex>*/}
      {/*    );*/}
      {/*  })}*/}
    </Flex>
  );
};
