<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class comment extends Model
{
    //

      protected $fillable = [
     'user_id',
     'article_id',
     'comments',

     ];

     public $timestamps = false;
         protected $table = 'comments';

}
