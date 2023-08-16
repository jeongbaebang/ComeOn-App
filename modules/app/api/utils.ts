import { AxiosResponse, isAxiosError } from 'axios';
import { ErrorResponse, MaybeErrorCode } from './type';

function getErrorCodeFromAxiosError(error: unknown) {
  if (!isAxiosError(error)) return undefined;

  const {
    data: { errorCode },
  } = error.response as AxiosResponse<ErrorResponse>;

  return errorCode;
}

function isExpiredAccessTokenCode(errorCode: MaybeErrorCode) {
  const EXPIRED_ACCESS_TOKEN_CODE = 4001;
  const INVALID_ACCESS_TOKEN_CODE = 1103;

  return (
    errorCode === EXPIRED_ACCESS_TOKEN_CODE ||
    errorCode === INVALID_ACCESS_TOKEN_CODE
  );
}

export function isExpiredRefreshTokenCode(errorCode: MaybeErrorCode) {
  const EXPIRED_REFRESH_TOKEN_CODE = 4002;

  return errorCode === EXPIRED_REFRESH_TOKEN_CODE;
}

export function checkIfAccessTokenExpired(error: unknown) {
  const EXPIRED = true;
  const NOT_EXPIRED = false;

  if (isExpiredAccessTokenCode(getErrorCodeFromAxiosError(error))) {
    return EXPIRED;
  }

  return NOT_EXPIRED;
}
