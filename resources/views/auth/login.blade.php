@extends('layouts.auth')
@section('contentAuth')
    <div class="login-container">
    	<div class="login-wrapper flex-center">
    		<div class="login-widget-wrapper">
    			<div class="company-info">
    				<div class="erp-logo">
    				 	<h1>EasyAdmin</h1>

    				</div>

                </div>
                <div class="login-widget">
    				<div class="user-login">
                        <form method="POST" id="sign-in-form"  onsubmit="return validateSignInForm()"   class="row form-app widget-form col-12 p-0 col-md-7 col-lg-9 mx-auto"  action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                          @csrf
                            <div class="form-title">
    							<h1>Sign in</h1>
                            </div>
                            <div class="input-wrapper">
    							<span class="input-pholder">Username or Email</span>
    							<input type="text" name="email" class="signIn-username signIn-usernameform-control{{ $errors->has('email') ? ' is-invalid' : '' }}"value="{{ old('email') }}" required autofocus >
                                <span class="invalid-text"></span>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>

                            <div class="input-wrapper">
    							<span class="input-pholder" name="userPassword">Password</span>
    							<input type="password" name="password" required class="signIn-userpass form-control{{ $errors->has('password') ? ' is-invalid' : '' }}">
    							<span class="invalid-text"></span>
                                <img src="img/invisible.png" class="showPassImg" alt="Show Password" title="Show Password">
                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                            @if (session('status'))
                                <div class="alert alert-success">
                                    {{ session('status') }}
                                </div>
                            @endif

                            @if (session('warning'))
                               <div class="alert alert-warning">
                                {{ session('warning') }}
                                <br>
                                <a href="user/resend/verify/{{ session('user_id') }}">{{ session('link') }}</a>
                              </div>
                           @endif


                            <input type="submit" value="{{ __('Login') }}" class="submit-btn ">
                        </form>
                        <div class="register-forget">
    						<span related-form="sign-up-form" class="signup-btn"><a href=" {{url('/register')}}">Not a member? Sign up</a></span>
                               <span related-form="forget-pass-form" class="forgetpass-btn">
                               <a href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                               </span>


                        </div>
                          <div class="remember-me">
                           <input type="checkbox" name="remember" class="form-control" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}
                        </div>
                    </div>
    			</div>

                </div>
    	</div>
    </div>
    @endsection
