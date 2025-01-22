import { Mocker } from '@/mocks';

// randomuser.me部分类型
interface RandomUserRecord {
  cell: string;
  dob: {
    age: number;
    date: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    city: string;
    country: string;
    postcode: number;
    state: string;
    street: {
      number: number;
      name: string;
    };
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  login: {
    username: string;
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    age: number;
    date: string;
  };
}

export default function userMock(mocker: Mocker) {
  mocker
    .onGet('/user')
    .reply((config) => {
      const { headers } = config;
      if (!headers?.Authorization) {
        return [401];
      }
      return [
        200,
        {
          data: {
            nickname: 'Shulk Steve',
            username: 'shulk',
            avatar: 'https://i.pravatar.cc/128?img=12',
            email: 'shulk.work@gmail.com',
            roles: 'user',
            permissions: [
              { resource: 'dashboards', actions: ['read', 'write'] },
            ],
          },
        },
      ];
    })
    .onGet('/users')
    .reply((config) => {
      const { params } = config;
      const page = params?.page || 1;
      const pageSize = params?.pageSize || 10;
      return new Promise((resolve) => {
        fetch(
          `https://randomuser.me/api/?page=${page}&results=${pageSize}&noinfo`,
        )
          .then((res) => res.json())
          .then((json) => {
            resolve([
              200,
              {
                data: json.results.map((row: RandomUserRecord) => {
                  return {
                    id: row.login.uuid,
                    nickname: [row.name.first, row.name.last].join(' '),
                    username: row.login.username,
                    email: row.email,
                    gender: row.gender,
                    phone: row.phone,
                    avatar: row.picture.thumbnail,
                  };
                }),
                meta: {
                  page,
                  pageSize,
                  total: 1000,
                },
              },
            ]);
          });
      });
    });
}
