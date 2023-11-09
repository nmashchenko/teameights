import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {NeedHelp} from "@/entities/need-help/need-help";


type Story = StoryObj<typeof NeedHelp>;

const NeedHelpTemplate: Story = {
  render: args =>
    <NeedHelp {...args} />
};


export const NeedHelp_Default = {...NeedHelpTemplate}

export  default {
  title: 'shared/NeedHelp',
  component: NeedHelp,
  tags: ['autodocs']
} as Meta;
