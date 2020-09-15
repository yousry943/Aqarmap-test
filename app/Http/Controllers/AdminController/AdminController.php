<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\User;
use App\Notification;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //

    public function __construct()
    {


    }

   public function index(){

        return view('admin.index');

    }
    public function getAllUsers(){
        $users = User::all();
        return view('admin.users.index',compact('users'));

    }
    public function deleteUser($id){
        $user = \App\User::find($id);
        $user->delete();
//        $users = User::all();
        return redirect()->back()->withFlashMessage('User Deleted !!');

    }

    function testCreate(){
        return view('admin.test.create');

    }
    function testIndex(){
        return view('admin.test.index');

    }

}
