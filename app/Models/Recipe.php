<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $table = 'recipes';
    protected $primaryKey = "id";

    public function step()
    {
        return $this->hasMany(Step::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class,'author_id','id');
    }

}
