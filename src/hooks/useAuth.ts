import { AuthResponse } from '@type/index';
import { useCallback } from 'react';
import { setTokensToDB } from '@api/token/token';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { login, logout, setToken } from '../features/authSlice';
import { getValueFor } from '../utils/secureStore';

export const tokenDataisValid = async () => {
  const accessTkn = await getTokenData(StoreKey.accessToken);
  const refreshTkn = await getTokenData(StoreKey.refreshToken);

  if (accessTkn !== null && refreshTkn !== null) {
    const data = { accessToken: accessTkn, refreshToken: refreshTkn };

    return data;
  }

  return false;
};

enum StoreKey {
  refreshToken = 'refreshToken',
  accessToken = 'accessToken',
}

const getTokenData = async (name: 'accessToken' | 'refreshToken') => {
  const tokenData = await getValueFor(name);

  if (tokenData) return JSON.parse(tokenData);

  return null;
};

function useAuth() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.auth.haveToken);
  const accessToken = useAppSelector(state => state.auth.accessToken);
  const refreshToken = useAppSelector(state => state.auth.refreshToken);
  const myId = useAppSelector(state => state.auth.userId);
  const getAccessToken = useCallback(() => {
    return accessToken;
  }, [accessToken]);
  const getRefreshToken = useCallback(() => {
    return refreshToken;
  }, [refreshToken]);
  const setLogout = useCallback(async () => {
    dispatch(logout());
  }, [dispatch]);
  const setLogin = useCallback(
    async (token: AuthResponse) => {
      dispatch(login(token));
    },
    [dispatch],
  );
  const setTokens = async (token: AuthResponse | null) => {
    if (token) {
      await setTokensToDB(token);
      dispatch(setToken(token));
    }
  };

  return {
    isAuth,
    setLogout,
    setTokens,
    getAccessToken,
    getRefreshToken,
    setLogin,
    myId,
  };
}

export default useAuth;
