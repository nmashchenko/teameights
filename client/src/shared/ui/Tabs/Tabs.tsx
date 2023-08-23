import classNames from 'clsx';
import styles from './Tabs.module.scss';

/**
 * This is basic tabs component that allows you to have multiple tabs and switch between them,
 *
 * You are REQUIRED to pass 3 elements: currentTab,
 * onTabChange (make sure you pass a function in the format: (option: string) => setTab(option))
 * and options which will keep all possible tabs
 */
interface TabsProps {
  currentTab: string;
  onTabChange: (option: string) => void;
  options: string[];
}

const Tabs = ({ currentTab, onTabChange, options }: TabsProps) => {
  const handleTabChange = (option: string) => () => {
    onTabChange(option);
  };

  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          key={option}
          className={classNames(styles.tab, {
            [styles.tab__active]: currentTab === option,
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

export default Tabs;
