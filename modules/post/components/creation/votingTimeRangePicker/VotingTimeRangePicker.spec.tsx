import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';

import { wrapper } from '@shared/components/ThemeProvider';
import VotingTimeRangePicker from './VotingTimeRangePicker';

describe('VotingTimeRangePicker Compoent', () => {
  test('타이틀과 투표 버튼 컴포넌트가 올바르게 렌더링 되어야 한다.', () => {
    render(<VotingTimeRangePicker />, wrapper);

    expect(screen.getByText('투표 기간')).toBeOnTheScreen();
    expect(screen.getByText('날짜 범위를 선택해 주세요')).toBeOnTheScreen();
  });
});