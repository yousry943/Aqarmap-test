<?php

namespace App\Http\Controllers;

use App\Mail\adminresetpassword;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class admin extends Controller
{
  public function  index(){
  	return  view('auth.adminLogin');
  }

  public function  loginpost (Request $request){

    if (Auth::guard('admin')->attempt(['email'=>request('email'),'password'=>request('password')]) ) {
        # code...

        return redirect('admin');
    }else{
         return back();
    }
  }



    public function forgetpassword(){


        return view('admin/forgetpassword');
    }


    public function postforgetpassword(){
        $admin =  \App\admin::where('email',request('email'))->first();
        if (!empty($admin)) {
            $token = app('auth.password.broker')->createToken($admin);
            $data = DB::table('password_resets')->insert([
                'email'=>$admin->email,
                'token'=>$token,
                'created_at'=>Carbon::now(),
            ]);
            Mail::to($admin->email)->send(new adminresetpassword(['data'=>$admin,'token'=>$token]));
            session()->flash('sent','sent mail');
            return  back();

        }else{
            session()->flash('error email','mail is not found please try another mail!');
            return  back();
        }



    }


    public function resetpassword($token){
        $check_token  =  DB::table('password_resets')->where('token',$token)->where('created_at','>',Carbon::now()->subHours(1))->first();

        if (!empty($check_token )) {
            return  view('admin.resetpassword',['data'=>$check_token ]);
        }else{
            return redirect('admin/forget/password');
        }
    }


    public function postresetpassword($token){

        $check_token  =  DB::table('password_resets')->where('token',$token)->where('created_at','>',Carbon::now()->subHours(1))->first();
        $admin  =   \App\admin::where('email',$check_token->email)->update(['email'=>$check_token->email,'password'=>bcrypt(request('password'))]);
        if (!empty($check_token )) {
            DB::table('password_resets')->where('email',request('email'))->delete();

            auth()->guard('admin')->attempt(['email'=>$check_token->email ,'password'=>request('password')],true);

            return redirect('admin');

            //return  view('admin.resetpassword',['data'=>$check_token ]);

        }else{
            return redirect('admin/forget/password');
        }
    }




}
