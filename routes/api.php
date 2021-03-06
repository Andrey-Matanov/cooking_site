<?php

use App\Http\Controllers\Api\CatalogController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\api\FilesController;
use App\Http\Controllers\Api\RecipesController;
use App\Http\Controllers\Api\IngredientsController;
use App\Http\Controllers\Api\ReviewsController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\UnitController;
use App\Http\Middleware\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PassportAuthController;
use App\Http\Controllers\Api\ProductController;

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

Route::post('mark', [RecipesController::class, 'giveMark']);
Route::post('save', [FilesController::class, 'saveFile']);

Route::get('rating', [UsersController::class, 'ratingList']);

Route::apiResource('recipes', RecipesController::class);
Route::apiResource('ingredients', IngredientsController::class);
Route::apiResource('reviews', ReviewsController::class);
Route::apiResource('units', UnitController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('users', UsersController::class);


Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('get-user', [PassportAuthController::class, 'userinfo'])->name('get-user');

});






