<?php


namespace App\Services;


use App\Models\IngredientInRecipe;
use App\Models\MarkControl;
use App\Models\Recipe;
use App\Models\Step;
use Illuminate\Support\Facades\DB;

class RecipeService
{
    public function giveOneRecipe($id)
    {

        $recipe = DB::table('recipes')->select('recipes.image as image','recipes.time as time','recipes.rating as rating', 'recipes.complexity as complexity','recipes.id as id', 'recipes.name', 'recipes.status', 'recipes.name as name', 'users.name as user_name', 'catalog.name as catalog_name','recipes.description')->where('recipes.id',$id)->join('catalog','recipes.catalog_id', '=', 'catalog.id')->join('users', 'recipes.author_id', '=', 'users.id')->get();

        $ingredients = DB::table('ingredients_in_recipes')->select('ingredients.name as ingredient_name', 'ingredients_in_recipes.count as count','units.name as unit_name','ingredients.product_fat as fat', 'ingredients.product_protein as protein', 'ingredients.product_carb as carb', 'ingredients.calorie','ingredients.id as ingredient_id')->where('ingredients_in_recipes.recipe_id','=',$id)->join('ingredients','ingredients_in_recipes.ingredient_id','=','ingredients.id')->join('units','ingredients.unit_id','=','units.id')->get();

        $reviews = DB::table('reviews')->select('users.name as user_name','reviews.description','reviews.updated_at', 'users.id as user_id')->where('reviews.recipe_id','=',$id)->join('users','reviews.author_id','=','users.id')->get();

        $steps = Step::where('recipe_id', $id)->get(['heading','image', 'description', 'step']);

        return array($recipe, $ingredients, $reviews,$steps);
    }

    public function saveRecipe($data, $id, $userId)
    {
        $author = (int)$userId;
        $name = $data['name'];
        $description = $data['description'];
        $time = $data['time'];
        $complexity = $data['difficulty'];
        $categories = $data['category_id'];
        $ingredients= $data['ingredients'];
        $steps= $data['steps'];

        DB::beginTransaction();
        if ($id) {
            $recipe = Recipe::find($id);
            IngredientInRecipe::where('recipe_id','=',$id)->delete();
            Step::where('recipe_id','=',$id)->delete();
        }
        else{
            $recipe = new Recipe();
        }

        $recipe->name = $name;
        $recipe->author_id = $author;
        $recipe->description = $description;
        $recipe->time = $time;
        $recipe->complexity = $complexity;
        $recipe->catalog_id = $categories;
        $recipe->image = '';
        $recipe->save();

        $idRecipe = $recipe->id;

        for ($i = 0; $i < count($ingredients); $i++){
            $ingredient = new IngredientInRecipe();
            $ingredient->recipe_id = $idRecipe;
            $ingredient->ingredient_id = $ingredients[$i]['id'];
            $ingredient->count = $ingredients[$i]['amount'];
            $ingredient->save();
        }

        for ($i = 0; $i < count($steps); $i++){
            $step = new Step();
            $step->recipe_id = $idRecipe;
            $step->heading = $steps[$i]['name'];
            $step->image = $steps[$i]['image'];
            $step->description = $steps[$i]['description'];
            $step->step = $i+1;
            $step->save();
        }

        DB::commit();

        return $idRecipe;
    }

    public function giveBunchRecipes($data)
    {
        if (isset($data['author_id'])) {
            $author_id = (int)$data['author_id'];
            $recipes = DB::table('recipes')->select('recipes.id', 'recipes.name','users.name as author', 'users.id as author_id')->where('author_id','=',$author_id)->join('users', 'recipes.author_id', '=', 'users.id')->get();
            $isLastRecipes = 0;
            return array($recipes, $isLastRecipes);
        }

        $amount = (int)$data['amount'];
        $last = (int)$data['last'];
        if ($amount < 1) $amount = 10;
        if ($last < 0)  $last = 0;

        if (isset($data['category'])) {
            $category = (int)$data['category'];
            $recipes = DB::table('recipes')->select('recipes.image','recipes.catalog_id','recipes.time','recipes.rating', 'recipes.complexity','recipes.id', 'recipes.name', 'recipes.status', 'users.name as author', 'users.id as author_id','recipes.description')->where('catalog_id','=',$category)->where('recipes.id','>',$last)->orderBy('recipes.id', 'asc')->join('users', 'recipes.author_id', '=', 'users.id')->limit($amount)->get();
        }else{
            $recipes = DB::table('recipes')->select('recipes.image','recipes.catalog_id','recipes.time','recipes.rating', 'recipes.complexity','recipes.id', 'recipes.name', 'recipes.status', 'users.name as author', 'users.id as author_id','recipes.description')->where('recipes.id','>',$last)->orderBy('recipes.id', 'asc')->join('users', 'recipes.author_id', '=', 'users.id')->limit($amount)->get();
        }

        $maxIdInBunch = $recipes->max('id');
        $maxIdRecipes = Recipe::max('id');
        ($maxIdRecipes > $maxIdInBunch)?$isLastRecipes = 0:$isLastRecipes = 1;

        return array($recipes, $isLastRecipes);
    }

    public function solvingNewRating($data,$userId)
    {
        $recipeId  = (int)$data['recipeId'];
        $newMark = (int)$data['newMark'];

        $result = MarkControl::where('recipe_id',$recipeId)->where('user_id',$userId)->count();
        if ($result != 0) {
            return 'fail';
        }

        $control = new MarkControl();
        $control->recipe_id = $recipeId;
        $control->user_id = $userId;
        $control->save();

        if ($newMark < 1) $newMark = 1;
        if ($newMark > 5) $newMark = 5;
        $recipe = Recipe::findOrFail($recipeId);
        $rating = $recipe->rating;
        $count_mark = $recipe->count_mark;
        $rating = ($rating * $count_mark + $newMark) / ($count_mark + 1);
        $recipe->rating = $rating;
        $recipe->count_mark++;
        $result = ($recipe->save())?'success':'fail';

        return $result;
    }

}
