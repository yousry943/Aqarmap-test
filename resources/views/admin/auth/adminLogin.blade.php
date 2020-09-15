<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title> Easyadmin Login</title>
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
        <a href="" style="color:#FFF"><b>easyadmin</b>Admin</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <form method="POST" action="{{ route('admin.login.submit') }}">
        {{ csrf_field() }}

            <div class="form-group has-feedback {{ $errors->has('email') ? ' has-error' : '' }}">
            <input type="email" class="form-control" placeholder="Email" name="email" value="{{ old('email') }}" required>
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            @if ($errors->has('email'))
            <span class="help-block">
            <strong>{{ $errors->first('email') }}</strong>
            </span>
            @endif
            </div>

            <div class="form-group has-feedback {{ $errors->has('password') ? ' has-error' : '' }}">
            <input type="password" class="form-control" name="password" placeholder="Password" required>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            @if ($errors->has('password'))
            <span class="help-block">
            <strong>{{ $errors->first('password') }}</strong>
            </span>
            @endif
            </div>


            <div class="row">
            <div class="col-xs-8">
            <div class="checkbox icheck" style="margin-left: 20px;">
            <!--<label>-->
            <!--<input type="checkbox"> Remember Me-->
            <!--</label>-->
            </div>
                <a href="{{url('admin/forget/password')}}">I forgot my password</a><br>

            </div>
            <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Login</button>
            </div>
            <!-- /.col -->
            </div>
        </form>


    </div>
    <!-- /.login-box-body -->
</div>
<!-- /.login-box -->
</div>

@include('admin.includes.js')

</body>
</html>
