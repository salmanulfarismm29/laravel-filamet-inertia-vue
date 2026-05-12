<?php

declare(strict_types=1);

namespace App\Filament\Resources\ContactMessageResource\Pages;

use App\Filament\Resources\ContactMessageResource;
use App\Models\ContactMessage;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewContactMessage extends ViewRecord
{
    protected static string $resource = ContactMessageResource::class;

    /**
     * When admin opens a message, auto-mark it as read.
     * This removes the friction of manually clicking "Mark as Read"
     * every time — viewing is implicit acknowledgement.
     */
    protected function afterFill(): void
    {
        /** @var ContactMessage $record */
        $record = $this->record;

        if ($record->status === ContactMessage::STATUS_UNREAD) {
            $record->markAsRead();
        }
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('mark_as_unread')
                ->label('Mark as Unread')
                ->icon('heroicon-o-envelope')
                ->color('warning')
                ->visible(fn () => $this->record->status === ContactMessage::STATUS_READ)
                ->action(function () {
                    $this->record->update(['status' => ContactMessage::STATUS_UNREAD]);
                    $this->refreshFormData(['status']);
                }),

            Actions\DeleteAction::make(),
        ];
    }
}
