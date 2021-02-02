<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStepsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('steps', function (Blueprint $table) {
            $table->id();
            $table->integer('recipe_id');
            $table->string('heading', 255);
            $table->string('image', 255);
            $table->string('description', 255);
            $table->integer('step')->comment('What is the number of step');
            $table->timestamps();

//            $table->foreign('recipe_id')->references('id')->on('recipes')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('steps');
    }
}
