<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {

      $table->increments('id');

      $table->integer('user_id')->unsigned();
      $table->foreign('user_id')->references('id')->on('users');

        $table->integer('article_id')->unsigned();
      $table->foreign('article_id')->references('id')->on('articles')->onDelete('cascade');

        $table->longtext('comments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
