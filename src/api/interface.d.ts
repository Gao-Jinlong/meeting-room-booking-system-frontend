export interface RegisterDto {
  captcha: string;
  email: string;
  nickName: string;
  password: string;
  username: string;
}
export interface UserJwtDto {
  accessToken: string;
  refreshToken: string;
  userInfo: UserInfoDto;
}
export interface UserInfoDto {
  createTime: string;
  email: string;
  id: number;
  isAdmin: boolean;
  isFrozen: boolean;
  nickName: string;
  permissions: Permission[];
  phoneNumber: null;
  roles: string[];
  username: string;
}

export interface UpdateUserInfoDto {
  nickName: string;
  avatar: string;
  email: string;
  captcha: string;
}
