<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class admin_role extends Model
{
    //
     protected $table='admin_role';
     protected $fillable = [
         'admin_id', 'role_id',
     ];
}
