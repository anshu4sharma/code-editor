import React, { memo } from "react";
import getFileIconAndColor from "../utils/getFileIcon";

type Props = { extension: string; size?: number };

const AddIcons = ({ extension, size }: Props) => {
  let file_extension = extension.split(".").pop() || "";
  const { color, icon } = getFileIconAndColor(file_extension);

  return React.createElement(icon, { size: size || 22, color });
};

export default memo(AddIcons);
