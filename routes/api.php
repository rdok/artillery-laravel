<?php

use Illuminate\Http\Request;

Route::resource('files', 'FileController', ['only' => 'store']);
