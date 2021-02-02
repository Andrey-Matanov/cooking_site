<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('reviews')->insert($this->getData());
    }

    public function getData():array
    {
        $faker = Factory::create('ru_Ru');

        $users = DB::table('users')->select('id')->get();
        $recipes = DB::table('recipes')->select('id')->get();

        $data = [];
        for ($i = 0; $i < 200; $i++){
            $recipe_id = ($recipes[Rand(0,count($recipes)-1)])->id;
            $author_id = ($users[Rand(0,count($users)-1)])->id;
            $description = $faker->sentence(mt_rand(30,80));

            $data[] =[
                'recipe_id' => $recipe_id,
                'author_id' => $author_id,
                'description' => $description
            ];
        }
        return $data;
    }

}
