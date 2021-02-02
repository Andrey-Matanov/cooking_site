<?php

use App\Http\Controllers\CatalogController;
use App\Models\Step;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/test', 'test/addRecipe');

Route::view('/addPositionCatalog', 'test/addPositionCatalog');

Route::view('/renameCategory', 'test/renameCategory');

Route::get('/{any}', function (){
    return view('app');
})->where('any', '.*');

Auth::routes();


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
