import request from "../Utils/request/index";
import { RegisterDto } from "./interface.d";
export * from "./interface.d";

export function login(username: string, password: string) {
  return request.post("/user/login", {
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
