<?php // Code within app\Helpers\Helper.php

namespace App\Helpers;
use Mail;
use App\Refrence_Code;
class Helper
{
    public static function sendmail($data)
    {


     Mail::send($data['blade-path'], $data, function ($message) use ($data)
        {

              $message->from($data['from']);

            $message->to($data['to']);

            $message->subject($data['subject']);

        });


    }



    public static function uploadImage($request,$destination){
  
      $filename = $request->getClientOriginalName();
      
$mytime = \Carbon\Carbon::now();
$time = $mytime->todateString()  ;

$extension = $request->getClientOriginalExtension();

// dd($extension);
 $name =$time.$request->getClientOriginalName(); // $mytime.$request->getClientOriginalName();
//
//  dd($name);
 $final_name = str_replace(' ', '-', $name);


 $request->move($destination,$final_name);


    return $final_name;


    }


    public static function generateCode($model_name){


      $get_Refrence_code = Refrence_Code::where('model_name', '=', 'jornal')->get();


      $Refrence = $get_Refrence_code->first()->title.'-'.$get_Refrence_code->first()->start;
      $new_start  = $get_Refrence_code->first()->start + 1;

      $Refrence_Code = Refrence_Code::find($get_Refrence_code->first()->id);

    return  $Refrence;


    }


}
