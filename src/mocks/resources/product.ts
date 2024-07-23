import { Mocker } from '@/mocks';
import { ProductRecord } from '@/pages/grid/card/types';
import { sampleSize } from 'lodash';

const products: ProductRecord[] = [
  {
    id: 1,
    price: 1234,
    title: 'Black crew neck',
    description: 'How to serve coffee at the office the proper way',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/black-crew-model.png?v=1714573691&width=360',
  },
  {
    id: 2,
    price: 1234,
    title: 'Cloud grey t-shirt',
    description: 'Teamwork can dramatically increase productivity',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/grey-t-model.png?v=1714573236&width=360',
  },
  {
    id: 3,
    price: 1234,
    title: 'Black hoodie',
    description: 'Is team building a scam or the next thing?',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/black-hoodie-model_d29128fd-1e22-4079-8ae9-d921e75a2fe2.png?v=1714571066&width=360',
  },
  {
    id: 4,
    price: 1234,
    title: 'Brown t-shirt',
    description: '3 things you should know when applying for developer jobs',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/brown-t-model.jpg?v=1715008019&width=360',
  },
  {
    id: 5,
    price: 1234,
    title: 'Cream t-shirt',
    description: 'The construction business massively invests in mobile apps',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/cream-t-model.png?v=1714571805&width=360',
  },
  {
    id: 6,
    price: 1234,
    title: 'Grey crew neck',
    description: 'Finding the right spot for your startup',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/heathergrey-crew-model.png?v=1714573274&width=360',
  },
  {
    id: 7,
    price: 1234,
    title: 'Grey t-shirt',
    description: '4 tips to make your business lunches awesome',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/grey-t-model_16e3422a-ec00-4a57-865b-e428725d7fa0.png?v=1714573291&width=360',
  },
  {
    id: 8,
    price: 1234,
    title: 'Moss t-shirt',
    description: 'Setting up a design system for your app project',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/moss-t-model.png?v=1714573311&width=360',
  },
  {
    id: 9,
    price: 1234,
    title: 'Off white crew neck',
    description: 'Setting up a design system for your app project',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/offwhite-crew-model.png?v=1714573349&width=360',
  },
  {
    id: 10,
    price: 1234,
    title: 'Olive hoodie',
    description: 'Have you considered product management training?',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/olive-hoodie-model.png?v=1714573371&width=360',
  },
  {
    id: 11,
    price: 1234,
    title: 'Seafoam hoodie',
    description: 'Using flashy colors in your websites and apps',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/seafoam-hoodie-model.png?v=1714574604&width=360',
  },
  {
    id: 12,
    price: 1234,
    title: 'Seaweed crew neck',
    description: 'Why it pays to profile your customers',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/green-crew-model.png?v=1714574643&width=360',
  },
  {
    id: 13,
    price: 1234,
    title: 'Slate t-shirt',
    description: 'Why it pays to profile your customers',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/slate-t-model.png?v=1714574660&width=360',
  },
  {
    id: 14,
    price: 1234,
    title: 'Tan hoodie',
    description: 'Why it pays to profile your customers',
    cover:
      'https://theme-rise-demo.myshopify.com/cdn/shop/files/tan-hoodie-model.png?v=1714574723&width=360',
  },
];

export default function productMock(mocker: Mocker) {
  mocker.onGet('/products').reply((config) => {
    const { params } = config;
    const page = params.page || 1;
    const size = params?.pageSize || 10;
    const pages = Math.ceil(products.length / size);
    return [
      200,
      {
        data: sampleSize(products, size),
        meta: {
          page: page,
          pageSize: size,
          total: 1000, // 构造分页
          pageCount: pages,
        },
      },
    ];
  });
}
