import type { IconName } from '@shared/components/icon/type';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface Iinput {
  text: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

export interface IpressableInput {
  text: string;
  icon?: {
    name: IconName;
    color: string;
  };
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
  fontColor?: string;
  onPress?: () => void;
}

export interface IcodeField {
  value: string;
  cellCount: number;
  setValue: (arg: string) => void;
  fontStyle?: StyleProp<TextStyle>;
  cursorSymbol?: string;
}
