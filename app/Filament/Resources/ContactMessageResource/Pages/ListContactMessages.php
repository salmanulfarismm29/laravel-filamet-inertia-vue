<?php

declare(strict_types=1);

namespace App\Filament\Resources\ContactMessageResource\Pages;

use App\Filament\Resources\ContactMessageResource;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;
use Illuminate\Database\Eloquent\Builder;

class ListContactMessages extends ListRecords
{
    protected static string $resource = ContactMessageResource::class;

    /**
     * Tabs filter the table to Unread / Read / All without needing
     * the user to open the filter panel each time.
     */
    public function getTabs(): array
    {
        return [
            'unread' => Tab::make('Unread')
                ->modifyQueryUsing(fn (Builder $query) => $query->where('status', 'unread'))
                ->badge(\App\Models\ContactMessage::unread()->count())
                ->badgeColor('warning'),

            'read' => Tab::make('Read')
                ->modifyQueryUsing(fn (Builder $query) => $query->where('status', 'read')),

            'all' => Tab::make('All'),
        ];
    }

    public function getDefaultActiveTab(): string|int|null
    {
        return 'unread';
    }

    // No create button — messages come from the public form only
    protected function getHeaderActions(): array
    {
        return [];
    }
}
