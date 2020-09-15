<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\User;
use App\u_roles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserManagerController extends Controller
{
    public function __construct()
    {
//        $this->middleware('admin:admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $managers = User::all();
        return view('admin.UserManager.index',compact('managers'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::guard('admin')->user()->can('admins.create')) {
            $roles = u_roles::all();
            return view('admin.UserManager.create',compact('roles'));
        }
        return redirect()->back();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'username' => 'required|string|max:255',
            'email' => 'required|string|max:255|unique:admins',
            'password' =>'required|string|max:10|confirmed',
            'role' => 'required'
        ]);

        $request['password'] = bcrypt($request->password);
        $admin = User::create($request->all());

        $admin->roles()->sync($request->role);
//        Admin::find($id)->roles()->sync($request->role);


        return redirect('/admin/user/manager')->withFlashMessage('Manager Stored');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if (Auth::guard('admin')->user()->can('admins.update')) {
            $manager = User::find($id);
            $roles = u_roles::all();
            
            return view('admin.UserManager.edit',compact('roles','manager'));
        }
        return redirect()->back();

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'username' => 'required|string|max:255',
            'email' => 'required|string|max:255',
        ]);
        $manager = User::find($id)->update($request->except('_token','_method','role'));
        User::find($id)->roles()->sync($request->role);
        return redirect('/admin/user/manager')->withFlashMessage('Manager Edited');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Auth::guard('admin')->user()->can('admins.delete')) {
            $admin = User::find($id)->delete();
            return redirect('/admin/user/manager')->withFlashMessage('Manager Deleted');
        }
        return redirect()->back();
    }
}
