import React from 'react';

import TestId from '@shared/constants/testIds';
import MeetingNameInput from '@post/components/creation/meetingNameInput/MeetingNameInput';
import Uploader from '@post/components/creation/uploader/Uploader';
import VotingTimeRangePicker from '@post/components/creation/votingTimeRangePicker/VotingTimeRangePicker';
import ScreenLayout from '@shared/components/layout/Layout';
import ConfirmCancelButton from '@post/components/card/button/ConfirmCancelButton';
import useStyles from './style';

export default function MeetingPostCreator() {
  const { cConfirmCancelButton, cUploader } = useStyles();

  return (
    <ScreenLayout testID={TestId.post.creator}>
      <Uploader containerStyle={cUploader} />
      <MeetingNameInput />
      <VotingTimeRangePicker />
      <ConfirmCancelButton containerStyle={cConfirmCancelButton} />
    </ScreenLayout>
  );
}
