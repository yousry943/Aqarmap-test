<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;

use App\student;

use App\User;
use App\type;
use App\u_roles;



use Hash;



use Illuminate\Http\Request;
use Auth;


class createusers extends Controller
{
    //

    public function __construct()
    {
//        $this->middleware('admin:admin');
    }

    function index(){

        return view('admin.createusers');

    }
    public function showusers( Request $request ,$search = null){

      if($search==null){
        //$users = student::paginate(2);
       $users = User::orderBy('id', 'DESC')->paginate(10);


// dd($users);

        return view('admin.users.showusers',compact('users'));
      }

       $users =  User::where('email', 'LIKE', '%' . $request->search . '%')
                    ->orWhere('name', 'LIKE', '%' . $request->search . '%')
                    ->paginate(10)

                    ;
                   // dd($users);

       return view('admin.users.showusers',compact('users'));


    }






      public function addusers(){

          if(Auth::guard('admin')->user()->can('student.create')){

             $roles = u_roles::all();

              return view('admin.users.addusers',compact('roles'));
          }
          return redirect()->back();


    }






      public function addformusers(request $request){

       $this->validate($request,[
        'name' => 'required|string|max:50',
            'Title' => 'required|string|max:50',
            'password' => 'required|confirmed',
            'email' => 'required|email|unique:users',

            'user_type_id' => 'required',
            'familyName' => 'required',
            'Affilation' => 'required',
            'Country'=> 'required',



       ]);
     // $seg = Auth::guard('admin')->user()->email;



     $user = new User;
     $user->name = $request->name;
     $user->Title = $request->Title;
     $user->email = $request->email;
     $user->password = Hash::make($request->password);
     $user->remember_token = Hash::make($request->password);

      $user->user_type_id = $request->user_type_id;
       $user->familyName = $request->familyName;
        $user->Affilation = $request->Affilation;
         $user->Country = $request->Country;
         $user->verified = '1';


     $user->save();
    $id = $user->id;
    User::find($id)->roles()->sync($request->role);



     // Mail::to($student->email)->send(new welcomestudent(['name'=>$student->fname]));



    return redirect('/admin/users/add')->withFlashMessage('Add user has been successfully ');


    }



    public function deleteusers ($id,request $request){

        if(Auth::guard('admin')->user()->can('student.delete')){


           $delete = User::destroy($id);


            return redirect()->back()->withFlashMessage('User Deleted !!');
        }
        return redirect()->back();


    }



     public function editusers($id,request $request){



         if(Auth::guard('admin')->user()->can('student.update')){
            $user =   User::where('id', '=',  $id)->get();
            $manager = User::find($id);
            $roles = u_roles::all();

            $types = type::all();


             return view('admin.users.editusers',compact('user','types','roles','manager'));
         }
         return redirect()->back();



    }



    public function posteditusers($id, request $request)
    {




        User::where('id', $id)->update(array(
            'name' 	  =>  $request->name,
            'Title' 	  =>  $request->Title,
            'email' 	  =>  $request->email,
            'user_type_id' 	  =>  $request->user_type_id,
            'familyName' 	  =>  $request->familyName,
            'Affilation' 	  =>  $request->Affilation,
            'Country' 	  =>  $request->Country,

        ));

        $manager = User::find($id)->update($request->except('_token','_method','role'));
        User::find($id)->roles()->sync($request->role);


		 return redirect('admin/users/show');
    }
}
