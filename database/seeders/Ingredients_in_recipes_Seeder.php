<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Ingredients_in_recipes_Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('ingredients_in_recipes')->insert($this->getData());
    }

    public function getData():array
    {
        $faker = Factory::create('ru_Ru');

        $recipes = DB::table('recipes')->select('id')->get();
        $ingredients = DB::table('ingredients')->select('id')->get();

        $data = [];
        for ($i = 0; $i < 1000; $i++){
            $recipe_id =  ($recipes[Rand(0,count($recipes)-1)])->id;
            $ingredient_id = ($ingredients[Rand(0,count($ingredients)-1)])->id;
            $count = Rand(2,8);

            $data[] =[
                'recipe_id' => $recipe_id,
                'ingredient_id' => $ingredient_id,
                'count' => $count
            ];
        }
        return $data;
    }

}
