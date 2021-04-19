<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

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
        'deadline',
        'list_id',
        'term_id',
        'repeat_id',
        'cronTime',
        'favorites'
    ];

    static function getAllTasksByUser($user_id)
    {
        return Task::leftJoin('todolists', 'tasks.list_id', '=', 'todolists.id')
            ->select('tasks.id', 'tasks.name', 'tasks.description', 'tasks.list_id', 'tasks.term_id', 'tasks.repeat_id',
                'tasks.cronTime', 'tasks.favorites', 'tasks.created_at', 'tasks.updated_at', 'todolists.user_id')
            ->where('todolists.user_id', $user_id)
            ->orderBy('tasks.created_at')
            ->get();
    }
}
