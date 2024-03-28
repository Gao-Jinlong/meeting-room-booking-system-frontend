import { Outlet } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import "./index.scss";
import { Link } from "react-router-dom";

export function Index() {
  return (
    <div id="index-container">
      <div className="header">
        <Link to={"/login"}>
          <h1>会议室预订系统</h1>
        </Link>

        <Link to={"/update_info"}>
          <UserOutlined className="icon"></UserOutlined>
        </Link>
      </div>
      <div className="body">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
