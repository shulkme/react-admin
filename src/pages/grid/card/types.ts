import { BaseRecord } from '@/apis/types.ts';

export type ProductRecord = BaseRecord<{
  title: string;
  description: string;
  cover: string;
  price: number;
}>;
