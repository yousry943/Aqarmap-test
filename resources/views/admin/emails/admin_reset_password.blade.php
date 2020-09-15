@component('mail::message')
# This mail for reset your password

welcome {{$data['data']->name}}


@component('mail::button', ['url' => url('admin/reset/password/'.$data['token'])  ])
click to rest your password 
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
