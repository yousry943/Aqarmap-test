<?php

namespace App\Http\Controllers\userController;

use App\Http\Controllers\Controller;

use App\comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

        $comment = new comment();
    
        $comment->user_id = \Auth::guard('web')->user()->id;;
        $comment->article_id = $request->article_id ;
        $comment->comments = $request->comments;
        $comment->save();

        return redirect()->back();

    }


}
