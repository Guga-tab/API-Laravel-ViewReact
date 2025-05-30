<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function(Request $request){
    return $request->user();
});

// Definir a rota como games, para ver todas: php artisan route:list
use App\Http\Controllers\GameController;
Route::resource('games', GameController::class);
