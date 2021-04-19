<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use function PHPUnit\Framework\isNull;

/**
 * App\Models\Todolist
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist query()
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist wherePatternId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Todolist whereUpdatedAt($value)
 * @mixin \Eloquent
 */

class Todolist extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
        'pattern_id',
        'predefined'
    ];

    static function getLists($filter, $user_id)
    {
        if ($user_id){
            if (!($filter === 'all')){
                return Todolist::where('user_id', $user_id)
                    ->where('predefined', $filter)
                    ->get();
            } else
                return Todolist::where('user_id', $user_id)->get();
        } else if ($filter == 1){
            return Todolist::where('user_id', 1)
                ->where('predefined', $filter)
                ->get();
        } else
            return null;
    }

}
