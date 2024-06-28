export interface PermissionRecord {
  resource: string | RegExp;
  actions?: Array<'read' | 'write'>;
}
