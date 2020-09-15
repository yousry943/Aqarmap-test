<?php

namespace App\Http\Controllers\userController;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;


use Helper;

class test extends Controller
{
    public function index()
    {
      $to = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', '2017-5-6 3:30:10');
$from = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', '2017-5-6 3:35:35');
$diff_in_seconds = $to->diffInSeconds($from);
print_r($diff_in_seconds); // Output: 325
$diff_in_minutes = $to->diffInMinutes($from);
print_r($diff_in_minutes); // Output: 5
$diff_in_hours = $to->diffInHours($from);
print_r($diff_in_hours); 
    }


}
