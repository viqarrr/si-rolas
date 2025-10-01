<?php

namespace App\Enums;

enum WorkLinkPlatform: string
{
    case YOUTUBE = 'youtube';
    case TIKTOK = 'tiktok';
    case INSTAGRAM = 'instagram';
    case OTHER = 'other';

    public function label(): string
    {
        return match($this) {
            self::YOUTUBE => 'YouTube',
            self::TIKTOK => 'TikTok',
            self::INSTAGRAM => 'Instagram',
            self::OTHER => 'Other',
        };
    }

    public function color(): string
    {
        return match($this) {
            self::YOUTUBE => 'bg-red-100 text-red-800',
            self::TIKTOK => 'bg-black text-white',
            self::INSTAGRAM => 'bg-purple-100 text-purple-800',
            self::OTHER => 'bg-gray-100 text-gray-800',
        };
    }

    public static function options(): array
    {
        return array_map(fn($case) => [
            'value' => $case->value,
            'label' => $case->label()
        ], self::cases());
    }
}