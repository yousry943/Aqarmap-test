# EasyAdmin Free Laravel Bootstrap Admin Template


[![Bootstrap Admin Template](https://drive.google.com/file/d/1OYqxCqdpFZvLqY1u8ewIe-YTUCd2D4i_/view?usp=sharing)](https://drive.google.com/file/d/1OYqxCqdpFZvLqY1u8ewIe-YTUCd2D4i_/view?usp=sharing)


EasyAdmin is a great admin to use multi authentication,multi language,multi email template.
 Don't create new admin panel when you start a new project just use it.

## Table of Contents


* [Installation](#installation)
* [Usage](#Usage)
* [Features](#Features)




## Installation

``` bash
# clone the repo
 composer create-project yousry943/easyadmin

# go into app's directory
cd easyadmin

# run database migration
php artisan migrate

#run database seed
php artisan db:seed

```


Copy file ".env.example", and change its name to ".env".
Then in file ".env" replace this database configuration:
* DB_CONNECTION=mysql
* DB_HOST=127.0.0.1
* DB_PORT=3306
* DB_DATABASE=laravel
* DB_USERNAME=root
* DB_PASSWORD=





## Usage

``` bash
# start local server
php artisan serve


```
Open your browser with address: [http://localhost:8000/public/admin/login](http://localhost:8000/public/admin/login)  
Click "Login" on sidebar menu and log in with credentials:

This user has roles: super admin_

* E-mail: _manager@manager.com_
* Password: _123456_


This user has roles: without any permation _


* E-mail: _admin@admin.com_
* Password: _123456_



Open your browser with address: [http://localhost:8000/public/login](http://localhost:8000/public/login)  
Click "Login" on sidebar menu and log in with credentials:

* E-mail: _user@user.com_
* Password: _123456_




For use email function  

will find founction in  this  path :

* app\Helpers\Helper.php
For calling  founction :

* use Helper;
*   $data  = array('blade-path' => 'email.EmailTemplate',
           'to'=>$request->to,
           'from'=>'info@domain.net',
           'cc'=>$request->cc,
           'subject'=>$request->subject,
           'body'=>$request->body,
            );
* Helper::sendmail($data);


---


## Features


#### Role management
Allows you to create, edit, delete and reorder user roles.

#### Multi authentication
Admin have user and  admin authentication.

#### Multi language
Admin allow you to  create webiste have many languages.

#### Multi email template
Admin allow you to  create mulity mail template and its have  one helper function to call it from any  controller  



## Support EasyAdmin Development

EasyAdmin is an  open source project and completely free to use.  You can support development  by connecting to me  on [Gmail](mailto:ayousry943@gmail.com)
