<?php

namespace Database\Factories;

use App\Models\Recipe;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

class RecipeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Recipe::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $users = DB::table('users')->select('id')->get();
        $catalog = DB::table('catalog')->select('id')->get();

        return [
            'status' => rand(0, 1),   // rand(1, $maxCategoryId)
            'name' => $this->faker->sentence(rand(3, 5)),
            'image' => 'https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson',
            'catalog_id' => ($catalog[Rand(0,count($catalog)-1)])->id,
            'author_id' => ($users[Rand(0,count($users)-1)])->id,
            'description' => $this->faker->text(rand(100, 200))
        ];
    }
}
