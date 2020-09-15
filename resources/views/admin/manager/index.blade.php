@extends('admin.layouts.master')
@section('title')
    Admin
@endsection
@section('page-header')
    <section class="content-header">
        <h1>
{{__('admin.admins')}}
            <small></small>
        </h1>

    </section>
@endsection

@section('content')


    <section class="content">

        <div class="row">
            <div class="col-md-12">

                @if(\Illuminate\Support\Facades\Auth::guard('admin')->user()->can('admins.create'))
                    <a href="{{url(LaravelLocalization::setLocale().'/admin/manager/create')}}" class="btn btn-primary pull-right margin-bottom">
                        <i class="fa fa-plus"></i>
{{__('admin.add new admin')}}                    </a>
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-primary">
                    <div class="box-header">
                        <h3 class="box-title">
                    {{__('admin.admins')}}
                       </h3>
                        <div class="box-tools">
                            <div class="input-group input-group-sm" style="width: 150px;">
                                <input type="text" name="table_search" class="form-control pull-right"
                                       placeholder="Search">

                                <div class="input-group-btn">
                                    <button type="submit" class="btn btn-default">
                                        <i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- /.box-header -->
                    <div class="box-body table-responsive no-padding">
                        <table class="table table-hover">
                            <tr>
                                <th>  {{__('admin.Name')}}</th>
                                <th> {{__('admin.Email')}}</th>
                                <th>{{__('admin.roles')}}</th>
                                <th>{{__('admin.Action')}}</th>
                            </tr>
  @if(\Illuminate\Support\Facades\Auth::guard('admin')->user()->can('admins.view'))
                            @foreach($managers as $manager)
                            <tr>
                                <td>{{$manager->username}}</td>
                                <td>{{$manager->email}}</td>
                                <td>
                                    @foreach ($manager->roles as $manager_role)
                                            {{$manager_role->title}}
                                    @endforeach
                                </td>
                                <td>
                                      @if(\Illuminate\Support\Facades\Auth::guard('admin')->user()->can('admins.update'))
                                        <a href="{{url(LaravelLocalization::setLocale().'/admin/manager/'.$manager->id.'/edit')}}" class="btn btn-info btn-circle"><i class="fa fa-edit"></i></a>
                                      @endif
                                      @if(\Illuminate\Support\Facades\Auth::guard('admin')->user()->can('admins.delete'))
                                            <a href="{{url(LaravelLocalization::setLocale().'/admin/manager/'.$manager->id.'/delete')}}" class="btn btn-danger btn-circle"><i class="fa fa-trash-o"></i></a>
                                      @endif
                                </td>
                            </tr>
                            @endforeach
          @endif
                        </table>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer clearfix">
                        <ul class="pagination pagination-sm no-margin pull-right">
                            <li><a href="#">&laquo;</a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">&raquo;</a></li>
                        </ul>
                    </div>
                </div>
                <!-- /.box -->
            </div>
        </div>


    </section>

@endsection

@section('css')

@endsection

@section('js')

@endsection
