import { Flex, Typography } from '@/shared/ui';
import { AstronautIllustration } from '@/shared/assets';

export const UsersNotFound = () => {
  return (
    <Flex width='100%' justify='center' align='center'>
      <Flex
        gap={36}
        width='100%'
        maxWidth='470px'
        direction='column'
        justify='center'
        align='center'
      >
        <AstronautIllustration />
        <Flex gap={8} direction='column' justify='center' align='center' width='100%'>
          <Typography size='heading_m'>No results found :(</Typography>
          <Typography size='body_m'>We can’t find any item matching your search</Typography>
        </Flex>
      </Flex>
    </Flex>
  );
};
