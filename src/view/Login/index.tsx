import { DatePicker, Form, Input, Button, message } from "antd";
import "./index.scss";
import { login } from "../../api/interface";
import { AxiosError, HttpStatusCode } from "axios";

interface LoginUser {
  username: string;
  password: string;
}

const onFinish = async (value: LoginUser) => {
  try {
    const res = await login(value.username, value.password);

    if (
      res.status === HttpStatusCode.Ok ||
      res.status === HttpStatusCode.Created
    ) {
      console.log("登录成功", res.data.data);

      storeUserToken(res.data.data);

      message.success("登录成功");
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      message.error(error.response?.data.data || "登录失败");
    } else if (error instanceof Error) {
      message.error(error.message || "登录失败");
    }
    console.error(error);
  }
};
function storeUserToken(data: any) {
  localStorage.setItem("user", JSON.stringify(data));
}
const layout1 = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const layout2 = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

export function Login() {
  return (
    <div id="login-container">
      <h1>会议室预订系统</h1>
      <Form {...layout1} onFinish={onFinish} colon={false} autoComplete="off">
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名！" }]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码！" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...layout2}>
          <div className="links">
            <a href="">创建账号</a>
            <a href="">忘记密码</a>
          </div>
        </Form.Item>

        <Form.Item {...layout2}>
          <Button className="btn" type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
