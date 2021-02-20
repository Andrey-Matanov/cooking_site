<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\RecipeService;
use App\Models\Recipe;

class RecipesController extends Controller
{
    protected $recipeService;

    public function __construct(RecipeService $recipeService)
    {
        $this->recipeService = $recipeService;
        $this->middleware('auth:api')->only('store','update','giveMark','destroy');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $request->only(['amount','last','category','author_id']);

        if ((isset($data['amount'])and(isset($data['last'])))or(isset($data['author_id']))) {
            list ($recipes, $isLastRecipes) = $this->recipeService->giveBunchRecipes($data);
            return response()->json([
                'status' => 'success',
                'recipes' =>  $recipes,
                'isLastRecipes' => $isLastRecipes
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = auth()->user();
        $data = json_decode($request->getContent(),true);
        $id = $this->recipeService->saveRecipe($data, false, $user->id);
        ($id) ? $status = 'success' : $status = 'fail';
        return response()->json([
            'status' => $status,
            'id' => $id
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $id = (int)$id;
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $id = (int)$id;
        $user = auth()->user();
        $data = json_decode($request->getContent(),true);
        $id_rec = $this->recipeService->saveRecipe($data, $id, $user->id);
        ($id_rec) ? $status = 'success' : $status = 'fail';

        return response()->json([
            'status' => $status,
            'id' => $id_rec]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $id = (int)$id;
        Recipe::destroy($id) ? $status = true : $status = false;

        return response()->json(['status' => $status]);
    }

    public function giveMark(Request $request)
    {
        $data = json_decode($request->getContent(),true);
        return response()->json([
                    'status' => $this->recipeService->solvingNewRating($data)
        ]);
    }

}
