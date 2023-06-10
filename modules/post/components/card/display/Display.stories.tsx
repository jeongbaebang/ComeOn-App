import { View } from 'react-native';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { FontLoader } from '@shared/components/ThemeProvider';
import Display from './Display';
import CardMenu from '../menu/Menu';
import Title from './Title';
import SubTitle from './SubTitle';

type Meta = ComponentMeta<typeof Display>;

export default {
  title: 'Card - Display',
  component: Display,
  decorators: [
    (Story) => (
      <FontLoader>
        <View style={{ margin: 10 }}>
          <Story />
        </View>
      </FontLoader>
    ),
  ],
} as Meta;

export const GroupDisplay: Meta = {
  args: {
    name: 'group',
    children: '999명',
    disabled: false,
  },
};

export const ConfirmedDisplay: Meta = {
  args: {
    name: 'check-circle',
    children: '확정',
    disabled: false,
  },
};

export const UnConfirmedDisplay: Meta = {
  args: {
    name: 'check-circle',
    children: '미확정',
    disabled: true,
  },
};

type MenuStory = ComponentStory<typeof CardMenu>;

export const MenuDisplay: MenuStory = () => {
  return (
    <View style={{ width: 24 }}>
      <CardMenu />
    </View>
  );
};

type TitleStory = ComponentStory<typeof Title>;

export const CardTitle: TitleStory = (arg) => {
  arg.text = '물개들의 모임';

  return <Title {...arg} />;
};

type SubTitleStory = ComponentStory<typeof SubTitle>;

export const CardSubTitle: SubTitleStory = (arg) => {
  arg.userName = '여행 마스터';
  arg.range = {
    startFrom: '2023-06-10',
    endTo: '2023-06-20',
  };

  return <SubTitle {...arg} />;
};
