import { Flex, InputLink } from '@/shared/ui';
import { useFormContext } from 'react-hook-form';

export const SocialLinks = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // eslint-disable-next-line
  const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

  const validateURL = (value: string) => {
    if (value && !value.match(urlPattern)) {
      return 'Invalid URL';
    }
    return true;
  };

  return (
    <Flex direction='column' gap='48px' width='100%' maxWidth='370px'>
      <div>
        <InputLink
          placeholder='add link'
          {...register('github', {
            validate: validateURL,
          })}
          linkType='github'
          error={errors.github?.message as string}
        />
      </div>
      <div>
        <InputLink
          {...register('behance', {
            validate: validateURL,
          })}
          placeholder='add link'
          linkType='behance'
          error={errors.behance?.message as string}
        />
      </div>
      <div>
        <InputLink
          {...register('telegram', {
            validate: validateURL,
          })}
          placeholder='add link'
          linkType='telegram'
          error={errors.telegram?.message as string}
        />
      </div>
      <div>
        <InputLink
          {...register('linkedIn', {
            validate: validateURL,
          })}
          placeholder='add link'
          linkType='linkedIn'
          error={errors.linkedIn?.message as string}
        />
      </div>
    </Flex>
  );
};
