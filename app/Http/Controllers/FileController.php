<?php

namespace App\Http\Controllers;

use App\File;
use App\Http\Requests\StoreFileRequest;

class FileController extends Controller
{
    public function store(StoreFileRequest $request)
    {
        $file = File::store($request->all());

        return response()->json($file);
    }
}
