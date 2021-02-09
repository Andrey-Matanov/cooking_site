<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IngredientInRecipe extends Model
{
    use HasFactory;
    protected $table = 'ingredients_in_recipes';
    protected $primaryKey = "id";
    public $timestamps = false;
}
