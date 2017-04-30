<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::auth();

Route::get('/', function () {
    return view('home');
})->middleware('auth');

Route::get('chat', function () {
    return view('home');
})->middleware('auth');

Route::get('messages', function () {
    return view('home');
})->middleware('auth');

Route::group(['prefix'=>'api/v1','middleware'=>[ 'auth']], function(){
    Route::get('message/poll', 'MessageController@poll');
    Route::resource('message', 'MessageController');
});

Route::get('test',"HomeController@test");




