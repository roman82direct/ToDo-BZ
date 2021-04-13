<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

/**
 * App\Models\Task
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist query()
 * @mixin \Eloquent
 */

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'list_id',
        'term_id',
        'repeat_id',
        'cronTime',
        'favorites'
    ];

    static function getAllTasksByUser($user_id)
    {
        $tasks = [];
        $lists = Todolist::where('user_id', $user_id)->get();
        foreach ($lists as $list) {
            $task = Task::where('list_id', $list->id)->get();
            array_push($tasks, [$list->id, $task]);
        }

        return $tasks;
    }

}
