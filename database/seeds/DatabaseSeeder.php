<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);


        //Manger Permission

        App\Models\Permission::insert(['title'=>'add admin','for'=>'manager']);
        App\Models\Permission::insert(['title'=>'edit admin','for'=>'manager']);
        App\Models\Permission::insert(['title'=>'delete admin','for'=>'manager']);
        App\Models\Permission::insert(['title'=>'show admins','for'=>'manager']);
        App\Models\Permission::insert(['title'=>'show admins','for'=>'manager']);


        //Manger Permission
        App\Models\Permission::insert(['title'=>'add roles','for'=>'roles']);
        App\Models\Permission::insert(['title'=>'edit roles','for'=>'roles']);
        App\Models\Permission::insert(['title'=>'delete roles','for'=>'roles']);
        App\Models\Permission::insert(['title'=>'show roles','for'=>'roles']);
        App\Models\Permission::insert(['title'=>'show roles','for'=>'roles']);



        $role = new \App\Models\Role();
        $role->title = 'manager';
        $role->save();


        $perm = \App\Models\Permission::all(['id'])->toArray();

      $role->permissions()->sync($perm);


        $admin = new \App\Models\Admin();

            $admin->username = 'manager';
            $admin->password = bcrypt('123456');
            $admin->email = 'manager@manager.com';
            $admin->name = 'manager';

             $admin->save();

             $admin->roles()->sync($role);









    App\Models\User::insert(['verified' => 1, 'name' => 'user','password' => bcrypt('123456'),'email' => 'user@user.com']);





       App\Models\Role::insert(['title' => 'admins']);

       App\Models\Admin::insert(['username' => 'admin','password' => bcrypt('123456'),'email' => 'admin@admin.com','name'=>'admin']);

       //App\admin_role::insert(['admin_id' => '1','role_id' => '1' ]);





}
}
