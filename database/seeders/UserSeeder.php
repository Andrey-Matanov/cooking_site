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
        for ($i = 0; $i < 10; $i++){
            $name =  $faker->lastName;
            $email = $faker->email;
            $data[] =[
                'name' => $name,
                'email' => $email,
                'password' => '$2y$10$DBAqkwj9ItRZtL/HODD7weWpKQmbqt66If4rZTwHCNRhslRqiaNjO', // 12345678
            ];
        }
        return $data;
    }

}
