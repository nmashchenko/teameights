import { Input, InputProps } from '../input/input';

import { FC, forwardRef } from 'react';

import { LinkIcon, LinkedinIcon, GithubIcon, BehanceIcon, TelegramIcon } from '@/shared/assets';
import styles from './input-link.module.scss';

type LinkType = 'link' | 'linkedIn' | 'github' | 'behance' | 'telegram';

type InputLinkProps = InputProps & {
  linkType: LinkType;
};

const DetectLink = (link: LinkType) => {
  switch (link) {
    case 'link':
      return <LinkIcon />;
    case 'linkedIn':
      return <LinkedinIcon />;
    case 'github':
      return <GithubIcon />;
    case 'behance':
      return <BehanceIcon />;
    case 'telegram':
      return <TelegramIcon />;
    default:
      return null;
  }
};

export const InputLink: FC<InputLinkProps> = forwardRef<HTMLInputElement, InputLinkProps>(
  ({ linkType, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.linkwrapper}>{DetectLink(linkType)}</div>
        <Input {...props} ref={ref} />
      </div>
    );
  }
);
