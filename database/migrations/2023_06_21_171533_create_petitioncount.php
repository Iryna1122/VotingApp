<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('petitioncounts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('petitionId')->nullable();
            $table->foreign('petitionId')->references('id')->on('petitions')->onDelete('set null');

            $table->integer('countVotes')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('petitioncounts');
    }
};
