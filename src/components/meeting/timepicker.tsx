import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { makeStyles } from '@rneui/themed';
import IconInputBox from '@components/input/IconInputBox';
import Font from '@components/Font';
import { IconProps } from '@type/index';
import {
  ItemProps,
  TimePickerListProps,
  TimePickerProps,
} from '@type/meeting.Timepicker';

function renderItem(
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<string>>,
) {
  return array.map(elem => (
    <Item handler={setArray} key={Math.random() * 100000}>
      {elem}
    </Item>
  ));
}

function Item({ children, handler }: ItemProps) {
  const styles = useStyles();
  const onPressClick = () => {
    handler(children < 10 ? `0${children}` : `${children}`);
  };

  return (
    <Pressable
      onPress={onPressClick}
      style={({ pressed }) => [
        styles.dropdownItem,
        pressed && styles.datePressed,
      ]}
    >
      <Text style={styles.fontColor}>
        {children < 10 ? `0${children}` : children}
      </Text>
    </Pressable>
  );
}

function TimePickerList({ arrayItem, setItem }: TimePickerListProps) {
  return (
    <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback>
        <>{renderItem(arrayItem, setItem)}</>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

function TimePicker({ onPressOut }: TimePickerProps) {
  const [visible, setVisible] = useState(false);
  const [dropBoxTop, setDropBoxTop] = useState<number>(0);
  const [minute, setMinute] = useState('');
  const [hour, setHour] = useState('');
  const timeRef = useRef<View>(null);
  const styles = useStyles(dropBoxTop);
  const timeHours = Array.from({ length: 23 }, (_v, i) => i + 1);
  const timeMinutes = Array.from({ length: 60 }, (_v, i) => i);
  const iconConfig2: IconProps = {
    name: 'access-time',
    size: 24,
    color: styles.iconColor.color,
  };
  const onPressHandler = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    onPressOut(visible, setVisible);
  }, [onPressOut, visible]);

  return (
    <>
      <Pressable
        onLayout={e => setDropBoxTop(e.nativeEvent.layout.height)}
        onPress={onPressHandler}
        ref={timeRef}
      >
        <IconInputBox
          iconConfig={iconConfig2}
          value={`${hour} : ${minute}`}
          condition
          placeholder="유력날짜"
          style={styles.dateBox}
        />
      </Pressable>
      {visible && (
        <View style={[styles.dropdown, { top: dropBoxTop - 2 }]}>
          <TimePickerList arrayItem={timeHours} setItem={setHour} />
          <Font>:</Font>
          <TimePickerList arrayItem={timeMinutes} setItem={setMinute} />
        </View>
      )}
    </>
  );
}

export default TimePicker;
const useStyles = makeStyles((theme, dropBoxTop: number) => ({
  iconColor: {
    color: theme.grayscale['500'],
  },
  fontColor: {
    color: 'black',
  },
  dateBoxContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  dateBox: { justifyContent: 'center' },

  pressed: {
    opacity: 0.7,
  },
  datePressed: {
    opacity: 0.7,

    backgroundColor: theme.grayscale['200'],
  },
  dropdown: {
    position: 'absolute',
    width: '100%',
    zIndex: 4,
    elevation: 5,
    height: (dropBoxTop - 5) * 2.5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownItem: {
    borderTopWidth: 1,
    borderRadius: 4,
    borderColor: theme.grayscale['200'],
    padding: 12,

    alignItems: 'center',
  },
}));
