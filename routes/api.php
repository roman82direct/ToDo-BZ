<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodolistController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RemindController;

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

//Lists Routes
Route::group([
    'prefix' => '/lists',
    'middleware' => ['auth']
], function (){
    Route::get('/', [TodolistController::class, 'getListsByUser']);
    Route::get('/{list_id}', [TodolistController::class, 'getListById']);
    Route::post('/', [TodolistController::class, 'createList'])
        ->middleware('checkListTitle');
    Route::put('/{list_id}', [TodolistController::class, 'updateList'])
        ->middleware('checkListTitle');
    Route::delete('/{list_id}', [TodolistController::class, 'delete']);
    Route::get('/predefined/{predefined}', [TodolistController::class, 'getPredefinedLists']);
});

//Tasks Routes
Route::group([
    'prefix' => '/tasks',
    'middleware' => ['auth']
], function (){
    Route::get('/{task_id}', [TaskController::class, 'getById']);
    Route::get('/list/{list_id}', [TaskController::class, 'getByListId']);
    Route::post('/', [TaskController::class, 'create'])
        ->middleware('checkTaskTitle');
    Route::put('/{task_id}', [TaskController::class, 'update'])
        ->middleware('checkTaskTitle');
    Route::delete('/{task_id}', [TaskController::class, 'delete']);
});

//Reminds Routes
Route::group([
    'prefix' => '/reminds',
    'middleware' => ['auth']
], function (){
    Route::get('/{remind_id}', [RemindController::class, 'getById']);
    Route::get('/task/{task_id}', [RemindController::class, 'getByTaskId']);
    Route::post('/', [RemindController::class, 'create'])
        ->middleware('checkDicRemindId');
    Route::put('/{remind_id}', [RemindController::class, 'update'])
        ->middleware('checkDicRemindId');
    Route::delete('/{remind_id}', [RemindController::class, 'delete']);
});

//Terms, Repeats, Dicreminds Routes
Route::get('/terms', function(){
    return \App\Models\Term::all()->toJson();
})->middleware('auth');
Route::get('/repeats', function (){
    return \App\Models\Repeat::all()->toJson();
})->middleware('auth');
Route::get('/reminddics', function (){
   return \App\Models\Reminddic::all()->toJson();
})->middleware('auth');

//Users Routes
Route::group([
    'prefix' => '/api/user',
    'middleware' => ['auth']
], function (){
    Route::get('/all', [UserController::class, 'getAllUsers']);
    Route::get('/{user_id}', [UserController::class, 'getUserById']);
    Route::get('/', 'UserController@getCurrentUser');
});


