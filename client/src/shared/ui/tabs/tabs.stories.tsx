import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './tabs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Tabs_default = () => {
  const tabs = ['General', 'Concentrations', 'Links'];
  const [tab, setTab] = useState<string>(tabs[0]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '400px',
      }}
    >
      <div>
        <p>Three tabs</p>
        <Tabs options={tabs} currentTab={tab} onTabChange={(option: string) => setTab(option)} />
      </div>
    </div>
  );
};
