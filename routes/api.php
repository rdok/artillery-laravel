<?php

Route::group(['middleware' => 'auth.basic'], function () {
    Route::resource('files', 'FileController', ['only' => 'store']);
});
