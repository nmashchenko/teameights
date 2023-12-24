import { BadgeIcon, Flex } from '@/shared/ui';
import { ISkills, Nullable } from '@teameights/types';
import { FC } from 'react';

interface IconLayout {
  skills?: Nullable<ISkills>;
}

export const IconLayout: FC<IconLayout> = ({ skills }) => {
  return (
    <>
      {skills?.programmingLanguages && (
        <Flex wrap='wrap' gap='8px'>
          {skills?.programmingLanguages.map((language, index) => (
            <BadgeIcon data={language} key={index} />
          ))}
        </Flex>
      )}
      {skills?.designerTools && (
        <Flex wrap='wrap' gap='8px'>
          {skills?.designerTools.map((tool, index) => <BadgeIcon data={tool} key={index} />)}
        </Flex>
      )}
      {skills?.projectManagerTools && (
        <Flex wrap='wrap' gap='8px'>
          {skills?.projectManagerTools.map((tool, index) => <BadgeIcon data={tool} key={index} />)}
        </Flex>
      )}
    </>
  );
};
