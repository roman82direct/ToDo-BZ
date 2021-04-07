<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

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

    static function getLists($predefined, $user_id)
    {
        if ($predefined){
            $lists = Todolist::where('user_id', 1)
                ->where('predefined', $predefined)
                ->get();
        } else {
            $lists = Todolist::where('user_id', $user_id)
                ->where('predefined', $predefined)
                ->get();
        }
        return $lists;
    }

}
