import request from "../Utils/request/index";

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