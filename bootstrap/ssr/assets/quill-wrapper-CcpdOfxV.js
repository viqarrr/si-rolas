import { jsx } from "react/jsx-runtime";
import ReactQuill from "react-quill";
const QuillWrapper = ({
  value,
  onChange,
  placeholder = "Enter content...",
  className = ""
}) => {
  const modules = {
    toolbar: [
      [{ "header": [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ "list": "ordered" }, { "list": "bullet" }],
      ["link", "image"],
      ["clean"]
    ]
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image"
  ];
  return /* @__PURE__ */ jsx("div", { className: `quill-wrapper ${className}`, children: /* @__PURE__ */ jsx(
    ReactQuill,
    {
      theme: "snow",
      value,
      onChange,
      modules,
      formats,
      placeholder
    }
  ) });
};
export {
  QuillWrapper as Q
};
