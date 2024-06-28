export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResult {
  token: string;
  // token_type: string; // jwt default `Bearer`
  // user: UserRecord; // use getProfile()
}

export interface RegisterData {
  username: string;
  password: string;
  // crm_password: string;
}
