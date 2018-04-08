<?php
/**
 * @author  Rizart Dokollari <r.dokollari@gmail.com>
 * @since   4/8/18
 */

namespace Tests\Feature\Files;

use App\File;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Collection;
use Tests\TestCase;

class IndexFileTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_guest_sees_files_pagination()
    {
        /** @var Collection $files */
        $files = factory(File::class, 2)->create();

        $this->getJson('api/files')
            ->assertStatus(200)
            ->assertJson(['data' => $files->toArray()]);
    }
}