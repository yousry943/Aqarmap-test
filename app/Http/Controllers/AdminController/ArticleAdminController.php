<?php

namespace App\Http\Controllers\AdminController;
use App\Http\Controllers\Controller;

use App\article;
use App\category;
use Illuminate\Http\Request;


class ArticleAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    $articles = article::with('get_admin','get_categorie')->get();


    return view('admin.article.index', compact('articles'));


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $categorys = category::all();
        return view('admin.article.create',compact('categorys'));


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

         $articles = new article();
         $articles->admin_id =  \Auth::guard('admin')->user()->id;
         $articles->categorie_id = $request->categorie_id ;
         $articles->title = $request->title;
         $articles->description = $request->description;
         $articles->save();
         return redirect('/admin/articles')->withFlashMessage('articles Stored');


    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $articles = article::where('id','=',$id)->get();
        $categorys = category::all();

        return view('admin.article.edit',compact('id','articles','categorys'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        //
        $category = article::findOrFail($id);
        $input = $request->all();

         $category->fill($input)->save();

          return redirect('/admin/articles')->withFlashMessage('article Edited');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

        $articles = article::findOrFail($id);

        $articles->delete();
        return redirect('/admin/articles')->withFlashMessage('articles deleted');
    }
}
