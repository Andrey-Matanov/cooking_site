<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipesSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('recipes')->insert($this->getData());
    }

    public function getData():array
    {
        $faker = Factory::create('ru_Ru');

        $users = DB::table('users')->select('id')->get();
        $catalog = DB::table('catalog')->select('id')->get();

        $data = [];
        for ($i = 0; $i < 100; $i++){
            $name =  $faker->sentence(mt_rand(1,2));
            $catalog_id = ($catalog[Rand(0,count($catalog)-1)])->id;
            $status = 1;
            $author_id = ($users[Rand(0,count($users)-1)])->id;
            $description = $faker->sentence(mt_rand(30,80));

            $time = Rand(0,10);
            $complexity = Rand(0,10);
            $rating = Rand(0,10);

            $data[] =[
                'name' => $name,
                'catalog_id' => $catalog_id,
                'status' => $status,
                'author_id' => $author_id,
                'description' => $description,
                'time' => $time,
                'complexity'=>$complexity,
                'rating'=>$rating
            ];
        }
        return $data;
    }


}
