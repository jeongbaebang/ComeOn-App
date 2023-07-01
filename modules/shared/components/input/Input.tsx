import React from 'react';
import { Input as RnInput } from '@rneui/themed';
import useStyles from './style';

import { Iinput } from './type';

export default function Input({
  text,
  placeholder,
  onChangeText,
  label,
  maxLength,
  rightIcon,
}: Iinput) {
  const { outerContainer, inputContainer, placeholderText, font } = useStyles();

  return (
    <RnInput
      maxLength={maxLength}
      label={label}
      rightIcon={rightIcon}
      value={text}
      placeholder={placeholder}
      containerStyle={outerContainer}
      inputContainerStyle={inputContainer}
      placeholderTextColor={placeholderText.color}
      inputStyle={font}
      onChangeText={onChangeText}
    />
  );
}
