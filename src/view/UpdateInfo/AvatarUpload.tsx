import { InboxOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { DraggerProps } from "antd/es/upload";
import Dragger from "antd/es/upload/Dragger";

let onChange: Function | undefined = undefined;

const props: DraggerProps = {
  name: "file",
  action: "http://localhost:3000/user/upload",
  onChange(info) {
    const { status } = info.file;
    if (status === "done") {
      console.log(info.file.response);
      message.success(`${info.file.name} 文件上传成功`);
      onChange?.(info.file.response.data);
    } else if (status === "error") {
      message.error(`${info.file.name} 文件上传失败`);
    }
  },
};

const dragger = (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">点击或拖拽文件到此区域上传文件</p>
  </Dragger>
);

export interface AvatarUploadProps {
  value?: string;
  onChange?: Function;
}

export default function AvatarUpload(props: AvatarUploadProps) {
  onChange = props.onChange;

  return props?.value ? (
    <div>
      <img
        src={"http://localhost:3000/" + props.value}
        alt="头像"
        width="100"
        height="100"
      />
      {dragger}
    </div>
  ) : (
    <div>{dragger}</div>
  );
}
