import { Outlet } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

export function Index() {
  return (
    <div id="index-container">
      <div className="header">
        <h1>会议室预订系统</h1>
        <UserOutlined className="icon"></UserOutlined>
      </div>
      <div className="body">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
