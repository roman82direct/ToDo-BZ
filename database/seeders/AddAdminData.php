<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\Todolist;
use Illuminate\Database\Seeder;

class AddAdminData extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Todolist::truncate();
        Task::truncate();


        $predefines = ['На сегодня', 'На неделю', 'На месяц', 'Важно'];
        for ($i = 0; $i < 4; $i++){
            Todolist::create([
                'name' => $predefines[$i],
                'user_id' => 1,
                'predefined' => 1,
                'pattern_id' => rand(1, 10)
            ]);
        }

        $names = ['Родственники', 'Работа', 'Покупки', 'Спорт', 'Финансы', 'Развлечения'];
        for ($i = 0; $i < 6; $i++){
            Todolist::create([
                'name' => $names[$i],
                'user_id' => 1,
                'predefined' => 0,
                'pattern_id' => rand(1, 10)
            ]);
        }

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 30; $i++){
            Task::create([
                'name' => $faker->sentence(5),
                'description' => $faker->sentence(20),
                'list_id' => rand(1, 10),
                'term_id' => rand(1, 4),
                'repeat_id' => rand(1, 5),
                'cronTime' => $faker->dateTimeBetween('now', '+1 year'),
                'favorites' => $faker->boolean
            ]);
        }
    }
}
