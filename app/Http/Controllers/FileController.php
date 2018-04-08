<?php

namespace App\Http\Controllers;

use App\File;
use App\Http\Requests\StoreFileRequest;

class FileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.basic', ['only' => 'store']);
    }

    public function index()
    {
        $files = File::query()->paginate();

        return response()->json($files);
    }

    public function store(StoreFileRequest $request)
    {
        $file = File::store($request->all());

        return response()->json($file);
    }
}
