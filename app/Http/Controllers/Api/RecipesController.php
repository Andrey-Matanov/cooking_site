<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use App\Services\AddRecipeService;
use App\Services\RecipeService;
use App\Services\RecipesGiveBunchService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RecipesController extends Controller
{
    protected $recipeService;
    protected $recipesGiveBunchService;
    protected $addRecipeService;

    public function __construct(RecipeService $recipeService, RecipesGiveBunchService $recipesGiveBunchService, AddRecipeService $addRecipeService)
    {
        $this->recipeService = $recipeService;
        $this->recipesGiveBunchService = $recipesGiveBunchService;
        $this->addRecipeService = $addRecipeService;
    }

    public function index (Request $request)
    {
        $data = $request->only(['amount','last']);

        if (isset($data['amount'])and(isset($data['last']))) {
            list ($recipes, $isLastRecipes) = $this->recipesGiveBunchService->make($data);
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
        list ($recipe, $ingredients, $reviews, $steps) = $this->recipeService->make($id);
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
        if ($id < 0) $id = 0;
        $recipes = DB::table('recipes')->select('recipes.name', 'recipes.id', 'recipes.description','recipes.image','recipes.rating','recipes.time', 'recipes.complexity', 'users.name as author', 'users.id as author_id')->where('recipes.id','>',$id)->limit(10)->orderBy('recipes.id', 'asc')->join('users','recipes.author_id','=','users.id')->get();

        $maxIdInBunch = $recipes->max('id');
        $maxIdRecipes = Recipe::max('id');
        ($maxIdRecipes > $maxIdInBunch)?$isLastRecipes = 0:$isLastRecipes = 1;

        return response()->json([
            'status' => 'success',
            'recipes' =>  $recipes,
            'isLastRecipes' => $isLastRecipes
        ]);
    }

    public function addRecipe(Request $request)
    {
        dd($request);
        $data = $request->only(['author','name','description','time','complexity','categories','ingredients','count','stage_title','stage_description']);

        ($this->addRecipeService->make($data))?$result = 'success':$result = 'fail';

        return response()->json([
            'status' => $result
        ]);
    }

}
