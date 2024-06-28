import { BaseRecord } from '@/apis/types.ts';

export type PostRecord = BaseRecord<{
  title: string;
  description: string;
  cover: string;
}>;
