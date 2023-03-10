<?php

use App\Http\Controllers\Favoritecontroller;
use App\Http\Controllers\StagaireController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('ajouter',[Favoritecontroller::class,'store'])->name('ajouter');
Route::get('index',[Favoritecontroller::class,'index'])->name('index');
Route::delete('destroy/{id}',[Favoritecontroller::class,'destroy'])->name('destroy');
Route::get('countfavorite',[Favoritecontroller::class,'countfavorite'])->name('countfavorite');