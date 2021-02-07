<?php

use App\Http\Controllers\api\CatalogController;
use App\Http\Controllers\Api\RecipesController;
use App\Http\Controllers\Api\IngredientsController;
use App\Http\Controllers\Api\ReviewsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/catalog', [CatalogController::class, 'showAllCatalog'])->name('catalog');
Route::get('/category/{id}', [CatalogController::class, 'deletePositionFromCatalog'])->where('id', '[0-9]+')->name('deletePositionFromCatalog');
Route::post('/addCategory', [CatalogController::class, 'addPositionCatalog'])->name('addPositionCatalog');
Route::post('/renameCategory', [CatalogController::class, 'renameCategory'])->name('renameCategory');

Route::post('/addrecipe', [RecipesController::class, 'addRecipe'])->name('addRecipe');
Route::get('/recipes', [RecipesController::class, 'index'])->name('recipes');
Route::get('/recipes/{id}', [RecipesController::class, 'recipe'])->where('id', '[0-9]+')->name('recipe');
Route::get('/nextrecipes/{id}', [RecipesController::class, 'nextrecipes'])->where('id', '[0-9]+')->name('nextrecipes');

Route::resource('ingredients', IngredientsController::class);

Route::resource('reviews', ReviewsController::class);