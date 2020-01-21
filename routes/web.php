<?php

//app routes

Auth::routes();
Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');
Route::get('/get-users', 'HomeController@users');
Route::get('/user-delete/{id}', 'HomeController@userDelete');
Route::get('{path}','AppController@index')->where('path', '.*' );

