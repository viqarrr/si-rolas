<?php

namespace App\Enums;

enum ContactType: string
{
    case EMAIL = 'email';
    case PHONE = 'phone';
    case WHATSAPP = 'whatsapp';
    case YOUTUBE = 'youtube';
    case INSTAGRAM = 'instagram';
    case ADDRESS = 'address';

    public function label(): string
    {
        return match($this) {
            self::EMAIL => 'Email',
            self::PHONE => 'Phone',
            self::WHATSAPP => 'WhatsApp',
            self::YOUTUBE => 'YouTube',
            self::INSTAGRAM => 'Instagram',
            self::ADDRESS => 'Address',
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