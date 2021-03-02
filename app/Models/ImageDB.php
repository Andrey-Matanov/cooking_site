<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageDB extends Model
{
    use HasFactory;
    protected $table = 'imagedb';
    public $timestamps = false;
    protected $fillable = ['imagename', 'image'];
}
