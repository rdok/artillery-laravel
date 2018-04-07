<?php

use App\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        User::query()->create([
            'name'     => 'Tester',
            'email'    => 'tester',
            'password' => bcrypt('secret')
        ]);
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
