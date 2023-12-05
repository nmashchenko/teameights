import type { Meta } from '@storybook/react';
import { Button, buttonSizeArray, buttonTypesArray } from './button';
import React from 'react';
import { Plus } from '@/shared/assets';
import { StoryObj } from '@storybook/react';
import { Flex } from '../flex';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

type Story = StoryObj<typeof Button>;

const ButtonTemplate: Story = {
  render: args => <Button {...args}>{args.children}</Button>,
};

const buttonContentOptions = {
  text: <span>Some Text</span>,
  icon: <Plus />,
  textWithIcon: (
    <>
      <span>Some Text</span> <Plus />
    </>
  ),
};

const AllButtons: Story = {
  render: args => (
    <Flex direction={'column'} gap={30}>
      {buttonSizeArray.map(size => (
        <Flex key={size} gap={20}>
          {buttonTypesArray.map(type => (
            <React.Fragment key={`${type}-${size}`}>
              {Object.keys(buttonContentOptions).map(content => (
                <Button
                  {...args}
                  key={`${type}-${content}-${size}`}
                  disabled={size === 'm'}
                  typeBtn={type}
                  size={size}
                >
                  {buttonContentOptions[content as keyof typeof buttonContentOptions]}
                </Button>
              ))}
            </React.Fragment>
          ))}
        </Flex>
      ))}
    </Flex>
  ),
};

export const ALL_BUTTONS = AllButtons;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Button_With_Text = { ...ButtonTemplate };

Button_With_Text.args = {
  children: 'Text',
};

export const Button_With_Icon = { ...ButtonTemplate };
Button_With_Icon.args = {
  children: 'Icon',
};

export const Button_With_Text_And_Icon = { ...ButtonTemplate };
Button_With_Text_And_Icon.args = {
  children: 'TextWithIcon',
};

const buttonArgTypes = {
  children: {
    options: ['Text', 'Icon', 'TextWithIcon'],
    default: 'Text',
    description: 'props.children - The content to be laid out.',
    mapping: {
      Text: buttonContentOptions.text,
      Icon: buttonContentOptions.icon,
      TextWithIcon: buttonContentOptions.textWithIcon,
    },
    control: {
      type: 'select',
      options: ['Text', 'Icon', 'TextWithIcon'],
    },
  },
  size: {
    description: 'Size of the button',
  },
  content: {
    description: 'Content type of the button',
    default: 'button_with_text',
    control: {
      type: 'select',
      options: ['icon_button', 'button_with_text'],
    },
  },
  typeBtn: {
    description: 'Type of the button',
  },
  className: {
    description: 'Custom CSS class for the button',
  },
  isDisabled: {
    description: 'Whether the button is disabled',
    control: {
      type: 'boolean',
    },
    default: false,
  },
  width: {
    description: 'Width of the button',
    control: {
      type: 'text',
    },
  },
  color: {
    description: 'Color of the button',
  },
  padding: {
    description: 'Padding of the button',
    control: {
      type: 'text',
    },
  },
};

export default {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: buttonArgTypes,
} as Meta;
