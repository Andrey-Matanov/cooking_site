<?php

namespace Database\Seeders;

use App\Models\Step;
use Illuminate\Database\Seeder;
use Faker\Factory;


class StepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i<500; $i++) {
            \DB::table('steps')->insert($this->getData());
        }
    }

    public function getData () {

        $faker = Factory::create('ru_Ru');


        return [
            'recipe_id' =>  $this->getRecipeId(),
            'heading' => $faker->sentence(rand(1,2)),
            'image' => 'https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson',
            'description' => $faker->text(rand(150,200)),
            'step' => $this->getStep(),
        ];
    }

    public function getStep () {

        $id = Step::all()->max('id');
        if (is_null($id)) {
            return 1;
        }
        $lastString = Step::where('id', $id)->first();
        if ($lastString->step < 8) {
            return $lastString->step+1;
        } else {
            return 1;
        }
    }
    public static function getRecipeId () {
        $all = Step::first();
        if(is_null($all)) {
            return 1;
        }
        $id = Step::all('recipe_id')->max();

        $oneId = Step::all('recipe_id')->where('recipe_id', $id->recipe_id)->count();

        if ($oneId > 7) {
            return ++$id->recipe_id;
        } else {
            return $id->recipe_id;
        }
    }
}
