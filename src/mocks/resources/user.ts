import { Mocker } from '@/mocks';

export default function userMock(mocker: Mocker) {
  mocker.onGet('/user').reply((config) => {
    const { headers } = config;
    if (!headers?.Authorization) {
      return [401];
    }
    return [
      200,
      {
        data: {
          name: 'Shulk Steve',
          avatar: 'https://api.shulk.space/uploads/03_079775e077.png',
          email: 'shulk.work@gmail.com',
          roles: 'user',
          permissions: [{ resource: 'dashboards', actions: ['read', 'write'] }],
        },
      },
    ];
  });
}
