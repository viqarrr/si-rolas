<?php

namespace App\Enums;

enum InquiryStatus: string
{
    case NEW = 'new';
    case READ = 'read';
    case ARCHIVED = 'archived';

    public function label(): string
    {
        return match($this) {
            self::NEW => 'New',
            self::READ => 'Read',
            self::ARCHIVED => 'Archived',
        };
    }

    public function color(): string
    {
        return match($this) {
            self::NEW => 'bg-blue-100 text-blue-800',
            self::READ => 'bg-green-100 text-green-800',
            self::ARCHIVED => 'bg-gray-100 text-gray-800',
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