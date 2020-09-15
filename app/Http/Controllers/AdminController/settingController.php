<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Facades\App\Helper\IceHelper;

class settingController extends Controller
{
    public function __construct()
    {
//        $this->middleware('admin:admin');
    }


    public function index(Setting $setting)
    {
        $setting = $setting->orderBy('type')->get();

        return view('admin.setting.index',compact('setting'));
    }

    public function store(Setting $setting,Request $request){

        foreach (array_except($request->toArray(), ['_token', 'submit']) as $key => $req){
//            dd($key);
//            dump($key);
            $settingupdate =$setting->where('namesetting', $key)->get()->first();
            if ($settingupdate->type != 2){
                $settingupdate->fill(['value' => $req])->save();
            }else{

                    $filename = IceHelper::uploadImage($req, 'setting/photo/');
                    if ($filename) {
                        $settingupdate->fill(['value' => $filename])->save();
                    }
            }

        }

        return redirect()->back()->withFlashMessage('Setting Updated');

    }
}
