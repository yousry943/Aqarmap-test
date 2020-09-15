<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Admin Login</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

  @include('admin.includes.css')
  <style>
    .login-page{
        height: 100%;
        background-image:url({{url(asset('assets/login/admin.jpeg'))}});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
   }
   .back-ground{
       position: absolute;
       height: 100%;
       width: 100%;
       background-color:rgba(0,0,0,.3);
   }
    .login-box-body{
        background: rgba(255,255,255,.5);
        padding: 20px;
        border-top: 0;
        color: #000000;
        border-radius: 10px;
        box-shadow: -1px 8px 20px 0px;
    }
</style>
</head>
<body class="hold-transition login-page">
<div class="back-ground">

<div class="login-box">
  <div class="login-logo">
    <a href="{{url('admin/login')}}"style="color:#FFF"><b>Admin</b></a>ForgetPassword
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">{{session('sent')}} {{session('error email')}}  </p>

    <form  method="post">
      {{csrf_field()}}
      <div class="form-group has-feedback">
        <input type="email" class="form-control" placeholder="Email" name="email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>

      <div class="row">

        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat">Reset</button>
        </div>
        <!-- /.col -->
      </div>
    </form>


  </div>
  <!-- /.login-box-body -->
</div>
</div>

<!-- /.login-box -->

@include('admin.includes.js')

</body>
</html>

