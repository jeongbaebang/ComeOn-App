import { View } from 'react-native';
import React from 'react';

import { relativeSizeConverter } from '@shared/utils';

/**
 * 특정 간격을 유지시키는 추상화 컴포넌트
 */
export default function Spacer({
  height,
  applyRelative,
}: {
  height: number;
  applyRelative?: boolean;
}) {
  return (
    <View
      style={{
        height: applyRelative ? relativeSizeConverter(height) : height,
      }}
    />
  );
}
