import { useGetMe } from '@/entities/session';
import { Card } from './card';
import { Flex, Typography } from '@/shared/ui';
import { GithubIcon } from '@/shared/assets/icons/github-icon';
import { BehanceIcon } from '@/shared/assets/icons/behance';
import { TelegramIcon } from '@/shared/assets/icons/telegram';
import { LinkedinIcon } from '@/shared/assets/icons/linkedin';

export const About = () => {
  const { data: user } = useGetMe();

  const linksPresent = Array.isArray(user?.links) && user.links.length > 0;
  const descPresent = typeof user?.description === 'string';
  return (
    <Card style={{ width: '60%' }}>
      <Flex direction='column' gap='24px' height='100%'>
        <Typography size={'heading_s'} color={'greenBright'}>About</Typography>
        {descPresent ? (
          <Typography size={'heading_s'} color={'greenBright'}>
            About
          </Typography>
        ) : <Typography size={'body_s'} color={'greyNormal'}>
          No description added.
        </Typography>}
        <Flex flex={1}>
          {descPresent && <Typography size={'body_s'}>{user?.description}</Typography>}
        </Flex>
        {linksPresent && (
          <Flex align={'center'} gap={24}>
            {user?.links?.github && (
              <a target='_blank' href={user.links.github}>
                <GithubIcon width={28} />
              </a>
            )}
            {user?.links?.behance && (
              <a target='_blank' href={user.links.behance}>
                <BehanceIcon width={28} />
              </a>
            )}
            {user?.links?.telegram && (
              <a target='_blank' href={user.links.telegram}>
                <TelegramIcon width={28} />
              </a>
            )}
            {user?.links?.linkedIn && (
              <a target='_blank' href={user.links.linkedIn}>
                <LinkedinIcon width={28} />
              </a>
            )}
          </Flex>
        )}
      </Flex>
    </Card>
  );
};
