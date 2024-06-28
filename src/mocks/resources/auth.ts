import { Mocker } from '@/mocks';

export default function authMock(mocker: Mocker) {
  mocker.onPost('/login').reply((config) => {
    const { data } = config;
    const { username, password } = JSON.parse(data);
    if (username !== 'admin') {
      return [
        400,
        {
          msg: 'Invalid username',
        },
      ];
    }
    if (password !== '123456') {
      return [
        400,
        {
          msg: 'Invalid password',
        },
      ];
    }
    return [
      200,
      {
        data: {
          token: 'token',
        },
      },
    ];
  });
}
