<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reviews extends Model
{
    use HasFactory;
    protected $table = 'reviews';

    protected $fillable = ['recipe_id', 'author_id', 'description'];
    
    public function author() {
        return $this->belongsTo(User::class,'author_id','id');
    }
    
    public function recipe() {
        return $this->belongsTo(Recipe::class,'recipe_id','id');
    }
}
