<?php

use App\Http\Controllers\api\CatalogController;
use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\Api\RecipesController;
use App\Http\Controllers\Api\IngredientsController;
use App\Http\Controllers\Api\ReviewsController;
use App\Http\Controllers\Api\UnitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PassportAuthController;
use App\Http\Controllers\API\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/addrecipe', [RecipesController::class, 'addRecipe'])->name('addRecipe');
Route::get('/recipes', [RecipesController::class, 'index'])->name('recipes');
Route::get('/recipes/{id}', [RecipesController::class, 'recipe'])->where('id', '[0-9]+')->name('recipe');
Route::get('/nextrecipes/{id}', [RecipesController::class, 'nextrecipes'])->where('id', '[0-9]+')->name('nextrecipes');
Route::post('/recipes/update/{id}', [RecipesController::class, 'update'])->name('recipes.update');
Route::delete('/recipes/delete/{id}', [RecipesController::class, 'delete'])->name('recipes.delete');

Route::apiResource('ingredients', IngredientsController::class);
Route::apiResource('reviews', ReviewsController::class);
Route::apiResource('units', UnitController::class);
Route::apiResource('categories', CategoryController::class);

Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('get-user', [PassportAuthController::class, 'userInfo']);
});
