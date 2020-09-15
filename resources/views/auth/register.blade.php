
@extends('layouts.auth')
@section('contentAuth')
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
<!--
<form class="row form-app col-12 p-0 col-md-9 col-lg-9 col-xl-8 mx-auto" method="POST" action="{{ route('register') }}" aria-label="{{ __('Register') }}">
                        @csrf

                    <h1 class="col-12 text-center ">
                        <div class="brand-e">
                                <div class="ierek">
                                            IEREK
                                </div>
                                <div class="ierek-s">
                                    S
                                </div>
                        </div>
                    </h1>
                    <p class="col-12 lead text-center">Conference Paper Submission and Evaluation System</p>
                    <p class="col-12 lead text-center">2nd Euro-Mediterranean Conference for Environmental Integration
                            EMCEI-2, 10-13 October 2019, Sousse, Tunisia</p>
                            <div class="col-12 p-0 div-golfo" author="loginA">
                                <h4 class="text-center head-author">Create account</h4>
                                    <div class="row     ">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <span class="ts-icon"><i class="fas fa-at"></i></span>


     <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <span class="ts-icon"><i class="fas fa-unlock-alt"></i></span>

          <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif


                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <span class="ts-icon"><i class="fas fa-unlock-alt"></i></span>

  <input id="password-confirm" class="form-control"  type="password" class="form-control" name="password_confirmation" required>

                                            </div>
                                        </div>

                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <span class="ts-icon"><i class="fas fa-signature"></i></span>

                    <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus placeholder="First Name" >

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif




                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <span class="ts-icon"><i class="fas fa-certificate"></i></span>
                                                <input type="text" name="familyName" class="form-control" id="familyName" placeholder="family Name" required>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                    <span class="ts-icon"><i class="fab fa-black-tie"></i></span>
                          <input type="text" name="Title" class="form-control" id="Title" placeholder="Title" required>


                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <span class="ts-icon"><i class="fas fa-certificate"></i></span>
                                                <input type="text" class="form-control" name="Affilation" id="affilation" placeholder="Affilation"  required>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                                <div class="form-group">
                                                    <span class="ts-icon"><i class="fas fa-globe"></i></span>
                                                    <select name="Country" class="custom-select" required>
                                                        <option value="">Country</option>
                                                        @include('user.includes.country')
                                                    </select>
                                                </div>
                                            </div>
                                        <div class="col-12 pb-3">
                                            <P class="d-inline">Would you accept an invite to peer review ?</P>
                                            <div class="custom-control custom-radio d-inline">
                                                <input type="radio" id="yes1" name="customRadio" class="custom-control-input">
                                                <label class="custom-control-label" for="yes1">Yes</label>
                                            </div>
                                            <div class="custom-control custom-radio d-inline">
                                                <input type="radio" id="No1" name="customRadio" class="custom-control-input">
                                                <label class="custom-control-label" for="No1">No</label>
                                            </div>
                                        </div>
                                    </div>





                                       <button type="submit"  class="btn w-100 " >
                                          <i class="fas fa-id-badge"></i>
                                    {{ __('Register') }}
                                </button>




                            </div>
                </form>
            </div>
        </section> -->


        <form class="row form-app col-12 p-0 col-md-9 col-lg-9 col-xl-8 mx-auto" method="POST" action="{{ route('register') }}" aria-label="{{ __('Register') }}">
        @csrf
        <input type="hidden" name="user_type_id" value="1">
                       <div class="form-title">
    							<h1>Sign up</h1>
    						</div>
    						<div class="input-wrapper">
    							<span class="input-pholder">Username</span>
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus placeholder="First Name" >
                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif

                                <span class="invalid-text">Already Exists</span>

    						</div>
    						<div class="input-wrapper">
    							<span class="input-pholder">Email</span>

                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
    							<span class="invalid-text">Already Exists</span>
    						</div>
    						<div class="input-wrapper">
    							<span class="input-pholder">Password</span>
    							<input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                                <span class="invalid-text">Already Exists</span>
                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
    							<img src="visible.png" class="showPassImg" alt="Show Password" title="Show Password">
                            </div>
                            <div class="col-12 col-md-6">

                            <span class="ts-icon"><i class="fas fa-unlock-alt"></i></span>

                             <input id="password-confirm" class="form-control"  type="password" class="form-control" name="password_confirmation" required>

                                </div>

                                <div class="col-12 col-md-6">
                                <div class="form-group">
                             <span class="ts-icon"><i class="fas fa-signature"></i></span>

    						<input type="submit" value="Sign up" class="sign-up-btn">
                        </form>

    					<!-- <form id="forget-pass-form" class="widget-form" onsubmit="return validateResetPassForm()" method="post">
    						<div class="form-title">
    							<h1>Reset password</h1>

    							<p>
    								Enter your username or email to reset your password. <br>
    								You will receive an email with instructions on how to reset your password.	If you are experiencing problems resetting your password <a href="#">contact us</a> or <a href="#">send us an email</a>
    							</p>
    						</div>
    						<div class="input-wrapper">
    							<span class="input-pholder">Username or Email</span>
    							<input type="text" name="userName" class="resetForm-input">
    							<span class="invalid-text">Already Exists</span>
    						</div>

    						<input type="submit" value="Reset password" class="submit-btn">
    					</form> -->

    					<div class="register-forget">
    						<!-- <span related-form="sign-up-form" class="signup-btn">Not a member? Sign up</span> -->
    						<span related-form="sign-in-form" class="signin-btn"><a href="{{url('/login')}}">Already registered? Sign in</a></span>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
@endsection
