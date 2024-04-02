import { Button } from "antd";

export interface AvatarUploadProps {
  value?: string;
  onChange?: Function;
}

export default function AvatarUpload(props: AvatarUploadProps) {
  return props?.value ? (
    <div>
      <img
        src={"http://localhost:3000/" + props.value}
        alt="头像"
        width="100"
        height="100"
      />
      <Button>上传</Button>
    </div>
  ) : (
    <div>
      <Button>上传</Button>
    </div>
  );
}
