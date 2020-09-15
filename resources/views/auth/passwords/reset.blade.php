<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ERP Reset Password</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="loginPageCSS.css" />
 
</head>

<body>
    <div class="login-container">
    	<div class="login-wrapper flex-center">
    		<div class="login-widget-wrapper">
    			<div class="company-info">
    				<div class="erp-logo">
    					<h1>ERP</h1>
    					
    				</div>
    				<p>
    					Registering to this website, you accept our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a>
    				</p>
    			</div>
    			<div class="login-widget">
    				<div class="user-login">
                <form id="forget-pass-form"  onsubmit="return validateResetPassForm()" class="row widget-form form-app col-12 p-0 col-md-7 col-lg-5 mx-auto was-validated" method="POST" action="{{ route('password.request') }}" >
                  @csrf

                  <input type="hidden" name="token" value="{{ $token }}">
                  <div class="form-title">
    							<h1>Reset password</h1>
    							
    							<p>
    								Enter your username or email to reset your password. <br>
    								You will receive an email with instructions on how to reset your password.	If you are experiencing problems resetting your password <a href="#">contact us</a> or <a href="#">send us an email</a>
    							</p>
                            </div>
                            <div class="input-wrapper">
    							<span class="input-pholder">Username or Email</span>
                                <input id="email" type="email" placeholder="Email" class="resetForm-input form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ $email ?? old('email') }}" required autofocus>
    							<span class="invalid-text">Already Exists</span>
    						</div>










                               

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif


                        



                                    <input id="password" placeholder="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                    @if ($errors->has('password'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif



                                <input id="password-confirm" placeholder="password confirm" type="password" class="form-control" name="password_confirmation" required>
                            
                            <!-- <button type="submit" class="btn btn-primary">
                                {{ __('Reset Password') }}
                            </button> -->

                            <button type="submit" class="btn w-100"><i class="fas fa-redo-alt"></i>
                               {{ __('Reset Password') }}

                            </button>
                   
                </form>
  