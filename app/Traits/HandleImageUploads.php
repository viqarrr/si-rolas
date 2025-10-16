<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

trait HandleImageUploads
{
  /**
   * Upload image to MinIO and return the path
   */
  protected function uploadImage(UploadedFile $file, string $directory = 'images'): string
  {
    $filename = $this->generateUniqueFilename($file);
    $path = "{$directory}/{$filename}";

    Storage::disk('s3')->put($path, file_get_contents($file), 'public');

    return $path;
  }

  /**
   * Get public URL for MinIO stored image
   */
  protected function getImageUrl(?string $path): ?string
  {
    if (!$path) {
      return null;
    }

    return Storage::disk('s3')->url($path);
  }

  /**
   * Delete image from MinIO
   */
  protected function deleteImage(?string $path): bool
  {
    if (!$path) {
      return true;
    }

    return Storage::disk('s3')->delete($path);
  }

  /**
   * Generate unique filename
   */
  private function generateUniqueFilename(UploadedFile $file): string
  {
    $extension = $file->getClientOriginalExtension();
    $filename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
    $sanitized = Str::slug($filename);

    return $sanitized . '_' . time() . '_' . Str::random(8) . '.' . $extension;
  }

  /**
   * Validate image file
   */
  protected function validateImage(UploadedFile $file): bool
  {
    $allowedMimes = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    $maxSize = 5 * 1024 * 1024; // 5MB

    return in_array($file->getClientOriginalExtension(), $allowedMimes)
      && $file->getSize() <= $maxSize
      && $file->isValid();
  }
}