<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;

class UnitsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('units')->insert($this->getData());
    }

    public function getData():array
    {
        $faker = Factory::create('ru_Ru');

        $data = [];
        $data[] = ['name' => 'грамм'];
        $data[] = ['name' => 'миллилитры'];
        $data[] = ['name' => 'штук'];
        $data[] = ['name' => 'чайная ложка'];
        $data[] = ['name' => 'столовая ложка'];

        return $data;
    }



}
