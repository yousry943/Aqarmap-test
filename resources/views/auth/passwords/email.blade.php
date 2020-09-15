@extends('layouts.auth')
@section('contentAuth')





        <div class="login-container">
    	<div class="login-wrapper flex-center">
    		<div class="login-widget-wrapper">
    			<div class="company-info">
    				<div class="erp-logo">
    					<h1>HR System</h1>

    				</div>
    				<p>
    					Registering to this website, you accept our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a>
    				</p>
    			</div>
    			<div class="login-widget">
    				<div class="user-login">

    					<form id="forget-pass-form"  action="{{ route('password.email') }}" aria-label="{{ __('Reset Password') }}" class="widget-form" onsubmit="return validateResetPassForm()" method="post">
                         @csrf
                          <div class="form-title">
    							<h1>Reset password</h1>

    							<p>
    								Enter your username or email to reset your password. <br>
    								You will receive an email with instructions on how to reset your password.	If you are experiencing problems resetting your password <a href="#">contact us</a> or <a href="#">send us an email</a>
    							</p>
    						</div>
    						<div class="input-wrapper">
    							<span class="input-pholder">Username or Email</span>
                                <input id="email" type="email" class="resetForm-input form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
    							<span class="invalid-text">Already Exists</span>
    						</div>

                            <input type="submit" value="Reset password" class="submit-btn">

    					</form>

    					<div class="register-forget">
    						<span related-form="sign-up-form" class="signup-btn"><a href="{{url('/register')}}">Not a member? Sign up</a></span>
    						<span related-form="sign-in-form" class="signin-btn"><a href="{{url('/login')}}">Already registered? Sign in</a></span>
    						<!-- <span related-form="forget-pass-form" class="forgetpass-btn">I can't remember my password</span> -->
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
        @endsection
