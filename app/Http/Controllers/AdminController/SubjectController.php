<?php

namespace App\Http\Controllers\AdminController;

use App\Subject;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $subjects = Subject::paginate(5);
        return view('admin.Subject.index',compact('subjects'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        if(Auth::guard('admin')->user()->can('subject.create')){
            return view('admin.Subject.create');
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
        //
        $this->validate($request,[
            'name'=>'required|min:3|unique:subjects,name|regex:/^([^0-9]*)$/',

        ]);
        $edu = Subject::create($request->all());
        return redirect('admin/subject')->withFlashMessage('تم اضافة المادة ..:)');
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
        //        //
        if(Auth::guard('admin')->user()->can('subject.update')){
            $subject = Subject::find($id);
            return view('admin.Subject.edit',compact('subject'));        }
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
        //
        $this->validate($request,[
            'name'=>'required|min:3|unique:subjects,name|regex:/^([^0-9]*)$/',
        ]);
        $subject = Subject::find($id);
        $subject->name = $request->name;
        $subject->save();

        return redirect('admin/subject')->withFlashMessage('تم تعديل المادة ..:(');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        //        //
        if(Auth::guard('admin')->user()->can('subject.delete')){
            $edu = Subject::destroy($id);
            return redirect()->back()->withFlashMessage('تم مسح المادة ..:(');
        }
        return redirect()->back();


    }
}
