<?php

namespace App\Http\Controllers\AdminController;

use App\Subscription_time;
use App\Company;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class SubscriptionTimeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   

    
    public function index()

    {
          $Subscription_times = Subscription_time::all();

          return view('admin.SubscriptionTime.index',compact('Subscription_times'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
           $companys = Company::select(['First_Name','id'])->get();
          
          return view('admin.SubscriptionTime.create',compact('companys'));
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
            'company_id'  => 'required',
            'start_date' => 'required|date',
            'end_date'  => 'required|date'

        ]);
      
        Subscription_time::create($request->all());
        $Subscription_times = Subscription_time::all();
        return view('admin.SubscriptionTime.index',compact('Subscription_times'))->withFlashMessage('تم اضافة الشركة ..:)');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Subscription_time  $subscription_time
     * @return \Illuminate\Http\Response
     */
    public function show(Subscription_time $subscription_time)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Subscription_time  $subscription_time
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
            $sub = Subscription_time::find($id);
            $companys = Company::all();
            return view('admin.SubscriptionTime.edit',compact('sub','companys'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Subscription_time  $subscription_time
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$subscription_time)
    {
        $this->validate($request,[
            'company_id'  => 'required',
            'start_date' => 'required|date',
            'end_date'  => 'required|date'

        ]);
       $sub =  Subscription_time::find($subscription_time);
       $sub->company_id = $request->company_id;
       $sub->start_date = $request->start_date;
       $sub->end_date   = $request->end_date;

       $sub->save();
        $Subscription_times = Subscription_time::all();
        return view('admin.SubscriptionTime.index',compact('Subscription_times'));

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Subscription_time  $subscription_time
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
           $sub =  Subscription_time::find($id);
           $sub->delete();
           $Subscription_times = Subscription_time::all();
            return view('admin.SubscriptionTime.index',compact('Subscription_times'));
    }
}
