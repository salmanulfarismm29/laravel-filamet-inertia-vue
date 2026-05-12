<?php

declare(strict_types=1);

namespace App\Filament\Resources;

use App\Filament\Resources\ContactMessageResource\Pages;
use App\Models\ContactMessage;
use Filament\Forms;
use Filament\Infolists;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;

/**
 * ContactMessageResource
 *
 * Read-only admin view for contact form submissions.
 *
 * Flow:
 *  1. Visitor submits the public contact form
 *  2. PageController saves the message (status = 'unread')
 *  3. Admin sees unread count badge on nav item
 *  4. Admin clicks "View" → full message in an infolist slide-over
 *  5. Admin clicks "Mark as Read" → status → 'read', badge decrements
 */
class ContactMessageResource extends Resource
{
    protected static ?string $model = ContactMessage::class;

    public static function getNavigationIcon(): ?string
    {
        return 'heroicon-o-envelope';
    }

    public static function getNavigationLabel(): string
    {
        return 'Contact Messages';
    }

    public static function getNavigationSort(): ?int
    {
        return 2;
    }

    public static function getNavigationGroup(): ?string
    {
        return 'Content';
    }

    public static function getModelLabel(): string
    {
        return 'Message';
    }

    public static function getPluralModelLabel(): string
    {
        return 'Messages';
    }

    /**
     * Show a red badge with the count of unread messages on the nav item.
     * Automatically re-evaluates on each page load.
     */
    public static function getNavigationBadge(): ?string
    {
        $count = ContactMessage::unread()->count();
        return $count > 0 ? (string) $count : null;
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'warning';
    }

    // -------------------------------------------------------------------------
    // This resource is READ-ONLY — no create form needed.
    // -------------------------------------------------------------------------

    public static function canCreate(): bool
    {
        return false;
    }

    // -------------------------------------------------------------------------
    // Infolist — full message view (shown in the ViewContactMessage page)
    // -------------------------------------------------------------------------

    public static function infolist(Schema $schema): Schema
    {
        return $schema->components([
            \Filament\Schemas\Components\Section::make('Sender Details')
                ->columns(2)
                ->components([
                    Infolists\Components\TextEntry::make('name')
                        ->label('Full Name')
                        ->weight('bold'),

                    Infolists\Components\TextEntry::make('status')
                        ->label('Status')
                        ->badge()
                        ->color(fn (string $state): string => match ($state) {
                            'unread' => 'warning',
                            'read'   => 'success',
                            default  => 'gray',
                        }),

                    Infolists\Components\TextEntry::make('email')
                        ->label('Email Address')
                        ->copyable(),

                    Infolists\Components\TextEntry::make('phone')
                        ->label('Phone Number')
                        ->placeholder('Not provided'),

                    Infolists\Components\TextEntry::make('service')
                        ->label('Service Interest')
                        ->placeholder('Not specified'),

                    Infolists\Components\TextEntry::make('created_at')
                        ->label('Received At')
                        ->dateTime('d M Y, h:i A'),
                ]),

            \Filament\Schemas\Components\Section::make('Message')
                ->components([
                    Infolists\Components\TextEntry::make('message')
                        ->label('')
                        ->prose()
                        ->columnSpanFull(),
                ]),
        ]);
    }

    // -------------------------------------------------------------------------
    // Table — list of all messages
    // -------------------------------------------------------------------------

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\BadgeColumn::make('status')
                    ->label('Status')
                    ->colors([
                        'warning' => 'unread',
                        'success' => 'read',
                    ])
                    ->sortable(),

                Tables\Columns\TextColumn::make('name')
                    ->label('Name')
                    ->searchable()
                    ->sortable()
                    ->weight(fn ($record) => $record->status === 'unread' ? 'bold' : 'normal'),

                Tables\Columns\TextColumn::make('email')
                    ->label('Email')
                    ->searchable()
                    ->copyable(),

                Tables\Columns\TextColumn::make('phone')
                    ->label('Phone')
                    ->placeholder('—')
                    ->toggleable(),

                Tables\Columns\TextColumn::make('service')
                    ->label('Service')
                    ->placeholder('—')
                    ->toggleable(),

                Tables\Columns\TextColumn::make('message')
                    ->label('Message')
                    ->limit(55)
                    ->tooltip(fn ($record) => $record->message),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Received')
                    ->dateTime('d M Y, h:i A')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->label('Status')
                    ->options([
                        'unread' => 'Unread',
                        'read'   => 'Read',
                    ]),
            ])
            ->recordActions([
                // View full message in the infolist page
                \Filament\Actions\ViewAction::make()
                    ->label('View'),

                // Mark as read — inline action directly in the table row
                \Filament\Actions\Action::make('mark_as_read')
                    ->label('Mark as Read')
                    ->icon('heroicon-o-check-circle')
                    ->color('success')
                    ->visible(fn (ContactMessage $record) => $record->status === 'unread')
                    ->action(fn (ContactMessage $record) => $record->markAsRead())
                    ->requiresConfirmation(false),

                \Filament\Actions\DeleteAction::make(),
            ])
            ->toolbarActions([
                \Filament\Actions\BulkActionGroup::make([
                    // Mark selected messages as read in bulk
                    \Filament\Actions\BulkAction::make('mark_all_read')
                        ->label('Mark as Read')
                        ->icon('heroicon-o-check-circle')
                        ->action(fn ($records) => $records->each->markAsRead())
                        ->deselectRecordsAfterCompletion(),

                    \Filament\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    // -------------------------------------------------------------------------
    // Pages
    // -------------------------------------------------------------------------

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContactMessages::route('/'),
            'view'  => Pages\ViewContactMessage::route('/{record}'),
        ];
    }
}
