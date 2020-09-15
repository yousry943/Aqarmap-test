<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class u_roles extends Model
{
    //


    protected $fillable = [
        'id',
        'title',


        ];
            protected $table = 'u_roles';


            public function permissions(){
                return $this->belongsToMany('App\user_permissions')->withTimestamps();

            }



}
