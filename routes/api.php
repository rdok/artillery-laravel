<?php

Route::resource('files', 'FileController', ['only' => ['store', 'index']]);