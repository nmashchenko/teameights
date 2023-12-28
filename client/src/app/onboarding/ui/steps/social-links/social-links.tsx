import { Flex, InputLink } from '@/shared/ui';
import { useState } from 'react';

export const SocialLinks = () => {
  const [gitLink, setGitLink] = useState('');
  const [behLink, setBehLink] = useState('');
  const [telLink, setTelLink] = useState('');
  const [linLink, setLinLink] = useState('');

  return (
    <Flex direction='column' gap='48px' width="100%" maxWidth='370px'>
      <div>
        <InputLink
          name='git'
          placeholder='add link'
          value={gitLink}
          onChange={e => setGitLink(e.target.value)}
          linkType='github'
        />
      </div>
      <div>
        <InputLink
          name='beh'
          placeholder='add link'
          value={behLink}
          onChange={e => setBehLink(e.target.value)}
          linkType='behance'
        />
      </div>
      <div>
        <InputLink
          name='tel'
          placeholder='add link'
          value={telLink}
          onChange={e => setTelLink(e.target.value)}
          linkType='telegram'
        />
      </div>
      <div>
        <InputLink
          name='git'
          placeholder='add link'
          value={linLink}
          onChange={e => setLinLink(e.target.value)}
          linkType='linkedin'
        />
      </div>
    </Flex>
  );
};
