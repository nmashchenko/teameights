import { Flex, Typography } from '@/shared/ui';
import { RaceBy } from '@uiball/loaders';

interface InfoProps {
  text: string;
  size?: number;
}
export const Info = ({ text, size = 237 }: InfoProps) => {
  return (
    <Flex direction='column' align='center' justify='center' gap={32}>
      <RaceBy size={size} speed={1.9} color='var(--green-bright-color)' lineWeight={8} />
      <Typography size='heading_m'>{text}</Typography>
    </Flex>
  );
};
