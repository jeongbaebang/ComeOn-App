import { ComponentMeta } from '@storybook/react-native';

import { FontThemeProvider } from '@shared/components/ThemeProvider';
import DB from '@post/mocks/meetingPostLists';
import CardList from './CardList';

type Meta = ComponentMeta<typeof CardList>;

export default {
  title: 'CardList',
  component: CardList,
  decorators: [
    (Story) => (
      <FontThemeProvider>
        <Story />
      </FontThemeProvider>
    ),
  ],
} as Meta;

export const Default: Meta = {
  args: {
    payload: DB,
  },
};
