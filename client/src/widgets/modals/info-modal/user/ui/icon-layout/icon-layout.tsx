import { BadgeIcon, Flex } from '@/shared/ui';
import { FC } from 'react';

interface IconLayout {
  coreTools?: string[];
}

export const IconLayout: FC<IconLayout> = ({ coreTools }) => {
  return (
    <>
      {coreTools && (
        <Flex wrap='wrap' gap='8px'>
          {coreTools.map((language, index) => (
            <BadgeIcon data={language} key={index} />
          ))}
        </Flex>
      )}
    </>
  );
};
