import React from 'react';
import { Card } from '@rneui/themed';

import { PostNavigation } from '@post/navigation/type';
import { useNavigation } from '@react-navigation/native';
import useStyles from './style';
import { IThumbnail } from './type';

export default function Thumbnail({ uri, children, id }: IThumbnail) {
  const { ImageContianer } = useStyles();
  const navigation = useNavigation<PostNavigation<'MeetingPostDetail'>>();

  return (
    <Card.Image
      transition
      style={ImageContianer}
      source={{ uri }}
      onPress={() =>
        navigation.navigate('MeetingPostDetail', {
          screen: 'PostDetail',
          params: { id },
        })
      }
    >
      {children}
    </Card.Image>
  );
}
