@extends('admin.layouts.master')
@section('title')
    create article
@endsection

@section('page-header')
    <section class="content-header">
        <h1>
            add article
            <small></small>
        </h1>

    </section>
@endsection

@section('content')

    <section class="content">
        <div class="row">
            <!-- right column -->
            <div class="col-md-12">
                <!-- Horizontal Form -->
                <div class="box box-info">
                    <div class="box-header with-border">
                        <h3 class="box-title">add article </h3>
                    </div>
                    <!-- /.box-header -->
                    <!-- form start -->


                    <form class="form-horizontal" method="post" action="{{url(LaravelLocalization::setLocale().'/admin/articles')}}">
                        {{csrf_field()}}
                    <div class="box-body">







                  <div class="form-group">

                      <label for="name" class="col-sm-4 control-label">category</label>

                      <div class="col-sm-4">
                        <select name="categorie_id"  class="form-control">
                            @foreach($categorys as $category)
                            <option name="categorie_id" value="{{$category->id}}">{{$category->name}}</option>
                              @endforeach
                              </select>                      </div>

                  </div>




                      <div class="form-group">

                          <label for="name" class="col-sm-4 control-label">article title</label>

                          <div class="col-sm-4">
                              <input type="text" name="title" class="form-control" id="name" placeholder="title" value="{{ old('title') }}">
                          </div>

                      </div>



                      <div class="form-group">

                          <label for="name" class="col-sm-4 control-label">article description</label>

                          <div class="col-sm-4">
                              <input type="textarea" name="description" class="form-control" id="name" placeholder="description" value="{{ old('description') }}">
                          </div>

                      </div>
























                    </div>




                    <div class="box-footer">
                    <button type="submit" class="btn btn-info center-block">save</button>
                    </div>

                    </form>
                </div>

            </div>
        </div>
    </section>

@endsection

@section('css')

    <link rel="stylesheet" href="{{ asset('assets/bower_components/select2/dist/css/select2.min.css')}}">
@endsection

@section('js')

    <script src="{{ asset('assets/bower_components/select2/dist/js/select2.min.js')}}"></script>


    <script>
        $('.select2').select2()
    </script>
@endsection
