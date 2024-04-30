import { IconType } from "react-icons";
import { IoMdText } from "react-icons/io";
import { SiTypescript, SiCss3, SiHtml5, SiJavascript } from "react-icons/si";

type Icon = {
  icon: IconType;
  color: string;
};

function getFileIconAndColor(extension: string) {
  const iconMappings: Record<string, Icon> = {
    html: { icon: SiHtml5, color: "#E44D26" },
    css: { icon: SiCss3, color: "#42A5F5" },
    js: { icon: SiJavascript, color: "yellow" },
    ts: { icon: SiTypescript, color: "#007acc" },
    txt: { icon: IoMdText, color: "gray" },
  };

  // Convert extension to lowercase for case-insensitive matching
  const ext = extension.toLowerCase();

  // Return icon and color if extension exists in mappings, otherwise return default icon and color
  return iconMappings[ext] || iconMappings["txt"]; // Default to text icon if extension not found
}
export default getFileIconAndColor;
