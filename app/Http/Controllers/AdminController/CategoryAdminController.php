<?php

namespace App\Http\Controllers\AdminController;
use App\Http\Controllers\Controller;
use App\category;
use Illuminate\Http\Request;

class CategoryAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $categorys = category::all();

        return view('admin.category.index', compact('categorys'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
  // if you want to make permission for admin and super admin you can use (if)

      //  if (Auth::guard('admin')->user()->can('roles.create')) {


            return view('admin.category.create');
    //    }
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
         $category = category::create($request->all());
         return redirect('/admin/categorie')->withFlashMessage('category Stored');

    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $category = category::findOrFail($id);

        return view('admin.category.edit',compact('id','category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

    $category = category::findOrFail($id);
    $input = $request->all();

     $category->fill($input)->save();

      return redirect('/admin/categorie')->withFlashMessage('category Edited');



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $category = category::findOrFail($id);

        $category->delete();
        return redirect('/admin/categorie')->withFlashMessage('category deleted');

    }
}
