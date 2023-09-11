import classNames from 'clsx';
import styles from './styles.module.scss';

/**
 * Tabs Component
 *
 * A simple and customizable tabs component that displays a list of tab options and allows for switching between them.
 *
 * Props:
 *
 * @prop {string} currentTab - The identifier of the currently active tab.
 * @prop {function} onTabChange - Callback function that is triggered when a tab is clicked. It receives the identifier of the clicked tab.
 * @prop {string[]} options - Array of tab identifiers. These will be displayed as the tabs.
 *
 * Usage:
 *
 * ```tsx
 * import { Tabs } from 'shared/ui';
 *
 * <Tabs
 *   currentTab="Tab1"
 *   onTabChange={(selectedTab) => console.log(`Switched to ${selectedTab}`)}
 *   options={["Tab1", "Tab2", "Tab3"]}
 * />
 * ```
 *
 * Note:
 * - This component uses `classNames` for conditional class joining.
 * - External styles are imported from 'styles.module.scss'. Ensure the styles are appropriately set in the SCSS file.
 * - Each tab button has a key based on its option identifier to ensure efficient rendering.
 * - The currently active tab will have a class `tab__active` which can be used to style the active state of the tab.
 *
 * Styling:
 * You can customize the appearance of the tabs and the active tab highlight using the 'styles.module.scss' file.
 *
 * Accessibility:
 * The component uses native `<button>` elements for tabs, ensuring good accessibility. Ensure the `onTabChange` callback and `currentTab` property are managed properly in parent components to keep the tabs in sync with displayed content.
 */

interface TabsProps {
  currentTab: string;
  onTabChange: (option: string) => void;
  options: string[];
}

export const Tabs = ({ currentTab, onTabChange, options }: TabsProps) => {
  const handleTabChange = (option: string) => () => {
    onTabChange(option);
  };

  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          key={option}
          className={classNames(styles.tab, {
            [styles.tab__active]: currentTab === option
          })}
          onClick={handleTabChange(option)}
        >
          {option}
          <span></span>
        </button>
      ))}
    </div>
  );
};
