<?php


namespace App\Services;


use App\Models\Ingredient_in_recipe;
use App\Models\Recipe;
use App\Models\Step;
use Illuminate\Support\Facades\DB;

class AddRecipeService
{
    public function make($data)
    {
        //$author = $data['author'];
        $author = 1;
        $name = $data['name'];
        $description = $data['description'];
        $time = $data['time'];
        $complexity = $data['difficulty'];
        $categories = $data['category_id'];
        $ingredients= $data['ingredients'];
        $steps= $data['steps'];

        DB::beginTransaction();
            $recipe = new Recipe();
            $recipe->name = $name;
            $recipe->author_id = $author;
            $recipe->description = $description;
            $recipe->time = $time;
            $recipe->complexity = $complexity;
            $recipe->catalog_id = $categories;
            $recipe->image = '';
            $recipe->save();

            $newRecipe = Recipe::orderBy('id', 'desc')->first();
            $idRecipe = $newRecipe->id;

            for ($i = 0; $i < count($ingredients); $i++){
                $ingredient = new Ingredient_in_recipe();
                $ingredient->recipe_id = $idRecipe;
                $ingredient->ingredient_id = $ingredients[$i]['id'];
                $ingredient->count = $ingredients[$i]['amount'];
                $ingredient->save();
            }

            for ($i = 0; $i < count($steps); $i++){
                $step = new Step();
                $step->recipe_id = $idRecipe;
                $step->heading = '';
                $step->image = $steps[$i]['image'];
                $step->description = $steps[$i]['description'];
                $step->step = $i+1;
                $step->save();
            }

        DB::commit();

        return true;
    }
}
