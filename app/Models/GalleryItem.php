<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/**
 * GalleryItem
 *
 * Represents a project entry in the public gallery.
 * Each item can hold multiple images via the Spatie Media Library
 * under the 'projects' collection.
 *
 * Image ordering within a gallery item is handled by Spatie's
 * built-in order_column on the media table.
 *
 * Row ordering across gallery items is handled by sort_order
 * on this model, managed via Filament's ReorderAction.
 */
class GalleryItem extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = [
        'title',
        'description',
        'is_published',
        'sort_order',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'sort_order'   => 'integer',
    ];

    /**
     * Register the 'projects' media collection.
     *
     * - acceptsMimeTypes: only images
     * - withResponsiveImages: Spatie generates multiple sizes automatically
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('projects')
            ->acceptsMimeTypes(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])
            ->withResponsiveImages();
    }

    /**
     * Define image conversions:
     *  - thumb  → 400×300 (used in admin table preview)
     *  - medium → 800×600 (used on public gallery grid)
     */
    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(400)
            ->height(300)
            ->sharpen(8)
            ->nonQueued();

        $this->addMediaConversion('medium')
            ->width(800)
            ->height(600)
            ->sharpen(6);
    }

    /**
     * Scope: only published items, ordered by sort_order ascending.
     * Use this scope in the public gallery controller.
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true)->orderBy('sort_order');
    }
}
