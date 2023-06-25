/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./modules",
    files: "**/*.stories.mdx",
    importPathMatcher:
      "^\\.[\\\\/](?:modules(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$",
  },
  {
    titlePrefix: "",
    directory: "./modules",
    files: "**/*.stories.@(js|jsx|ts|tsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:modules(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./modules/app/navigation/BottomTabNavigator.stories.tsx": require("../modules/app/navigation/BottomTabNavigator.stories.tsx"),
    "./modules/post/components/button/ConfirmCancelButton.stories.tsx": require("../modules/post/components/button/ConfirmCancelButton.stories.tsx"),
    "./modules/post/components/card/Card.stories.tsx": require("../modules/post/components/card/Card.stories.tsx"),
    "./modules/post/components/card/display/BottomHeading.stories.tsx": require("../modules/post/components/card/display/BottomHeading.stories.tsx"),
    "./modules/post/components/card/display/Display.stories.tsx": require("../modules/post/components/card/display/Display.stories.tsx"),
    "./modules/post/components/card/display/TopHeading.stories.tsx": require("../modules/post/components/card/display/TopHeading.stories.tsx"),
    "./modules/post/components/card/thumbnail/Thumbnail.stories.tsx": require("../modules/post/components/card/thumbnail/Thumbnail.stories.tsx"),
    "./modules/post/components/cardList/CardList.stories.tsx": require("../modules/post/components/cardList/CardList.stories.tsx"),
    "./modules/post/components/creation/meetingNameInput/MeetingNameInput.stories.tsx": require("../modules/post/components/creation/meetingNameInput/MeetingNameInput.stories.tsx"),
    "./modules/post/components/creation/uploader/Uploader.stories.tsx": require("../modules/post/components/creation/uploader/Uploader.stories.tsx"),
    "./modules/post/components/creation/votingTimeRangePicker/VotingTimeRangePicker.stories.tsx": require("../modules/post/components/creation/votingTimeRangePicker/VotingTimeRangePicker.stories.tsx"),
    "./modules/post/components/detail/duration/Duration.stories.tsx": require("../modules/post/components/detail/duration/Duration.stories.tsx"),
    "./modules/post/components/detail/duration/schedule/Schedule.stories.tsx": require("../modules/post/components/detail/duration/schedule/Schedule.stories.tsx"),
    "./modules/post/components/detail/duration/timePickerButton/TimePickerButton.stories.tsx": require("../modules/post/components/detail/duration/timePickerButton/TimePickerButton.stories.tsx"),
    "./modules/post/components/detail/participants/member/Member.stories.tsx": require("../modules/post/components/detail/participants/member/Member.stories.tsx"),
    "./modules/post/components/detail/participants/memberCount/MemberCount.stories.tsx": require("../modules/post/components/detail/participants/memberCount/MemberCount.stories.tsx"),
    "./modules/post/components/detail/participants/members/Members.stories.tsx": require("../modules/post/components/detail/participants/members/Members.stories.tsx"),
    "./modules/post/components/detail/participants/Participants.stories.tsx": require("../modules/post/components/detail/participants/Participants.stories.tsx"),
    "./modules/post/components/detail/planner/addVenue/AddVenue.stories.tsx": require("../modules/post/components/detail/planner/addVenue/AddVenue.stories.tsx"),
    "./modules/post/components/detail/planner/map/Map.stories.tsx": require("../modules/post/components/detail/planner/map/Map.stories.tsx"),
    "./modules/post/components/detail/planner/venue/noteCard/category/Category.stories.tsx": require("../modules/post/components/detail/planner/venue/noteCard/category/Category.stories.tsx"),
    "./modules/post/components/detail/planner/venue/noteCard/NoteCard.stories.tsx": require("../modules/post/components/detail/planner/venue/noteCard/NoteCard.stories.tsx"),
    "./modules/post/components/detail/planner/venue/order/Order.stories.tsx": require("../modules/post/components/detail/planner/venue/order/Order.stories.tsx"),
    "./modules/post/components/search/searchAndCreate/SearchAndCreateBar.stories.tsx": require("../modules/post/components/search/searchAndCreate/SearchAndCreateBar.stories.tsx"),
    "./modules/post/components/search/searchBar/SearchBar.stories.tsx": require("../modules/post/components/search/searchBar/SearchBar.stories.tsx"),
    "./modules/post/screens/MeetingDatePicker.stories.tsx": require("../modules/post/screens/MeetingDatePicker.stories.tsx"),
    "./modules/post/screens/MeetingPostCreator.stories.tsx": require("../modules/post/screens/MeetingPostCreator.stories.tsx"),
    "./modules/post/screens/MeetingPostViewer.stories.tsx": require("../modules/post/screens/MeetingPostViewer.stories.tsx"),
    "./modules/shared/components/avatar/Avatar.stories.tsx": require("../modules/shared/components/avatar/Avatar.stories.tsx"),
    "./modules/shared/components/button/Button.stories.tsx": require("../modules/shared/components/button/Button.stories.tsx"),
    "./modules/shared/components/button/IconButton.stories.tsx": require("../modules/shared/components/button/IconButton.stories.tsx"),
    "./modules/shared/components/font/Font.stories.tsx": require("../modules/shared/components/font/Font.stories.tsx"),
    "./modules/shared/components/imageUploader/ImageUploader.stories.tsx": require("../modules/shared/components/imageUploader/ImageUploader.stories.tsx"),
    "./modules/shared/components/input/Input.stories.tsx": require("../modules/shared/components/input/Input.stories.tsx"),
    "./modules/shared/components/input/PressableInput.stories.tsx": require("../modules/shared/components/input/PressableInput.stories.tsx"),
    "./modules/shared/components/menu/Menu.stories.tsx": require("../modules/shared/components/menu/Menu.stories.tsx"),
    "./modules/shared/components/textLengthCounter/TextLengthCounter.stories.tsx": require("../modules/shared/components/textLengthCounter/TextLengthCounter.stories.tsx"),
  };
};

configure(getStories, module, false);
