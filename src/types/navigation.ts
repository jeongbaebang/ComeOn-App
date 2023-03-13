/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
import '@rneui/themed';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
};

export type PlaceSelectParamList = {
  Main: undefined;
  Map: undefined;
};

export type RoomCalendarParamList = {
  hostId: undefined;
};

export type PlaceSelectScreen = NativeStackScreenProps<PlaceSelectParamList>;

export type PlaceSelectNavigation = PlaceSelectScreen['navigation'];

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList>;
  MeetingRoom: undefined;
  CreateMeeting: undefined;
  PlaceSelect: NavigatorScreenParams<PlaceSelectParamList>;
  CreateMeetingCalender: undefined;
  MeetingRoomCalendar: NavigatorScreenParams<RoomCalendarParamList> | undefined;
  LoginScreen: undefined;
  KakaoLoginWebView: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
