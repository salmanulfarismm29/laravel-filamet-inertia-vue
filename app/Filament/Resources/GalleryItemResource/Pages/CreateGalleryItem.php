<?php

declare(strict_types=1);

namespace App\Filament\Resources\GalleryItemResource\Pages;

use App\Filament\Resources\GalleryItemResource;
use Filament\Resources\Pages\CreateRecord;

class CreateGalleryItem extends CreateRecord
{
    protected static string $resource = GalleryItemResource::class;

    protected function getRedirectUrl(): string
    {
        // After creating, go back to the list so admin can reorder
        return $this->getResource()::getUrl('index');
    }
}
