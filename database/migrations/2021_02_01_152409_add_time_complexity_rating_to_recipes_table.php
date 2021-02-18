<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTimeComplexityRatingToRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('recipes', function (Blueprint $table) {
            $table->integer('time')->default(1);
            $table->integer('complexity')->default(1);
            $table->float('rating',5,2)->default(1);
            $table->integer('count_mark')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('recipes', function (Blueprint $table) {
            $table->dropColumn('time');
            $table->dropColumn('complexity');
            $table->dropColumn('rating');
            $table->dropColumn('count_mark');
        });
    }
}
