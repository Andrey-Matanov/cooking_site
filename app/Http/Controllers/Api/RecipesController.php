<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RecipesController extends Controller
{
    public function index () {
        return response()->json([
            'status' => 'success',
            'recipes' =>  Recipe::all()
        ]);
    }

    public function recipe($id)
    {
        $recipe = DB::table('recipes')->select('recipes.time as time','recipes.rating as rating', 'recipes.complexity as complexity','recipes.id as id', 'recipes.name', 'recipes.status', 'recipes.name as name', 'users.name as user_name', 'catalog.name as catalog_name','recipes.description')->where('recipes.id',$id)->join('catalog','recipes.catalog_id', '=', 'catalog.id')->join('users', 'recipes.author_id', '=', 'users.id')->get();

        $ingredients = DB::table('ingredients_in_recipes')->select('ingredients.name as ingredient_name', 'ingredients_in_recipes.count as count','units.name as unit_name','ingredients.product_fat as fat', 'ingredients.product_protein as protein', 'ingredients.product_carb as carb', 'ingredients.calorie','ingredients.id as ingredient_id')->where('ingredients_in_recipes.recipe_id','=',$id)->join('ingredients','ingredients_in_recipes.ingredient_id','=','ingredients.id')->join('units','ingredients.unit_id','=','units.id')->get();

        $reviews = DB::table('reviews')->select('users.name as user_name','reviews.description','reviews.updated_at', 'users.id as user_id')->where('reviews.recipe_id','=',$id)->join('users','reviews.author_id','=','users.id')->get();

        return response()->json([
            'status' => 'success',
            'recipe' =>  $recipe,
            'ingredients' => $ingredients,
            'reviews'=> $reviews
        ]);
    }
}
