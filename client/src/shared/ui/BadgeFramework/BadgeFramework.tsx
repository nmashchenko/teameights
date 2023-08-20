import { Framework } from './BadgeFramework.styles';
import {
  frameworkColors,
  frameworkTextColors,
} from 'shared/constants/frameworkColors';

export const BadgeFramework = () => {
  // TODO: Replace with "person" context
  const userFrameworks = ['React', 'Node.js', 'Angular', 'iOS'];

  return (
    <>
      {userFrameworks.map((item, id) => (
        <Framework
          key={id}
          background={frameworkColors[item]}
          color={frameworkTextColors[item]}
        >
          {item}
        </Framework>
      ))}
    </>
  );
};
