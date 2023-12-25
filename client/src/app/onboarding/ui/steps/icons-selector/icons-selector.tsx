import { Flex, Typography, BadgeIcon } from '@/shared/ui';
import { EmptyTile } from './ui/empty-tile/empty-tile';
import { FC, useState } from 'react';
import { Search } from '../../shared/search/search';
import styles from './icons-selector.module.scss';
import { IconItem } from './ui/icon-item/icon-item';
import isEmpty from 'lodash.isempty';
import { useFormContext } from 'react-hook-form';

const MAX_ICONS = 8;
const SPECIALITY = 'Frontend/UI Developer'; // TODO: replace with real data. Hardcoded Right now

interface IOption {
  label: string;
  value: string;
}

interface IRecommendedIcons {
  [role: string]: IOption[] | undefined;
}

interface IconsSelector {
  icons: IOption[];
  recommendedIcons?: IRecommendedIcons;
  formFieldToUpdate: string;
}

export const IconsSelector: FC<IconsSelector> = ({
  icons,
  recommendedIcons,
  formFieldToUpdate,
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
      <div className={styles.top}>
        <div className={styles.selected_icons}>
          <Flex wrap='wrap' gap='24px'>
            {Array(8)
              .fill(null)
              .map((value, index) => {
                const iconsItem = selectedIcons[index];
                if (iconsItem) {
                  return (
                    <div onClick={() => toggleIcon(iconsItem)} key={index}>
                      <BadgeIcon isActive={true} data={iconsItem.label} />
                    </div>
                  );
                }
                return <EmptyTile key={index} />;
              })}
          </Flex>
        </div>
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
      </div>
      <div className={styles.icons_list}>
        {text === '' && !isEmpty(recommendedIcons) && (
          <div className={styles.recommended}>
            <Typography size='body_s' color='greyNormal'>
              Recommended for you
            </Typography>

            <div className={styles.recommended_icons}>
              {recommendedIcons[SPECIALITY]?.filter(filterBySearch).map((icon, index) => (
                <IconItem
                  isActive={Boolean(selectedIcons.find(option => option.label === icon.label))}
                  onClick={() => toggleIcon(icon)}
                  icon={icon.label}
                  key={index}
                />
              ))}
            </div>
          </div>
        )}
        <div className={styles.recommended}>
          <Typography size='body_s' color='greyNormal'>
            All languages
          </Typography>
          <div className={styles.recommended_icons}>
            {icons.filter(filterBySearch).map((icon, index) => (
              <IconItem
                isActive={Boolean(selectedIcons.find(option => option.label === icon.label))}
                onClick={() => toggleIcon(icon)}
                icon={icon.label}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Flex>
  );
};
