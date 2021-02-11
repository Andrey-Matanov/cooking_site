<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CatalogSeeder extends Seeder
{
    public $catalog = ['Салат','Суп', 'Горячее', 'Десерт'];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i<count($this->catalog); $i++){
            \DB::table('catalog')->insert(['name' => $this->catalog[$i]]);
        }
    }
}
