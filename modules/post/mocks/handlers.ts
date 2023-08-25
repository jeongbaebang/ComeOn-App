import { rest } from 'msw';

import mockMeetingsSliceResponse, {
  EmptyResponse,
} from './getMeetingsSliceResponse';
import { GetMeetingResponse } from '@post/api/v2/type';
import { GetEntryCodeResponse } from '@post/api/v1/type';
import { BASE_URL } from '@app/api/config';
import mockMembers from './members';
import mockMeetingDetailResponse from './getMeetingDetailResponse';

const requstGetMeetings = rest.get<GetMeetingResponse>(
  `${BASE_URL}/api/v2/meetings`,
  (req, res, ctx) => {
    if (req.url.searchParams.get('dateFrom'))
      return res(ctx.delay(3000), ctx.json(EmptyResponse));

    return res(ctx.json(mockMeetingsSliceResponse));
  }
);

const requestGetEntryCode = rest.get<GetEntryCodeResponse>(
  `${BASE_URL}/api/v1/meetings/:meetingId/entry-code`,
  (req, res, ctx) => {
    const { meetingId } = req.params;

    // 서버에러 상태
    if (meetingId === '500') {
      return res(
        ctx.status(500),
        ctx.json({
          errorCode: 1000,
          errorDescription: '서버 내부 오류입니다. 오류 문의 부탁드립니다.',
          errors: null,
        })
      );
    }

    // 코드만료 상태
    if (meetingId === '600') {
      return res(
        ctx.json({
          meetingId: meetingId,
          entryCode: 'AP3DTD',
          expiredAt: '2020-08-30 23:11:30',
        })
      );
    }

    return res(
      ctx.json({
        meetingId: meetingId,
        entryCode: 'DJE52P',
        expiredAt: '2035-08-30 23:11:30',
      })
    );
  }
);

const requestPostEntryCode = rest.post(
  `${BASE_URL}/api/v1/meetings/:meetingId/entry-code`,
  (_req, res, ctx) => {
    return res(
      ctx.json({
        meetingId: 'AP11LE',
        entryCode: 'DJE52P',
        expiredAt: '2035-08-30 23:11:30',
      })
    );
  }
);

const requestCreateMeetings = rest.post(
  `${BASE_URL}/api/v1/meetings`,
  (_req, res, ctx) => {
    return res(
      ctx.delay(3000),
      ctx.json({
        meetingId: 28,
      })
    );
  }
);

const requestUploadImage = rest.post(
  `${BASE_URL}/api/v1/image`,
  (_req, res, ctx) => {
    return res(
      ctx.json({
        imageUrl: 'https://picsum.photos/200/300',
      })
    );
  }
);

const requestDeleteMeeting = rest.delete(
  `${BASE_URL}/api/v1/meetings/:meetingId/members/me`,

  (_req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
      })
    );
  }
);

const requestGetMeetingDetail = rest.get(
  `${BASE_URL}/api/v2/meetings/:meetingId`,
  (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.json({
        ...mockMeetingDetailResponse,
        meetingMetaData: {
          ...mockMeetingDetailResponse.meetingMetaData,
          meetingId: req.params.meetingId,
          meetingName: '예시 모임 제목#1',
          calendar: {
            startFrom: '2023-07-01',
            endTo: '2023-07-31',
          },
          fixedDate: null,
        },
      })
    );
  }
);

const requestPatchMeetings = rest.patch(
  `${BASE_URL}/api/v1/meetings/:meetingId`,
  (_req, res, ctx) => {
    return res(ctx.delay(3000), ctx.json({ success: true }));
  }
);

const requestPostReportMeeting = rest.post(
  `${BASE_URL}/api/v1/report/meeting`,
  (_req, res, ctx) => {
    return res(ctx.delay(3000), ctx.json({ reportId: 33 }));
  }
);

const requestGetMeetingMembers = rest.get(
  `${BASE_URL}/api/v2/meetings/:meetingId/members`,
  (req, res, ctx) => {
    const { meetingId } = req.params;

    if (meetingId === '0') {
      return res(ctx.json(mockMembers));
    }

    if (meetingId === '600') {
      return res(ctx.delay('infinite'), ctx.json(mockMembers));
    }

    return res(ctx.delay(3000), ctx.json(mockMembers));
  }
);

export default [
  requestGetMeetingMembers,
  requstGetMeetings,
  requestGetEntryCode,
  requestPostEntryCode,
  requestCreateMeetings,
  requestUploadImage,
  requestDeleteMeeting,
  requestGetMeetingDetail,
  requestPatchMeetings,
  requestPostReportMeeting,
];
