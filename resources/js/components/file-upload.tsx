import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploadInertiaProps {
  value?: File | File[] | string | string[] | null;
  onChange: (files: File | File[] | null) => void;
  multiple?: boolean;
  accept?: string;
  maxSize?: number;
  className?: string;
  placeholder?: string;
  previewUrl?: string | null; // <--- Tambahan penting
}

const FileUploadInertia: React.FC<FileUploadInertiaProps> = ({
  value,
  onChange,
  multiple = false,
  accept = 'image/*',
  maxSize = 5 * 1024 * 1024, // 5MB
  className = '',
  placeholder = 'Drag & drop files here, or click to select',
  previewUrl = null, // default null
}) => {
  const [previews, setPreviews] = useState<string[]>([]);

  /** 🧠 Handle file drop */
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (multiple) {
        onChange(acceptedFiles);
        setPreviews(acceptedFiles.map((file) => URL.createObjectURL(file)));
      } else {
        const file = acceptedFiles[0];
        if (file) {
          onChange(file);
          setPreviews([URL.createObjectURL(file)]);
        }
      }
    },
    [multiple, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { [accept]: [] },
    multiple,
    maxSize,
  });

  /** 🧩 Gunakan preview dari backend (edit mode) */
  useEffect(() => {
    if (!value && previewUrl) {
      setPreviews([previewUrl]);
    } else if (!value && !previewUrl) {
      setPreviews([]);
    }
  }, [value, previewUrl]);

  const removeFile = (index: number) => {
    if (multiple && Array.isArray(value)) {
      const newFiles = (value as File[]).filter((_, i) => i !== index);
      onChange(newFiles.length > 0 ? newFiles : null);
      setPreviews(previews.filter((_, i) => i !== index));
    } else {
      onChange(null);
      setPreviews([]);
    }
  };

  const getPreviewUrl = (file: File | string): string => {
    if (typeof file === 'string') return file;
    return URL.createObjectURL(file);
  };

  const displayFiles = React.useMemo(() => {
    if (Array.isArray(value)) return value;
    if (value) return [value];
    // kalau belum upload tapi ada previewUrl, pakai itu
    if (!value && previewUrl) return [previewUrl];
    return [];
  }, [value, previewUrl]);

  return (
    <div className={`space-y-4 ${className}`}>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-blue-400 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
        <p className="text-sm text-gray-600 mb-1">{placeholder}</p>
        <p className="text-xs text-gray-400">
          {multiple ? 'Multiple files allowed' : 'Single file only'} • Max{' '}
          {Math.round(maxSize / 1024 / 1024)}MB
        </p>
      </div>

      {displayFiles.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayFiles.map((file, index) => (
            <div key={index} className="relative group">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                {typeof file === 'string' || file instanceof File ? (
                  <img
                    src={getPreviewUrl(file)}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileImage className="h-8 w-8 text-gray-400" />
                  </div>
                )}
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeFile(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploadInertia;
