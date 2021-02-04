<?php


namespace App\Services;


use App\Models\Recipe;
use Illuminate\Support\Facades\DB;

class RecipesGiveBunchService
{
    public function make($data)
    {
            $amount = (int)$data['amount'];
            $last = (int)$data['last'];
            if ($amount < 1) $amount = 10;
            if ($last < 1)  $last = 1;
            $recipes = DB::table('recipes')->select('recipes.image','recipes.time','recipes.rating', 'recipes.complexity','recipes.id', 'recipes.name', 'recipes.status', 'users.name as author', 'users.id as author_id','recipes.description')->where('recipes.id','>',$last)->orderBy('recipes.id', 'asc')->join('users', 'recipes.author_id', '=', 'users.id')->limit($amount)->get();

            $maxIdInBunch = $recipes->max('id');
            $maxIdRecipes = Recipe::max('id');
            ($maxIdRecipes > $maxIdInBunch)?$isLastRecipes = 0:$isLastRecipes = 1;

            return array($recipes, $isLastRecipes);
    }
}
