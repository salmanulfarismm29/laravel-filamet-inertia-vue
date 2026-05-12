<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * ContactMessage
 *
 * Stores every submission from the public contact form.
 * The model is intentionally write-heavy / read-once:
 * the public form writes, the admin reads and marks as read.
 *
 * Status transitions:
 *   unread  →  read   (via admin "Mark as Read" action)
 */
class ContactMessage extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'service',
        'message',
        'status',
        'ip_address',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Possible status values — used by Filament badge colouring.
     */
    const STATUS_UNREAD = 'unread';
    const STATUS_READ   = 'read';

    /**
     * Scope: unread messages only.
     * Used to drive the Filament navigation badge count.
     */
    public function scopeUnread($query)
    {
        return $query->where('status', self::STATUS_UNREAD);
    }

    /**
     * Mark this message as read.
     * Single-responsibility method — keeps the action clean.
     */
    public function markAsRead(): void
    {
        $this->update(['status' => self::STATUS_READ]);
    }
}
