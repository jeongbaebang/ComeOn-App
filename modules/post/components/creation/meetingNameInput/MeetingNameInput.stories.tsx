import { View } from 'react-native';
import { ComponentMeta } from '@storybook/react-native';

import { FontLoader } from '@shared/components/ThemeProvider';
import MeetingNameInput from './MeetingNameInput';

type Meta = ComponentMeta<typeof MeetingNameInput>;

export default {
  title: 'Creation - MeetingNameInput',
  component: MeetingNameInput,
  decorators: [
    (Story) => (
      <FontLoader>
        <Story />
      </FontLoader>
    ),
  ],
} as Meta;

export const Default: Meta = {
  args: {},
};
