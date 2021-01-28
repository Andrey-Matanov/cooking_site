<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ingredients;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class IngredientsController extends Controller
{
    public function index() {

        return response()->json(['status' => true, 'data' => Ingredients::all()]);

    }

    public function item(Ingredients $ingredients) {

        return response()->json(['status' => true, 'data' => $ingredients]);

    }
}
