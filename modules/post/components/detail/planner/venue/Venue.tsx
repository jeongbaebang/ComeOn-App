import { View } from 'react-native';
import React from 'react';

import TestId from '@shared/constants/testIds';
import Order from './order/Order';
import NoteCard from './noteCard/NoteCard';
import { Ivenue } from './type';
import useStyles from './style';

export default function Venue({ order, info }: Ivenue) {
  const { container, cNoteCard, cOrder } = useStyles();

  return (
    <View style={container} testID={TestId.post.venue}>
      <View style={cOrder}>
        <Order order={order} />
      </View>
      <View style={cNoteCard}>
        <NoteCard info={info} />
      </View>
    </View>
  );
}