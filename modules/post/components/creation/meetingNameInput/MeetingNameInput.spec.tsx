import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';

import { wrapper } from '@shared/components/ThemeProvider';
import MeetingNameInput from './MeetingNameInput';

describe('MeetingNameInput Compoent', () => {
  test('타이틀과 모임입력 컴포넌트가 올바르게 렌더링 되어야 한다.', () => {
    render(<MeetingNameInput />, wrapper);

    expect(screen.getByText('모임 이름')).toBeOnTheScreen();
    expect(screen.getByText('0/30')).toBeOnTheScreen();
    expect(
      screen.getByPlaceholderText('모임 이름을 입력해 주세요!'),
    ).toBeOnTheScreen();
  });
});
