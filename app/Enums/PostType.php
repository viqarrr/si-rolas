<?php

namespace App\Enums;

enum PostType: string
{
    case NEWS = 'news';
    case ANNOUNCEMENT = 'announcement';
    case ACHIEVEMENT = 'achievement';

    public function label(): string
    {
        return match($this) {
            self::NEWS => 'News',
            self::ANNOUNCEMENT => 'Announcement',
            self::ACHIEVEMENT => 'Achievement',
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
