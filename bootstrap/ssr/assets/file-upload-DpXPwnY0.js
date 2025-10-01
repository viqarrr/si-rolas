import { jsxs, jsx } from "react/jsx-runtime";
import React__default, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileImage, X } from "lucide-react";
import { B as Button } from "./app-logo-icon-Ob1cKZaq.js";
const FileUploadInertia = ({
  value,
  onChange,
  multiple = false,
  accept = "image/*",
  maxSize = 5 * 1024 * 1024,
  // 5MB
  className = "",
  placeholder = "Drag & drop files here, or click to select"
}) => {
  const [previews, setPreviews] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    if (multiple) {
      onChange(acceptedFiles);
      const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file));
      setPreviews(newPreviews);
    } else {
      const file = acceptedFiles[0];
      if (file) {
        onChange(file);
        setPreviews([URL.createObjectURL(file)]);
      }
    }
  }, [multiple, onChange]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { [accept]: [] },
    multiple,
    maxSize
  });
  const removeFile = (index) => {
    if (multiple && Array.isArray(value)) {
      const newFiles = value.filter((_, i) => i !== index);
      onChange(newFiles.length > 0 ? newFiles : null);
      const newPreviews = previews.filter((_, i) => i !== index);
      setPreviews(newPreviews);
    } else {
      onChange(null);
      setPreviews([]);
    }
  };
  const getPreviewUrl = (file) => {
    if (typeof file === "string") return file;
    return URL.createObjectURL(file);
  };
  const displayFiles = React__default.useMemo(() => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return [value];
  }, [value]);
  return /* @__PURE__ */ jsxs("div", { className: `space-y-4 ${className}`, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ...getRootProps(),
        className: `border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`,
        children: [
          /* @__PURE__ */ jsx("input", { ...getInputProps() }),
          /* @__PURE__ */ jsx(Upload, { className: "mx-auto h-8 w-8 text-gray-400 mb-2" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-1", children: placeholder }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-400", children: [
            multiple ? "Multiple files allowed" : "Single file only",
            " • Max ",
            Math.round(maxSize / 1024 / 1024),
            "MB"
          ] })
        ]
      }
    ),
    displayFiles.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: displayFiles.map((file, index) => /* @__PURE__ */ jsx("div", { className: "relative group", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-square bg-gray-100 rounded-lg overflow-hidden", children: [
      typeof file === "string" || file instanceof File ? /* @__PURE__ */ jsx(
        "img",
        {
          src: getPreviewUrl(file),
          alt: `Preview ${index + 1}`,
          className: "w-full h-full object-cover"
        }
      ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsx(FileImage, { className: "h-8 w-8 text-gray-400" }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "destructive",
          size: "sm",
          className: "absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity",
          onClick: () => removeFile(index),
          children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
        }
      )
    ] }) }, index)) })
  ] });
};
export {
  FileUploadInertia as F
};
