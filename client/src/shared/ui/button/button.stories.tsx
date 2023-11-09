import type { Meta } from '@storybook/react';
import {Button} from './button';
import React from "react";
import {Plus} from "@/shared/assets";
import {StoryObj} from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction


type Story = StoryObj<typeof Button>;

const ButtonTemplate: Story = {
  render: args =>
    <Button {...args}>
      {args.children}
    </Button>
};


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Button_With_Text= {...ButtonTemplate}

Button_With_Text.args = {
  children: "Text"
};


export const Button_With_Icon=  {...ButtonTemplate};
Button_With_Icon.args = {
  children: "Icon"
};

export const Button_With_Text_And_Icon = {...ButtonTemplate};
Button_With_Text_And_Icon.args = {
  children: "TextWithIcon"
};


const buttonArgTypes= {
  children: {
    options: ['Text', 'Icon', 'TextWithIcon'],
    default: "Text",
    description: "props.children - The content to be laid out.",
    mapping: {
      Text: <>Some Text</>,
      Icon: <><Plus/></>,
      TextWithIcon: <>Some Text <Plus/></>,
    },
    control: {
      type: 'select',
      options: ['Text', 'Icon', 'TextWithIcon'],
    },
  },
    size: {
      description: 'Size of the button',
      default: "l",
      control: {
        type: 'select',
        options: ['l', 'm', 's'],
      },
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
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'tertiary'],
      },
      default: 'primary'
    },
    className: {
      description: 'Custom CSS class for the button',
    },
    isDisabled: {
      description: 'Whether the button is disabled',
      control: {
        type: 'boolean',
      },
      default: false
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
  }

export  default {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: buttonArgTypes,
} as Meta;
