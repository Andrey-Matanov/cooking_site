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
        $author = $data['author'];
        $name = $data['name'];
        $description = $data['description'];
        $time = $data['time'];
        $complexity = $data['complexity'];
        $categories = $data['categories'];
        $ingredients= $data['ingredients'];
        $count = $data['count'];
        $stage_title = $data['stage_title'];
        $stage_description = $data['stage_description'];

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
                $ingredient->ingredient_id = $ingredients[$i];
                $ingredient->count = $count[$i];
                $ingredient->save();
            }

            for ($i = 0; $i < count($stage_title); $i++){
                $step = new Step();
                $step->recipe_id = $idRecipe;
                $step->heading = $stage_title[$i];
                $step->image = '';
                $step->description = $stage_description[$i];
                $step->step = $i+1;
                $step->save();
            }

        DB::commit();

        return true;
    }
}
