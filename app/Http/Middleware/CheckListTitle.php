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
        $count = Todolist::where('user_id', $request->get('user_id'))
            ->where('name', $request->get('name'))
            ->count();
        if ($count > 0){
            abort(400, 'Already exists');
        }

        return $next($request);
    }
}
