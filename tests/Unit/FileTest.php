<?php

namespace Tests\Unit;

use App\File;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FileTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_file_has_path()
    {
        $file = factory(File::class)->create();

        $this->assertNotEmpty($file->id);

        $expected = storage_path(File::STORE_PATH . DIRECTORY_SEPARATOR . $file->id);

        $actual = $file->path;

        $this->assertEquals($expected, $actual);
    }
}
