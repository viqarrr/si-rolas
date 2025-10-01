import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface QuillWrapperProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const QuillWrapper: React.FC<QuillWrapperProps> = ({ 
  value, 
  onChange, 
  placeholder = "Enter content...",
  className = ""
}) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'link', 'image'
  ];

  return (
    <div className={`quill-wrapper ${className}`}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  );
};

export default QuillWrapper;