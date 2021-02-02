<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->boolean('status')->default(false);
            $table->string('name',255);
            $table->string('image',255);
            $table->unsignedBigInteger('catalog_id');
            $table->unsignedBigInteger('author_id');
            $table->text('description');


            $table->foreign('catalog_id')->references('id')->on('catalog')->cascadeOnDelete();
            $table->foreign('author_id')->references('id')->on('users')->cascadeOnDelete();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipes');
    }
}
