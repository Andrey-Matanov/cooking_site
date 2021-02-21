<?php


namespace App\Services;


use Illuminate\Support\Facades\DB;

class UserService
{
    public function giveRating()
    {
    //SELECT COUNT(*) as count,AVG(recipes.rating) as avg, SUM(recipes.rating) as summ, users.id, users.name FROM users INNER JOIN recipes ON (users.id = recipes.author_id) GROUP BY users.id ORDER by summ DESC

        $result = DB::table('users')->select(DB::raw('COUNT(*) as count,AVG(recipes.rating) as avg, SUM(recipes.rating) as summ, users.id, users.name'))->join('recipes','recipes.author_id','=','users.id')->groupBy('users.name','users.id')->orderBy('summ','desc')->limit(50)->get();

        return $result;
    }
}
