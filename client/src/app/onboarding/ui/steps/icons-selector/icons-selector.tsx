import { Flex } from '@/shared/ui';
import { FC, useState } from 'react';
import { Search } from '../../shared/search/search';
import styles from './icons-selector.module.scss';
import isEmpty from 'lodash.isempty';
import { useFormContext } from 'react-hook-form';
import { Placeholders } from '@/app/onboarding/ui/steps/icons-selector/ui/placeholders/placeholders';
import { Options } from '@/app/onboarding/ui/steps/icons-selector/ui/options/options';
import { IOption, IRoleToOptionsMap } from '@/shared/interfaces';

const MAX_ICONS = 8;
const SPECIALITY = 'Frontend/UI Developer'; // TODO: replace with real data. Hardcoded Right now

interface IconsSelector {
  icons: IOption[];
  recommendedIcons?: IRoleToOptionsMap;
  formFieldToUpdate: string;
  description: string;
  type?: 'text' | 'icon';
}

export const IconsSelector: FC<IconsSelector> = ({
  icons,
  recommendedIcons,
  formFieldToUpdate,
  description,
  type = 'icon',
}) => {
  const [text, setText] = useState('');
  const [selectedIcons, setSelectedIcons] = useState<IOption[]>([]);
  const { setValue } = useFormContext();

  function toggleIcon(clickedIcon: IOption) {
    setSelectedIcons(prev => {
      let index = -1;
      const appearedIcon = Array.from(prev as IOption[]).find((icon, i) => {
        index = i;
        return icon.value === clickedIcon.value;
      });
      if (appearedIcon) {
        let newIcons = prev.slice(0, index).concat(prev.slice(index + 1));
        setValue(
          formFieldToUpdate,
          newIcons.map(icon => icon.label)
        );

        return prev.slice(0, index).concat(prev.slice(index + 1));
      } else {
        if (prev.length === MAX_ICONS) return prev;
        let newIcons = [...prev, clickedIcon];
        setValue(
          formFieldToUpdate,
          newIcons.map(icon => icon.label)
        );

        return [...prev, clickedIcon];
      }
    });
  }

  function filterBySearch(item: IOption) {
    const trimmedText = text.trim().toLowerCase();
    return (
      item.label.toLowerCase().includes(trimmedText) ||
      item.value.toLowerCase().includes(trimmedText)
    );
  }

  return (
    <Flex width='100%' direction='column' padding='36px 0'>
      <Placeholders selectedIcons={selectedIcons} toggleIcon={toggleIcon} type={type} />
      <div className={styles.search}>
        <Flex>
          <Search
            placeholder='Search'
            defaultValue={text}
            onChange={e => {
              return setText(e);
            }}
          />
        </Flex>
      </div>
      <Flex direction='column' gap='24px'>
        {text === '' && !isEmpty(recommendedIcons) && (
          <Options
            icons={recommendedIcons[SPECIALITY] ?? []}
            selectedIcons={selectedIcons}
            type={type}
            filterFn={filterBySearch}
            toggleFn={toggleIcon}
            description='Recommended for you'
          />
        )}
        <Options
          icons={icons}
          selectedIcons={selectedIcons}
          type={type}
          filterFn={filterBySearch}
          toggleFn={toggleIcon}
          description={description}
        />
      </Flex>
    </Flex>
  );
};
