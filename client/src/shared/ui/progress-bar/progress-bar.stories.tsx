import type {Meta} from '@storybook/react';
import { ProgressBar} from '@/shared/ui';
import React from "react";
import {IProgressBar} from "@/shared/ui/progress-bar/progress-bar";
import {StoryObj} from "@storybook/react";



const progressBarProps: IProgressBar = {
  percentageProgress: 20,
  barColor: "#434752",
  progressColor: "#5BD424",
  height: "8px"
};

type Story = StoryObj<typeof ProgressBar>;

const ProgressBarTemplate: Story = {
  render: args =>
    <ProgressBar {...args} />
};


export const ProgressBar_Default = {...ProgressBarTemplate}

ProgressBar_Default.args = progressBarProps;


const progressBarArgTypes = {
  percentageProgress: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 1,
    },
    description: 'The percentage progress of the progress bar.',
    defaultValue: 20,
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: '20' },
    },
  },
  barColor: {
    control: 'color',
    description: 'The background color of the progress bar.',
    defaultValue: '#434752',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '#434752' },
    },
  },
  progressColor: {
    control: 'color',
    description: 'The color of the progress portion of the progress bar.',
    defaultValue: '#5BD424',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '#5BD424' },
    },
  },
  height: {
    control: 'text',
    description: 'The height of progress bar.',
    defaultValue: '8px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '8px' },
    },
  },
};

export  default {
  title: 'shared/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: progressBarArgTypes,
} as Meta

