<?php

namespace App\Http\Middleware;

use App\Models\Todolist;
use Closure;
use Illuminate\Http\Request;

class CheckListTitle
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $countLists = Todolist::where('user_id', $request->get('user_id'))
            ->where('name', $request->get('name'))
            ->count();
        $exists = ($countLists > 0) ? true : false;
        if ($exists){
            abort(400, 'Already exists');
        }

        return $next($request);
    }
}
