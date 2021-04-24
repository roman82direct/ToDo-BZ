<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\Todolist;
use App\Models\User;
use Illuminate\Database\Seeder;

class TruncateTasksListsUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Task::truncate();
        Todolist::truncate();
        User::truncate();
    }
}
