import { View } from 'react-native';
import React from 'react';

import { formatDateRange } from '@shared/utils/utils';
import Font from '@shared/components/font/Font';
import { Ischedule } from './type';
import useStyles from './style';

function getMessageBasedOnFixedDate(isFixed: boolean) {
  const NOT_FIXED = '참석 가능 날짜에 투표해 보세요!';
  const FIXED = '날짜가 확정되었습니다!';

  return isFixed ? FIXED : NOT_FIXED;
}

export default function Schedule({ range, isFixed }: Ischedule) {
  const formattedDateRangeKo = formatDateRange(range, 'ko');
  const messageBasedOnFixedDate = getMessageBasedOnFixedDate(isFixed);
  const { container, cFont, descriptionFont, divider, rangeFont } =
    useStyles(isFixed);

  return (
    <View style={container}>
      <View style={divider} />
      <View style={cFont}>
        <Font style={rangeFont}>{formattedDateRangeKo}</Font>
        <Font style={descriptionFont}>{messageBasedOnFixedDate}</Font>
      </View>
    </View>
  );
}
