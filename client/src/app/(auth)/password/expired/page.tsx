import { IllustrationStatus } from '../../ui';

export default function Expired() {
  return (
    <IllustrationStatus
      mainText='Sorry, the link has expired'
      subText='This link expires after 15 minutes and can be used once.'
    />
  );
}