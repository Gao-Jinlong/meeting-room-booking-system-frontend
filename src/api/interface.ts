import request, { ResponseWrapper } from "../Utils/request/index";
import { UpdatePassword } from "../view/UpdatePassword";
import { RegisterDto, UpdateUserInfoDto, UserJwtDto } from "./interface.d";
export * from "./interface.d";

export function login(username: string, password: string) {
  return request.post<ResponseWrapper<UserJwtDto>>("/user/login", {
    username,
    password,
  });
}

export function registerCaptcha(address: string) {
  return request.get("/user/register-captcha", {
    params: { address },
  });
}

export function register(data: RegisterDto) {
  return request.post("/user/register", data);
}

export function updatePasswordCaptcha(address: string) {
  return request.get(`/user/update_password/captcha`, { params: { address } });
}

export function updatePassword(data: UpdatePassword) {
  return request.post("/user/update_password", data);
}

export async function getUserInfo() {
  return await request.get("/user/info");
}

export async function updateInfo(data: UpdateUserInfoDto) {
  return await request.post("/user/update", data);
}

export async function updateUserInfoCaptcha() {
  return await request.get("/user/update/captcha");
}
