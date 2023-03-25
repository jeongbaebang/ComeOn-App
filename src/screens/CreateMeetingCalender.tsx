import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { makeStyles } from '@rneui/themed';

import { SubDateProps } from '@type/meeting.calendar';
import { RootStackScreenProps } from '@type/navigation';
import FlexButtons from '@components/button/FlexButtons';
import {
  setCalendarEndTo,
  setCalendarStartFrom,
} from '../features/meetingSlice';

import Font from '../components/Font';
import { useAppDispatch } from '../hooks/redux/hooks';
import Calendar from '../components/calendar/Calendar';

function SubLabelDate({ date }: SubDateProps) {
  const { startDate, endDate } = date;
  const styles = useStyles();

  return (
    <View style={styles.sublabelContainer}>
      <Text style={styles.dateText}>{startDate}</Text>
      <Text style={styles.dateText}>~</Text>
      <Text style={styles.dateText}>{endDate}</Text>
    </View>
  );
}

function CreateMeetingCalender({
  navigation,
}: RootStackScreenProps<'CreateMeetingCalender'>) {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const [date, setDate] = useState({
    startDate: '0000-00-00',
    endDate: '0000-00-00',
  });
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandelr = () => {
    dispatch(setCalendarStartFrom(date.startDate));
    dispatch(setCalendarEndTo(date.endDate));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Font style={styles.title}>모임 기간</Font>
        <SubLabelDate date={date} />
      </View>
      <View style={styles.calendarContainer}>
        <Calendar type="PERIOD" data={undefined} setDate={setDate} />
      </View>
      <View>
        <FlexButtons
          cancelHandler={cancelHandler}
          onPressConfirm={confirmHandelr}
        />
      </View>
    </View>
  );
}

export default CreateMeetingCalender;

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  calendarContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    height: 600,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
  },
  sublabelContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    color: theme.grayscale['700'],
  },
}));
