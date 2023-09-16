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
    "./modules/account/components/accountManagement/AccountManagement.stories.tsx": require("../modules/account/components/accountManagement/AccountManagement.stories.tsx"),
    "./modules/account/components/auth/button/apple/Apple.stories.tsx": require("../modules/account/components/auth/button/apple/Apple.stories.tsx"),
    "./modules/account/components/auth/button/google/Google.stories.tsx": require("../modules/account/components/auth/button/google/Google.stories.tsx"),
    "./modules/account/components/description/WelcomeMessage.stories.tsx": require("../modules/account/components/description/WelcomeMessage.stories.tsx"),
    "./modules/account/components/nickName/NickName.stories.tsx": require("../modules/account/components/nickName/NickName.stories.tsx"),
    "./modules/account/components/policyInfo/PolicyInfo.stories.tsx": require("../modules/account/components/policyInfo/PolicyInfo.stories.tsx"),
    "./modules/account/components/policyVersionMenu/PolicyVersionMenu.stories.tsx": require("../modules/account/components/policyVersionMenu/PolicyVersionMenu.stories.tsx"),
    "./modules/account/components/submitStatus/SubmitStatus.stories.tsx": require("../modules/account/components/submitStatus/SubmitStatus.stories.tsx"),
    "./modules/account/components/userInfo/UserInfo.stories.tsx": require("../modules/account/components/userInfo/UserInfo.stories.tsx"),
    "./modules/account/screens/SignIn.stories.tsx": require("../modules/account/screens/SignIn.stories.tsx"),
    "./modules/app/navigation/BottomTabNavigator.stories.tsx": require("../modules/app/navigation/BottomTabNavigator.stories.tsx"),
    "./modules/app/navigation/RootNavigation.stories.tsx": require("../modules/app/navigation/RootNavigation.stories.tsx"),
    "./modules/connection/components/button/CodeEntryButton.stories.tsx": require("../modules/connection/components/button/CodeEntryButton.stories.tsx"),
    "./modules/connection/components/description/CodeDescription.stories.tsx": require("../modules/connection/components/description/CodeDescription.stories.tsx"),
    "./modules/connection/components/entranceInput/EntranceInput.stories.tsx": require("../modules/connection/components/entranceInput/EntranceInput.stories.tsx"),
    "./modules/post/components/card/Card.stories.tsx": require("../modules/post/components/card/Card.stories.tsx"),
    "./modules/post/components/card/info/display/Display.stories.tsx": require("../modules/post/components/card/info/display/Display.stories.tsx"),
    "./modules/post/components/card/info/heading/BottomHeading.stories.tsx": require("../modules/post/components/card/info/heading/BottomHeading.stories.tsx"),
    "./modules/post/components/card/info/heading/TopHeading.stories.tsx": require("../modules/post/components/card/info/heading/TopHeading.stories.tsx"),
    "./modules/post/components/card/skeleton/Skeleton.stories.tsx": require("../modules/post/components/card/skeleton/Skeleton.stories.tsx"),
    "./modules/post/components/card/thumbnail/Thumbnail.stories.tsx": require("../modules/post/components/card/thumbnail/Thumbnail.stories.tsx"),
    "./modules/post/components/cardList/CardList.stories.tsx": require("../modules/post/components/cardList/CardList.stories.tsx"),
    "./modules/post/components/creation/uploader/Uploader.stories.tsx": require("../modules/post/components/creation/uploader/Uploader.stories.tsx"),
    "./modules/post/components/creation/votingTimeRangePicker/VotingTimeRangePicker.stories.tsx": require("../modules/post/components/creation/votingTimeRangePicker/VotingTimeRangePicker.stories.tsx"),
    "./modules/post/components/detail/duration/Duration.stories.tsx": require("../modules/post/components/detail/duration/Duration.stories.tsx"),
    "./modules/post/components/detail/duration/schedule/Schedule.stories.tsx": require("../modules/post/components/detail/duration/schedule/Schedule.stories.tsx"),
    "./modules/post/components/detail/duration/timePickerButton/TimePickerButton.stories.tsx": require("../modules/post/components/detail/duration/timePickerButton/TimePickerButton.stories.tsx"),
    "./modules/post/components/detail/duration/votingStatus/VotingStatus.stories.tsx": require("../modules/post/components/detail/duration/votingStatus/VotingStatus.stories.tsx"),
    "./modules/post/components/detail/participants/member/Member.stories.tsx": require("../modules/post/components/detail/participants/member/Member.stories.tsx"),
    "./modules/post/components/detail/participants/memberCount/MemberCount.stories.tsx": require("../modules/post/components/detail/participants/memberCount/MemberCount.stories.tsx"),
    "./modules/post/components/detail/participants/members/Members.stories.tsx": require("../modules/post/components/detail/participants/members/Members.stories.tsx"),
    "./modules/post/components/detail/participants/Participants.stories.tsx": require("../modules/post/components/detail/participants/Participants.stories.tsx"),
    "./modules/post/components/detail/participants/skeleton/MembersSkeleton.stories.tsx": require("../modules/post/components/detail/participants/skeleton/MembersSkeleton.stories.tsx"),
    "./modules/post/components/detail/planner/addVenue/AddVenue.stories.tsx": require("../modules/post/components/detail/planner/addVenue/AddVenue.stories.tsx"),
    "./modules/post/components/detail/planner/customField/field/CustomField.stories.tsx": require("../modules/post/components/detail/planner/customField/field/CustomField.stories.tsx"),
    "./modules/post/components/detail/planner/map/Map.stories.tsx": require("../modules/post/components/detail/planner/map/Map.stories.tsx"),
    "./modules/post/components/detail/planner/Planner.stories.tsx": require("../modules/post/components/detail/planner/Planner.stories.tsx"),
    "./modules/post/components/detail/planner/venue/card/category/Category.stories.tsx": require("../modules/post/components/detail/planner/venue/card/category/Category.stories.tsx"),
    "./modules/post/components/detail/planner/venue/card/NoteCard.stories.tsx": require("../modules/post/components/detail/planner/venue/card/NoteCard.stories.tsx"),
    "./modules/post/components/detail/planner/venue/order/Order.stories.tsx": require("../modules/post/components/detail/planner/venue/order/Order.stories.tsx"),
    "./modules/post/components/detail/planner/venue/skeleton/Skeleton.stories.tsx": require("../modules/post/components/detail/planner/venue/skeleton/Skeleton.stories.tsx"),
    "./modules/post/components/detail/planner/venue/Venue.stories.tsx": require("../modules/post/components/detail/planner/venue/Venue.stories.tsx"),
    "./modules/post/components/emptyCardList/EmptyCardList.stories.tsx": require("../modules/post/components/emptyCardList/EmptyCardList.stories.tsx"),
    "./modules/post/components/invitation/code/Code.stories.tsx": require("../modules/post/components/invitation/code/Code.stories.tsx"),
    "./modules/post/components/invitation/modal/Modal.stories.tsx": require("../modules/post/components/invitation/modal/Modal.stories.tsx"),
    "./modules/post/components/loadingCardList/LoadingCardList.stories.tsx": require("../modules/post/components/loadingCardList/LoadingCardList.stories.tsx"),
    "./modules/post/components/modification/uploader/Uploader.stories.tsx": require("../modules/post/components/modification/uploader/Uploader.stories.tsx"),
    "./modules/post/components/postInput/PostInput.stories.tsx": require("../modules/post/components/postInput/PostInput.stories.tsx"),
    "./modules/post/components/search/searchAndCreate/SearchAndCreateBar.stories.tsx": require("../modules/post/components/search/searchAndCreate/SearchAndCreateBar.stories.tsx"),
    "./modules/post/components/search/searchBar/SearchBar.stories.tsx": require("../modules/post/components/search/searchBar/SearchBar.stories.tsx"),
    "./modules/post/components/serverError/ServerError.stories.tsx": require("../modules/post/components/serverError/ServerError.stories.tsx"),
    "./modules/post/screens/MeetingDatePicker.stories.tsx": require("../modules/post/screens/MeetingDatePicker.stories.tsx"),
    "./modules/post/screens/MeetingPlanner.stories.tsx": require("../modules/post/screens/MeetingPlanner.stories.tsx"),
    "./modules/post/screens/MeetingPlannerDetail.stories.tsx": require("../modules/post/screens/MeetingPlannerDetail.stories.tsx"),
    "./modules/post/screens/MeetingPostCreator.stories.tsx": require("../modules/post/screens/MeetingPostCreator.stories.tsx"),
    "./modules/post/screens/MeetingPostDetail.stories.tsx": require("../modules/post/screens/MeetingPostDetail.stories.tsx"),
    "./modules/post/screens/MeetingPostModifier.stories.tsx": require("../modules/post/screens/MeetingPostModifier.stories.tsx"),
    "./modules/post/screens/MeetingPostReportForm.stories.tsx": require("../modules/post/screens/MeetingPostReportForm.stories.tsx"),
    "./modules/shared/components/avatar/Avatar.stories.tsx": require("../modules/shared/components/avatar/Avatar.stories.tsx"),
    "./modules/shared/components/button/Button.stories.tsx": require("../modules/shared/components/button/Button.stories.tsx"),
    "./modules/shared/components/button/ConfirmCancelButton.stories.tsx": require("../modules/shared/components/button/ConfirmCancelButton.stories.tsx"),
    "./modules/shared/components/button/IconButton.stories.tsx": require("../modules/shared/components/button/IconButton.stories.tsx"),
    "./modules/shared/components/calendar/Calendar.stories.tsx": require("../modules/shared/components/calendar/Calendar.stories.tsx"),
    "./modules/shared/components/description/Description.stories.tsx": require("../modules/shared/components/description/Description.stories.tsx"),
    "./modules/shared/components/font/Font.stories.tsx": require("../modules/shared/components/font/Font.stories.tsx"),
    "./modules/shared/components/imageUploader/ImageUploader.stories.tsx": require("../modules/shared/components/imageUploader/ImageUploader.stories.tsx"),
    "./modules/shared/components/input/CodeField.stories.tsx": require("../modules/shared/components/input/CodeField.stories.tsx"),
    "./modules/shared/components/input/Input.stories.tsx": require("../modules/shared/components/input/Input.stories.tsx"),
    "./modules/shared/components/input/PressableInput.stories.tsx": require("../modules/shared/components/input/PressableInput.stories.tsx"),
    "./modules/shared/components/logo/Logo.stories.tsx": require("../modules/shared/components/logo/Logo.stories.tsx"),
    "./modules/shared/components/menu/Menu.stories.tsx": require("../modules/shared/components/menu/Menu.stories.tsx"),
    "./modules/shared/components/textLengthCounter/TextLengthCounter.stories.tsx": require("../modules/shared/components/textLengthCounter/TextLengthCounter.stories.tsx"),
  };
};

configure(getStories, module, false);
