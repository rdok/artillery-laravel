<?php

namespace Tests\Feature\Files;

use App\File;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class StoreFileTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_loggedin_user_may__store_a_file()
    {
        $file = UploadedFile::fake()->create($filename = 'filename', 1024);

        $this->post('api/files', ['name' => $filename, 'file' => $file])
            ->assertStatus(200);

        $file = File::query()->first();

        $this->assertNotEmpty($file);
        $this->assertEquals($filename, $file->name);
        $this->assertNotEmpty($file->path);
        $this->assertFileExists($file->path);

        unlink($file->path);
    }

    // assert is unique
}
