<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use App\Services\RecipeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RecipesController extends Controller
{
    protected $recipeService;

    public function __construct(RecipeService $recipeService)
    {
        $this->recipeService = $recipeService;
    }

    public function index ()
    {
        return response()->json([
            'status' => 'success',
            'recipes' =>  Recipe::all()
        ]);
    }

    public function recipe($id)
    {
        list ($recipe, $ingredients, $reviews) = $this->recipeService->make($id);
        return response()->json([
            'status' => 'success',
            'recipe' =>  $recipe,
            'ingredients' => $ingredients,
            'reviews'=> $reviews
        ]);
    }
}
