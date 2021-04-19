<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;
use function React\Promise\all;

class FillDeadlineToTasks extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()

    {
        $faker = \Faker\Factory::create();

        for ($i = 1; $i <= Task::count(); $i++){
            $tasks = Task::where('id', $i);
            $deadline = $faker->dateTimeBetween('now', '+1 month');
            $tasks->update(['deadline' => $deadline]);
        }
    }
}
