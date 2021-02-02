<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Step extends Model
{
    use HasFactory;

    protected $table = 'steps';
    public $incrementing = true;

    protected $fillable = [
        'recipe_id',
        'heading',
        'image',
        'description',
        'step',
        ];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }
}
