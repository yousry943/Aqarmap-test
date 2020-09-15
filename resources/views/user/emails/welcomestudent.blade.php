@component('mail::message')
#


welcome  new student


@component('mail::button', ['url' => url('login/student')  ])
click to rest your password 
@endcomponent





Thanks,<br>
{{ config('app.name') }}
@endcomponent
