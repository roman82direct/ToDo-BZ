<?php

namespace Database\Seeders;

use App\Models\Todolist;
use Illuminate\Database\Seeder;

class TodolistsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        Todolist::truncate();

        $names = ['Родственники', 'Работа', 'Покупки', 'Спорт', 'Финансы', 'Развлечения'];
        for ($i = 0; $i < 6; $i++){
            Todolist::create([
                'name' => $names[$i],
                'user_id' => 1,
                'predefined' => rand(0, 1),
                'pattern_id' => rand(1, 10)
            ]);
        }
    }
}
