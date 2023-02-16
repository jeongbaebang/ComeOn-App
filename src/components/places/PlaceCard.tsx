import { makeStyles } from '@rneui/themed';

import React from 'react';
import { View, Pressable } from 'react-native';
import { PlaceProps } from '../../types';
import PlaceCardBody from './PlaceCardBody';
import PlaceNumber from './PlaceNumber';

function PlaceCard({ data }: PlaceProps) {
  const styles = useStyles();

  return (
    <>
      {data.map(item => {
        return (
          <Pressable
            key={item.id}
            style={({ pressed }) => [pressed && styles.pressed]}
          >
            <View style={styles.wrapContainer}>
              <PlaceNumber>{item.order}</PlaceNumber>
              <PlaceCardBody data={item} />
            </View>
          </Pressable>
        );
      })}
    </>
  );
}

export default PlaceCard;

const useStyles = makeStyles(() => ({
  wrapContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  pressed: {
    opacity: 0.7,
  },
}));