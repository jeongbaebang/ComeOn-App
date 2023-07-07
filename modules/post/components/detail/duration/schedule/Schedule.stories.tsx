import { View } from 'react-native';
import { ComponentMeta } from '@storybook/react-native';

import { FontThemeProvider } from '@shared/components/ThemeProvider';
import Component from './Schedule';

type Meta = ComponentMeta<typeof Component>;

export default {
  title: 'Detail - Duration',
  component: Component,
  decorators: [
    (Story) => (
      <FontThemeProvider>
        <View style={{ margin: 10 }}>
          <Story />
        </View>
      </FontThemeProvider>
    ),
  ],
  args: {
    range: {
      startFrom: '2023-06-10',
      endTo: '2023-06-20',
    },
  },
  argTypes: {
    isFixed: {
      type: 'boolean',
    },
  },
} as Meta;

export const Schedule: Meta = {
  args: {},
};

export const FixedSchedule: Meta = {
  args: {
    range: {
      startFrom: '2023-06-10',
      endTo: '2023-06-10',
    },
    isFixed: true,
  },
};
