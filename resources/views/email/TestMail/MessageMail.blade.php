@component('mail::message')
# Introduction

The body of your message.
ahmed massage baby  

@component('mail::button', ['url' => 'www.google.com'])
click to go to website 
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
