<?php

namespace App\Http\Controllers\userController;

use App\Http\Controllers\Controller;

use App\article;
use App\category;

use Illuminate\Http\Request;


class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $articles = article::all();
        $categorys = category::all();
        return view('user.website.index',compact('articles','categorys'));

    }

    public function sortby($id)
    {

        $categorys = category::all();
        $articles = article::where('categorie_id','=',$id)->get();
        return view('user.website.index',compact('articles','categorys'));

    }


}
