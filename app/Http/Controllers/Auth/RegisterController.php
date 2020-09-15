<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\VerifyUser;
use Illuminate\Http\Request;
use App\Mail\VerifyMail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        //dd($data);
         $add_user =  User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'user_type_id'=>$data['user_type_id'],
            'company_id' => 1,
            'Country' =>1,
            'verified' => '0',
            'password' => Hash::make($data['password']),
        ]);

        User::find($add_user->id)->roles()->sync(1);

        $data  = array('blade-path' => 'email.welcome',
         'to'=>$data['email'],
         'from'=>'info@easyadmin.net',

         'subject'=>'welcome  new  user ',
         'body'=>'please  login  to  system   ',

          );

        $verifyUser = VerifyUser::create([
     'user_id' => $add_user->id,
     'token' => str_random(40)
 ]);

         //dd($add_user);
        \Mail::to($add_user->email)->send(new VerifyMail($add_user));



        // $job = (new \App\Jobs\sendmailjob($data))->delay(\Carbon\Carbon::now()->addSeconds(2));
        //
        // dispatch($job);

        return $add_user;
    }




    protected function registered(Request $request, $user)
    {
        $this->guard()->logout();
        return redirect('/login')->with('status', 'We sent you an activation code. Check your email and click on the link to verify.');
    }


    public function verifyUser($token)
    {
        $verifyUser = VerifyUser::where('token', $token)->first();
        // dd($verifyUser);
        if (isset($verifyUser)) {
            $user = $verifyUser->user;

            if (!$user->verified) {
                $verifyUser->user->verified = 1;
                $verifyUser->user->save();
                $status = "Your e-mail is verified. You can now login.";
            } else {
                $status = "Your e-mail is already verified. You can now login.";
            }
        } else {
            return redirect('/login')->with('warning', "Sorry your email cannot be identified.");
        }

        return redirect('/login')->with('status', $status);
    }









    public function reverifyUser($id)
    {
        $add_user = User::where('id', $id)->first();


        \Mail::to($add_user->email)->send(new VerifyMail($add_user));

        $status = "We sent you an activation code. Check your email and click on the link to verify.";
        return redirect('/login')->with('status', $status);

        //     $status = "Your e-mail is already verified. You can now login.";
      //
      // return redirect('/login')->with('status', $status);
    }
}
