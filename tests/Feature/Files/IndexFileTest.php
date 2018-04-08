<?php
/**
 * @author  Rizart Dokollari <r.dokollari@gmail.com>
 * @since   4/8/18
 */

namespace Tests\Feature\Files;

use App\File;
use Illuminate\Support\Collection;
use Tests\Feature\FeatureTestCase;

class IndexFileTest extends FeatureTestCase
{
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