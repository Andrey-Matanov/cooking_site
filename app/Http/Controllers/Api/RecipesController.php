<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use App\Services\RecipeService;
use Illuminate\Http\Request;

class RecipesController extends Controller
{
    protected $recipeService;

    public function __construct(RecipeService $recipeService)
    {
        $this->recipeService = $recipeService;
    }

    public function index (Request $request)
    {
        $data = $request->only(['amount','last','category']);

        if (isset($data['amount'])and(isset($data['last']))) {
            list ($recipes, $isLastRecipes) = $this->recipeService->giveBunchRecipes($data);
            return response()->json([
                'status' => 'success',
                'recipes' =>  $recipes,
                'isLastRecipes' => $isLastRecipes
            ]);
        }
        return response()->json([
            'status' => 'success',
            'recipes' =>  Recipe::all()
        ]);
    }

    public function recipe($id)
    {
        $res = Recipe::find($id);
        if (!(optional($res)->name)){
            return response()->json([
                'status' => 'failed'
            ]);
        }
        list ($recipe, $ingredients, $reviews, $steps) = $this->recipeService->giveOneRecipe($id);
        return response()->json([
            'status' => 'success',
            'recipe' =>  $recipe,
            'ingredients' => $ingredients,
            'reviews'=> $reviews,
            'steps' => $steps
        ]);
    }

    public function nextrecipes($id)
    {
        $id = (int)$id;
        $data = ['amount' => 10, 'last' => $id];
        list ($recipes, $isLastRecipes) = $this->recipeService->giveBunchRecipes($data);

        return response()->json([
            'status' => 'success',
            'recipes' =>  $recipes,
            'isLastRecipes' => $isLastRecipes
        ]);
    }

    public function addRecipe(Request $request)
    {
        $data = json_decode($request->getContent(),true);
        ($this->recipeService->saveRecipe($data))?$result = 'success':$result = 'fail';
        return response()->json([
            'status' => $result
        ]);
    }

}
