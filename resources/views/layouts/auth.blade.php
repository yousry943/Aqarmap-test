<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="stylesheet" type="text/css" media="screen" href="{{asset('/css/loginPageCSS.css')}}"/>


</head>
<body>


        @yield('contentAuth')
    

    <!-- Scripts -->
<script src="{{asset('/assets/easyadmin/js/jquery_v3.3.1.js')}}"></script>
    <script src="{{asset('/js/loginpageJS.js')}}"></script>
    <script>
	function validateSignInForm() {
		let signInFormUserName = $('.signIn-username').val();
		let signInFormUserPass = $('.signIn-userpass').val();
		if(signInFormUserName === '' && signInFormUserPass === '') {
			$('.signIn-username, .signIn-userpass').css('border-color', 'red');
			$('.signIn-username').siblings('.invalid-text').html('You must enter username or email');
			$('.signIn-userpass').siblings('.invalid-text').html('You must enter password');
			$('.signIn-username, .signIn-userpass').siblings('.invalid-text').css('display', 'block');
			return false;
		} else if(signInFormUserName === '') {
			$('.signIn-username').css('border-color', 'red');
			$('.signIn-username').siblings('.invalid-text').html('You must enter username or email');
			$('.signIn-username').siblings('.invalid-text').css('display', 'block');
			return false;
		} else if(signInFormUserPass === '') {
			$('.signIn-userpass').css('border-color', 'red');
			$('.signIn-userpass').siblings('.invalid-text').html('You must enter password');
			$('.signIn-userpass').siblings('.invalid-text').css('display', 'block');
			return false;
		} else {
			return true;
		}
	}



	function validateSignUpForm() {
		let signUpFormUserName = $('.signup-username').val();
		let signUpFormUserPass = $('.signup-userpass').val();
		let signUpFormUserEmail = $('.signup-useremail').val();
		if(signUpFormUserName === '' && signUpFormUserPass === '' && signUpFormUserEmail === '') {
			$('.signup-username, .signup-userpass, .signup-useremail').css('border-color', 'red');
			$('.signup-username').siblings('.invalid-text').html('You must enter username');
			$('.signup-userpass').siblings('.invalid-text').html('You must enter password');
			$('.signup-useremail').siblings('.invalid-text').html('You must enter email');
			$('.signup-username, .signup-userpass, .signup-useremail').siblings('.invalid-text').css('display', 'block');
			return false;
		} else if(signUpFormUserName === '') {
			$('.signup-username').css('border-color', 'red');
			$('.signup-username').siblings('.invalid-text').html('You must enter username');
			$('.signup-username').siblings('.invalid-text').css('display', 'block');
			return false;
		} else if(signUpFormUserPass === '') {
			$('.signup-userpass').css('border-color', 'red');
			$('.signup-userpass').siblings('.invalid-text').html('You must enter password');
			$('.signup-userpass').siblings('.invalid-text').css('display', 'block');
			return false;
		} else if(signUpFormUserEmail === '') {
			$('.signup-useremail').css('border-color', 'red');
			$('.signup-useremail').siblings('.invalid-text').html('You must enter email');
			$('.signup-useremail').siblings('.invalid-text').css('display', 'block');
			return false;
		} else {
			return true;
		}
		
	}
	function validateResetPassForm() {
		let resetFormUserName = $('.resetForm-input').val();
		if(resetFormUserName === '') {
			$('.resetForm-input').css('border-color', 'red');
			$('.resetForm-input').siblings('.invalid-text').html('You must enter username or email');
			$('.resetForm-input').siblings('.invalid-text').css('display', 'block');
			return false;
		} else {
			return true;
		}
	};
</script>
</body>
</html>
