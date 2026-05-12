<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('gallery_items', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->text('description')->nullable();

            // Controls visibility on the public gallery page
            $table->boolean('is_published')->default(true);

            // Controls display order in the admin list and public gallery.
            // Managed via Filament's ReorderAction drag-and-drop.
            $table->unsignedInteger('sort_order')->default(0)->index();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gallery_items');
    }
};
