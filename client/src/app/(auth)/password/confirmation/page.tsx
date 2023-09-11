import { IllustrationStatus } from 'app/shared/illustration';

export default function Confirmation() {
  return (
    <IllustrationStatus
      mainText='Check your email'
      subText='If your email is on file, we will send a reset link'
    />
  );
}
