<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contact_messages', function (Blueprint $table) {
            $table->id();

            // Submitted by the visitor
            $table->string('name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('service')->nullable();  // which service they enquired about
            $table->text('message');

            // Admin workflow status
            // 'unread' is the default — drives the Filament nav badge count
            $table->enum('status', ['unread', 'read'])->default('unread')->index();

            // Stored for spam / abuse tracking purposes
            $table->string('ip_address', 45)->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contact_messages');
    }
};
