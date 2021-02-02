<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->insert($this->getData());
    }

    public function getData():array
    {
        $faker = Factory::create('en_En');

        $data = [];
        for ($i = 0; $i < 100; $i++){
            $name =  $faker->lastName;
            $email = $faker->email;
            $password = $faker->sentence(mt_rand(1,2));
            $data[] =[
                'name' => $name,
                'email' => $email,
                'password' => $password
            ];
        }
        return $data;
    }

}
