import { AuthState } from '@account/features/auth/type';
import { isExpiry } from '@shared/utils';

export const mockUserAuthToken = {
  accessToken: {
    token: 'newAccessToken',
    expiry: 4121747756000,
    userId: 123,
  },
  refreshToken: {
    token: 'newRefreshToken',
    expiry: 4121747756000,
  },
};

export const mockExpiredUserAuthToken = {
  accessToken: {
    token: 'expiredAccessToken',
    expiry: 412174775,
    userId: 123,
  },
  refreshToken: {
    token: 'expiredRefreshToken',
    expiry: 412174775,
  },
};

export const mockUserAuthState = {
  isLogin: mockUserAuthToken,
  isLoading: {
    apple: false,
    google: false,
  },
  isReissue: false,
  isError: false,
} as AuthState;
