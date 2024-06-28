import { Mocker } from '@/mocks';
import { PostRecord } from '@/pages/layouts/grid/posts/types';
import { sampleSize } from 'lodash';

const posts: PostRecord[] = [
  {
    id: 1,
    title: 'How to serve coffee at the office the proper way',
    description: 'How to serve coffee at the office the proper way',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-1.svg',
  },
  {
    id: 2,
    title: 'Teamwork can dramatically increase productivity',
    description: 'Teamwork can dramatically increase productivity',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-2.svg',
  },
  {
    id: 3,
    title: 'Is team building a scam or the next thing?',
    description: 'Is team building a scam or the next thing?',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-3.svg',
  },
  {
    id: 4,
    title: '3 things you should know when applying for developer jobs',
    description: '3 things you should know when applying for developer jobs',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-4.svg',
  },
  {
    id: 5,
    title: 'The construction business massively invests in mobile apps',
    description: 'The construction business massively invests in mobile apps',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-5.svg',
  },
  {
    id: 6,
    title: 'Finding the right spot for your startup',
    description: 'Finding the right spot for your startup',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-6.svg',
  },
  {
    id: 7,
    title: '4 tips to make your business lunches awesome',
    description: '4 tips to make your business lunches awesome',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-7.svg',
  },
  {
    id: 8,
    title: 'Setting up a design system for your app project',
    description: 'Setting up a design system for your app project',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-8.svg',
  },
  {
    id: 9,
    title: 'Setting up a design system for your app project',
    description: 'Setting up a design system for your app project',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-9.svg',
  },
  {
    id: 10,
    title: 'Have you considered product management training?',
    description: 'Have you considered product management training?',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-10.svg',
  },
  {
    id: 11,
    title: 'Using flashy colors in your websites and apps',
    description: 'Using flashy colors in your websites and apps',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-11.svg',
  },
  {
    id: 12,
    title: 'Why it pays to profile your customers',
    description: 'Why it pays to profile your customers',
    cover: 'https://tairo.cssninja.io/img/illustrations/layouts/post-12.svg',
  },
];

export default function postMock(mocker: Mocker) {
  mocker.onGet('/posts').reply((config) => {
    const { params } = config;
    const page = params.page || 1;
    const size = params?.pageSize || 10;
    const pages = Math.ceil(posts.length / size);
    return [
      200,
      {
        data: sampleSize(posts, size),
        meta: {
          page: page,
          pageSize: size,
          total: posts.length,
          pageCount: pages,
        },
      },
    ];
  });
}
