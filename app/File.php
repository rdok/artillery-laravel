<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    const STORE_PATH = 'app' . DIRECTORY_SEPARATOR . 'files';

    protected $fillable = ['name'];

    public static function store($data)
    {
        $file = self::query()->create(['name' => $data['name']]);

        /** @var \Illuminate\Http\Testing\File $uploadedFile */
        $uploadedFile = $data['file'];

        $contents = file_get_contents($uploadedFile->getRealPath());

        mkdir(storage_path(self::STORE_PATH));

        file_put_contents($file->path, $contents);

        return $file;
    }

    public function getPathAttribute()
    {
        return storage_path(self::STORE_PATH . DIRECTORY_SEPARATOR . $this->id);
    }
}
