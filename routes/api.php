<?php

use App\Http\Controllers\api\CatalogController;
use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\Api\RecipesController;
use App\Http\Controllers\Api\IngredientsController;
use App\Http\Controllers\Api\ReviewsController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\UnitController;
use App\Http\Middleware\Admin;
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

Route::get('mark/{id}/{mark}', [RecipesController::class, 'giveMark'])->where('id', '[0-9]+')->where('mark', '[0-9]+');

Route::apiResource('recipes', RecipesController::class);
Route::apiResource('ingredients', IngredientsController::class);
Route::apiResource('reviews', ReviewsController::class);
Route::apiResource('units', UnitController::class);
Route::apiResource('categories', CategoryController::class);



Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('get-user', [PassportAuthController::class, 'userInfo'])->name('get-user');
    Route::post('users/{id}', [UsersController::class, 'update'])->name('update_user');
});

Route::middleware('admin')->group(function () {
    Route::delete('users/{id}', [UsersController::class, 'destroy'])->name('delete_user');
});


// Route::apiResource('users', UsersController::class);

