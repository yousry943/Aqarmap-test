<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Input;


use App\Registration_details;




use Hash;



use Illuminate\Http\Request;
use Auth;


class registration extends Controller
{
    //

    public function __construct()
    {
//        $this->middleware('admin:admin');
    }

    function index(){

        return view('admin.registration.index');

    }




     /**
      * Show the form for creating a new resource.
      *
      * @return \Illuminate\Http\Response
      */
     public function create()
     {

             $permissions = Registration_details::all();
             return view('admin.registration.create', compact('permissions'));

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
         // $this->validate($request,[
         //     'title' => 'required|max:20|unique:roles'
         // ]);
         $input = Input::all();
         $metadata = Registration_details::create($input);

         return redirect('/admin/registration')->withFlashMessage('Registration Added');
     }

     /**
      * Display the specified resource.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
     public function show()
     {
         //
      $Registration_details = Registration_details::all();

         return view('admin.registration.index',compact('Registration_details'));

     }

     /**
      * Show the form for editing the specified resource.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
     public function edit($id)
     {

             $Registration_details = Registration_details::find($id);

             return view('admin.registration.edit',compact('Registration_details'));



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


        $data = request()->except(['_token','_method']);
      $Registration_details= Registration_details::where('id', $id)->update($data);




          return redirect('/admin/registration/show')->withFlashMessage('Done');

     }

     /**
      * Remove the specified resource from storage.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
     public function destroy($id)
     {
         if (Auth::guard('admin')->user()->can('roles.delete')) {
             $role = Role::find($id)->delete();
             return redirect('/admin/role')->withFlashMessage('Role Deleted');
         }
         return redirect()->back();

     }
}
