<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredients extends Model
{
    protected $table = 'ingredients';
    
    public function author()
    {
        return $this->belongsTo(Units::class,'unit_id','id');
    }
}
