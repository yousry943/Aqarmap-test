<?php

namespace App\Http\Controllers;

use App\Providers\AppServiceProvider;
use Illuminate\Http\Request;
use Redirect;
use App\user_diractions;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // protected $test;

    public function __construct()
    {
       // $this->test = $test;

         $this->middleware('auth');

                //$this->middleware(['auth','verified']);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


    // return response()->view('user.index')
    //  ->header("Refresh", "3;url=/home/auther_paper");
// $user = \Auth::guard('web')->user()->user_type_id;
// $user_diractions = user_diractions::where('user_type','=',$user)->get();


// return Redirect::to($user_diractions->first()->user_diractions);
      return view('user.dashboard');

    }
}
