<?php

declare(strict_types=1);

namespace App\Filament\Resources;

use App\Filament\Resources\GalleryItemResource\Pages;
use App\Models\GalleryItem;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Actions\Action;

/**
 * GalleryItemResource
 *
 * Admin interface for managing the public project gallery.
 *
 * Each row is a project entry containing:
 *  - A title and optional description
 *  - Multiple images stored via Spatie Media Library (collection: projects)
 *  - A published toggle
 *
 * Rows can be reordered by dragging in the table (sort_order column).
 * Images within a row can be reordered inside the form upload field.
 */
class GalleryItemResource extends Resource
{
    protected static ?string $model = GalleryItem::class;

    public static function getNavigationIcon(): ?string
    {
        return 'heroicon-o-photo';
    }

    public static function getNavigationLabel(): string
    {
        return 'Gallery';
    }

    public static function getNavigationSort(): ?int
    {
        return 1;
    }

    public static function getNavigationGroup(): ?string
    {
        return 'Content';
    }

    // -------------------------------------------------------------------------
    // Form — used by Create and Edit pages
    // -------------------------------------------------------------------------

    public static function form(Schema $schema): Schema
    {
        return $schema->components([
            \Filament\Schemas\Components\Section::make('Project Details')
                ->columns(2)
                ->components([
                    Forms\Components\TextInput::make('title')
                        ->label('Project Title')
                        ->required()
                        ->maxLength(255)
                        ->columnSpan(1),

                    Forms\Components\Toggle::make('is_published')
                        ->label('Published')
                        ->helperText('Unpublished items are hidden from the public gallery.')
                        ->default(true)
                        ->columnSpan(1),

                    Forms\Components\Textarea::make('description')
                        ->label('Project Description')
                        ->rows(3)
                        ->maxLength(1000)
                        ->columnSpanFull(),
                ]),

            \Filament\Schemas\Components\Section::make('Project Images')
                ->description('Upload one or more images for this project. Drag to reorder within the project.')
                ->components([
                    \Filament\Forms\Components\SpatieMediaLibraryFileUpload::make('images')
                        ->label('Upload Images')
                        ->collection('projects')
                        ->disk('public')
                        ->multiple()
                        ->reorderable()
                        ->image()
                        ->imageEditor()
                        ->maxFiles(20)
                        ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                        ->helperText('Accepted: JPG, PNG, WebP. Max 20 images per project.'),
                ]),
        ]);
    }

    // -------------------------------------------------------------------------
    // Table — list view with reorder support
    // -------------------------------------------------------------------------

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                // Thumbnail of the first image in the projects collection
                \Filament\Tables\Columns\SpatieMediaLibraryImageColumn::make('thumbnail')
                    ->label('Preview')
                    ->collection('projects')
                    ->conversion('thumb')
                    ->width(80)
                    ->height(60)
                    ->defaultImageUrl(asset('assets/placeholder.png')),

                Tables\Columns\TextColumn::make('title')
                    ->label('Project Title')
                    ->searchable()
                    ->sortable()
                    ->weight('semibold'),

                Tables\Columns\TextColumn::make('description')
                    ->label('Description')
                    ->limit(60)
                    ->placeholder('—'),

                Tables\Columns\ToggleColumn::make('is_published')
                    ->label('Published')
                    ->sortable(),

                Tables\Columns\TextColumn::make('sort_order')
                    ->label('Order')
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Added')
                    ->dateTime('d M Y')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_published')
                    ->label('Published')
                    ->placeholder('All items')
                    ->trueLabel('Published only')
                    ->falseLabel('Unpublished only'),
            ])
            ->recordActions([
                \Filament\Actions\EditAction::make(),
                \Filament\Actions\DeleteAction::make(),
            ])
            ->toolbarActions([
                \Filament\Actions\BulkActionGroup::make([
                    \Filament\Actions\DeleteBulkAction::make(),
                ]),
            ])
            // Allow dragging rows to reorder — updates sort_order automatically
            ->reorderable('sort_order')
            ->defaultSort('sort_order', 'asc');
    }

    // -------------------------------------------------------------------------
    // Pages
    // -------------------------------------------------------------------------

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListGalleryItems::route('/'),
            'create' => Pages\CreateGalleryItem::route('/create'),
            'edit'   => Pages\EditGalleryItem::route('/{record}/edit'),
        ];
    }
}
