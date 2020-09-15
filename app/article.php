<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class article extends Model
{

    protected $fillable = [
   'admin_id',
   'categorie_id',
   'title',
   'description',

   ];
       protected $table = 'articles';

       public function get_admin(){
         return $this->belongsTo('App\admin','admin_id');
     }

     public function get_categorie(){
       return $this->belongsTo('App\category','categorie_id');
   }


}
