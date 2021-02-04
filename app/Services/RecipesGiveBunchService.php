<?php


namespace App\Services;


use Illuminate\Support\Facades\DB;

class RecipesGiveBunchService
{
    public function make($data)
    {
            $amount = (int)$data['amount'];
            $last = (int)$data['last'];
            if ($amount < 1) $amount = 10;
            if ($last < 1)  $last = 1;
            $recipes = DB::table('recipes')->select('recipes.image','recipes.time','recipes.rating', 'recipes.complexity','recipes.id', 'recipes.name', 'recipes.status', 'users.name as author','recipes.description')->where('recipes.id','>',$last)->join('users', 'recipes.author_id', '=', 'users.id')->limit($amount)->get();

            return $recipes;
    }
}
