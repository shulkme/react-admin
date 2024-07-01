import type { PermissionRecord } from '@/apis/permission/types';
import type { BaseRecord } from '@/apis/types';

/**
 * 用户权限问题，简单可以使用role，复杂一点可以使用permissions，或者根据需要混合使用，两则都是非必需的
 * roles: 常用于角色区分，例如：administrator | author | subscriber
 * permissions: 可以实现资源细化控制，例如：{resource: 'dashboard', actions: ['read', 'write']}
 */

export type UserRecord = BaseRecord<{
  email: string;
  avatar: string;
  username: string;
  nickname: string;
  gender?: string;
  phone?: string;
  roles?: string | string[];
  permissions?: PermissionRecord[];
}>;
